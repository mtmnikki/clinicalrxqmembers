/**
 * Members-only resource library
 */
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Search, 
  Download, 
  FileText, 
  Video, 
  BookOpen, 
  Filter,
  Star,
  Calendar
} from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      id: 1,
      title: 'Drug Interaction Reference Guide',
      type: 'PDF',
      category: 'Reference',
      description: 'Comprehensive guide to common drug interactions in community pharmacy',
      downloadCount: 1245,
      rating: 4.8,
      dateAdded: '2024-01-08',
      size: '2.3 MB'
    },
    {
      id: 2,
      title: 'Patient Counseling Checklist',
      type: 'PDF',
      category: 'Tools',
      description: 'Essential checklist for effective patient counseling sessions',
      downloadCount: 892,
      rating: 4.9,
      dateAdded: '2024-01-05',
      size: '1.1 MB'
    },
    {
      id: 3,
      title: 'Clinical Case Studies Collection',
      type: 'Video',
      category: 'Training',
      description: 'Real-world clinical scenarios and solutions',
      downloadCount: 756,
      rating: 4.7,
      dateAdded: '2024-01-03',
      size: '145 MB'
    },
    {
      id: 4,
      title: 'Pharmacy Law Updates 2024',
      type: 'PDF',
      category: 'Legal',
      description: 'Latest updates to pharmacy regulations and compliance requirements',
      downloadCount: 623,
      rating: 4.6,
      dateAdded: '2024-01-01',
      size: '3.7 MB'
    }
  ];

  const categories = ['All', 'Reference', 'Tools', 'Training', 'Legal'];
  const fileTypes = ['All', 'PDF', 'Video', 'Audio', 'Document'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Resource Library</h1>
          <p className="text-gray-600">Access exclusive training materials, guides, and tools</p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search resources..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category.toLowerCase()}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{resource.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{resource.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Type: {resource.type}</span>
                          <span>Size: {resource.size}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {resource.dateAdded}
                          </div>
                          <span>{resource.downloadCount} downloads</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Other category tabs would filter the resources */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category} value={category.toLowerCase()} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources
                    .filter(r => r.category === category)
                    .map((resource) => (
                      <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="secondary">{resource.category}</Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{resource.rating}</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <span>Type: {resource.type}</span>
                              <span>Size: {resource.size}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {resource.dateAdded}
                              </div>
                              <span>{resource.downloadCount} downloads</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                            <Button size="sm" variant="outline">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        {/* Featured Resources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Featured Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Clinical Pharmacy Handbook</h3>
                  <p className="text-sm text-gray-600">Essential reference for daily practice</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Video className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Patient Communication Masterclass</h3>
                  <p className="text-sm text-gray-600">Video series on effective counseling</p>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
}