import { useState, useEffect } from 'react';
import { Linkedin, FileText, Code2, PenLine, Menu, X, BarChart3 } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Analytics from './components/Analytics';
import AdminLogin from './components/AdminLogin';
import { trackPageView } from './lib/analytics';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects' | 'thoughts' | 'analytics'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_authenticated') === 'true';
  });

  const navigateTo = (page: 'home' | 'projects' | 'thoughts' | 'analytics') => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    trackPageView(currentPage);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => navigateTo('home')}
                className={`transition-colors font-medium ${
                  currentPage === 'home' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('projects')}
                className={`transition-colors font-medium ${
                  currentPage === 'projects' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => navigateTo('thoughts')}
                className={`transition-colors font-medium ${
                  currentPage === 'thoughts' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Thoughts
              </button>
            </div>

            <div className="md:hidden">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
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
                  currentPage === 'home' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('projects')}
                className={`text-left transition-colors font-medium py-2 ${
                  currentPage === 'projects' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => navigateTo('thoughts')}
                className={`text-left transition-colors font-medium py-2 ${
                  currentPage === 'thoughts' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Thoughts
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {currentPage === 'home' && <Hero />}
        {currentPage === 'projects' && <Projects />}
        {currentPage === 'thoughts' && <Blog />}
        {currentPage === 'analytics' && (
          isAdminAuthenticated ? (
            <Analytics />
          ) : (
            <AdminLogin onLogin={() => setIsAdminAuthenticated(true)} />
          )
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-slate-500 text-sm">
            © 2025. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
