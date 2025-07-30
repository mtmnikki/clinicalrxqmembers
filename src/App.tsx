/**
 * Main application component with routing
 */
import { HashRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Programs from './pages/Programs';
import About from './pages/About';
import Contact from './pages/Contact';
import SuccessStories from './pages/SuccessStories';
import Login from './pages/Login';
import Enroll from './pages/Enroll';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';
import ProgramDetail from './pages/ProgramDetail';
import MemberContent from './pages/MemberContent';
import { useAuthStore } from './stores/authStore';

/**
 * Protected route component for member-only pages
 */
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();
  
  if (!isAuthenticated) {
    return <Login />;
  }
  
  return <>{children}</>;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/enroll" element={<Enroll />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/member-content" element={
          <ProtectedRoute>
            <MemberContent />
          </ProtectedRoute>
        } />
        <Route path="/resources" element={
          <ProtectedRoute>
            <Resources />
          </ProtectedRoute>
        } />
        <Route path="/program/:id" element={
          <ProtectedRoute>
            <ProgramDetail />
          </ProtectedRoute>
        } />
      </Routes>
    </HashRouter>
  );
}
