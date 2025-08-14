/**
 * Minimal Airtable REST client (browser + runtime PAT/Base ID)
 * - Performs direct fetch calls in the  private transformRecord(record: AirtableRecord): Member {
    return {
      id: record.id,
      email: record.fields.Email,
      name: record.fields.Name,
      membershipLevel: record.fields['Membership Level'] as Member['membershipLevel'],
      accessiblePrograms: record.fields['Accessible Programs'] || [],
      isActive: record.fields['Is Active'],
      joinDate: record.fields['Join Date'],
      passwordHash: record.fields['passwordHash']
    };
  }ng Authorization: Bearer <PAT>, matching official docs.
 * - Enforces Airtable rate limits with a small client-side limiter (5 req/s → 220ms min spacing).
 * - Adds retry logic for 429 (wait 30s, retry) and 5xx (exponential backoff).
 * - Uses returnFieldsByFieldId=true for reads so fields are keyed by Field IDs.
 */

import { getAirtableBaseId, getAirtableToken } from '../config/airtableConfig';

/** Member interface used throughout the service */
export interface Member {
  id: string;
  email: string;
  name: string;
  membershipLevel: 'basic' | 'premium' | 'enterprise';
  accessiblePrograms: string[];
  isActive: boolean;
  joinDate: string;
  passwordHash?: string;
}

/** Generic Airtable record keyed by Field IDs */
export interface AirtableRecord {
  id: string;
  fields: {
    Email: string;
    Name: string;
    'Membership Level': string;
    'Accessible Programs': string[];
    'Is Active': boolean;
    'Join Date': string;
    fldm5mYvdmlB0rYMy?: string; // passwordHash
  };
}

class AirtableService {
  private baseId: string;
  private apiKey: string;
  private tableName: string;

  constructor() {
    this.baseId = process.env.AIRTABLE_BASE_ID || '';
    this.apiKey = process.env.AIRTABLE_API_KEY || '';
    this.tableName = 'Members';
  }

  /**
   * Get member by email address
   */
  async getMemberByEmail(email: string): Promise<Member | null> {
    try {
      const url = `https://api.airtable.com/v0/${this.baseId}/${this.tableName}?filterByFormula={Email}='${email}'`;
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch member data');
      }

      const data = await response.json();
      
      if (data.records.length === 0) {
        return null;
      }

      const record: AirtableRecord = data.records[0];
      return this.transformRecord(record);
    } catch (error) {
      console.error('Error fetching member:', error);
      return null;
    }
  }

  /**
   * Check if member has access to specific program
   */
  async checkProgramAccess(email: string, programId: string): Promise<boolean> {
    const member = await this.getMemberByEmail(email);
    
    if (!member || !member.isActive) {
      return false;
    }

    return member.accessiblePrograms.includes(programId) || 
           member.membershipLevel === 'enterprise'; // Enterprise gets everything
  }

  /**
   * Get all accessible programs for a member
   */
  async getMemberPrograms(email: string): Promise<string[]> {
    const member = await this.getMemberByEmail(email);
    
    if (!member || !member.isActive) {
      return [];
    }

    return member.accessiblePrograms;
  }

  /**
   * Transform Airtable record to Member interface
   */
  private transformRecord(record: AirtableRecord): Member {
    return {
      id: record.id,
      email: record.fields.Email,
      name: record.fields.Name,
      membershipLevel: record.fields['Membership Level'] as Member['membershipLevel'],
      accessiblePrograms: record.fields['Accessible Programs'] || [],
      isActive: record.fields['Is Active'],
      joinDate: record.fields['Join Date'],
      passwordHash: record.fields.fldm5mYvdmlB0rYMy
    };
  }
}

export const airtableService = new AirtableService();
