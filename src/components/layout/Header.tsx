/**
 * Main header component with navigation
 */
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Button } from '../ui/button';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();
  const location = useLocation();

  const publicNavItems = [
    { href: '/', label: 'Home' },
    { href: '/programs', label: 'Programs' },
    { href: '/about', label: 'About' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/contact', label: 'Contact' }
  ];

  const memberNavItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/member-content', label: 'Member Content' },
    { href: '/programs', label: 'Programs' },
    { href: '/resources', label: 'Resources' }
  ];

  const navItems = isAuthenticated ? memberNavItems : publicNavItems;

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img 
                  src="https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/d749f31c-6bc0-4053-9a23-63ff4330dc35.png" 
                  alt="ClinicalRxQ Logo" 
                  className="w-6 h-6"
                />
              </div>
            </div>
            <div className="text-2xl font-bold">
              <span className="text-gray-800">Clinical</span>
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">RxQ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  location.pathname === item.href
                    ? 'text-purple-600'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{user?.firstName} {user?.lastName}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="flex items-center space-x-2 border-gray-300 hover:border-purple-500 hover:text-purple-600"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-300 hover:border-purple-500 hover:text-purple-600"
                  >
                    Member Login
                  </Button>
                </Link>
                <Link to="/enroll">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-purple-600 ${
                    location.pathname === item.href
                      ? 'text-purple-600'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {isAuthenticated ? (
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex items-center px-3 py-2">
                    <User className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-700">{user?.firstName} {user?.lastName}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={logout}
                    className="w-full mt-2 flex items-center justify-center space-x-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </div>
              ) : (
                <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full">
                      Member Login
                    </Button>
                  </Link>
                  <Link to="/enroll" onClick={() => setIsMenuOpen(false)}>
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}