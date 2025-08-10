/**
 * Simple JWT-based authentication system
 * Works with Airtable member database
 */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { airtableService, Member } from './airtable';

interface AuthToken {
  email: string;
  membershipLevel: string;
  exp: number;
}

class AuthService {
  private jwtSecret: string;

  constructor() {
    // In production, this would be an environment variable
    this.jwtSecret = process.env.JWT_SECRET || 'your-secret-key-here';
  }

  /**
   * Authenticate member with email/password
   * (Password verification would be added based on your needs)
   */
  async authenticateMember(email: string, password: string): Promise<string | null> {
    try {
      // Get member from Airtable
      const member = await airtableService.getMemberByEmail(email);
      
      if (!member || !member.isActive) {
        return null;
      }

      // Here you would verify password
      // For now, we'll assume password verification passes
      const isPasswordValid = await this.verifyPassword(email, password);
      
      if (!isPasswordValid) {
        return null;
      }

      // Generate JWT token
      const token = jwt.sign(
        {
          email: member.email,
          membershipLevel: member.membershipLevel,
          exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
        },
        this.jwtSecret
      );

      return token;
    } catch (error) {
      console.error('Authentication error:', error);
      return null;
    }
  }

  /**
   * Verify JWT token and return member info
   */
  verifyToken(token: string): AuthToken | null {
    try {
      const decoded = jwt.verify(token, this.jwtSecret) as AuthToken;
      return decoded;
    } catch (error) {
      console.error('Token verification failed:', error);
      return null;
    }
  }

  /**
   * Check if member has access to specific program
   */
  async checkProgramAccess(token: string, programId: string): Promise<boolean> {
    const decoded = this.verifyToken(token);
    
    if (!decoded) {
      return false;
    }

    return await airtableService.checkProgramAccess(decoded.email, programId);
  }

  /**
   * Verify password (placeholder - implement based on your needs)
   * Could integrate with Google Workspace, or use bcrypt for stored passwords
   */
  private async verifyPassword(email: string, password: string): Promise<boolean> {
    // 1. Get the member from Airtable
    const member = await airtableService.getMemberByEmail(email);

    // 2. Check if the member and their stored password hash exist
    if (!member || !member.passwordHash) {
        // No user or no password stored for them
        return false;
    }

    // 3. Securely compare the provided password with the stored hash
    return await bcrypt.compare(password, member.passwordHash);
}

  /**
   * Generate magic link for passwordless login
   */
  generateMagicLink(email: string): string {
    const token = jwt.sign(
      { email, purpose: 'magic-link', exp: Math.floor(Date.now() / 1000) + (15 * 60) }, // 15 minutes
      this.jwtSecret
    );
    
    return `${process.env.SITE_URL}/auth/magic-login?token=${token}`;
  }
}

export const authService = new AuthService();
export type { AuthToken };
