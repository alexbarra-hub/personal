import { useState, useEffect } from 'react';
import { Linkedin, FileText, Code2, PenLine, Menu, X, BarChart3 } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Analytics from './components/Analytics';
import AdminLogin from './components/AdminLogin';
import { trackPageView } from './lib/analytics';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects' | 'analytics'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_authenticated') === 'true';
  });

  const navigateTo = (page: 'home' | 'projects' | 'analytics') => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    trackPageView(currentPage);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => navigateTo('home')}
                className={`transition-colors font-medium ${
                  currentPage === 'home' ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('projects')}
                className={`transition-colors font-medium ${
                  currentPage === 'projects' ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Projects
              </button>
            </div>

            <div className="md:hidden">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-neutral-600 hover:text-neutral-900"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 flex flex-col gap-3">
              <button
                onClick={() => navigateTo('home')}
                className={`text-left transition-colors font-medium py-2 ${
                  currentPage === 'home' ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('projects')}
                className={`text-left transition-colors font-medium py-2 ${
                  currentPage === 'projects' ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Projects
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {currentPage === 'home' && <Hero />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'analytics' && (
          isAdminAuthenticated ? (
            <Analytics />
          ) : (
            <AdminLogin onLogin={() => setIsAdminAuthenticated(true)} />
          )
        )}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-8 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-neutral-500 text-sm">
            © 2026 Alex Barra. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
