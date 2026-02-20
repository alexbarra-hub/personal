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
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => navigateTo('home')}
              className="text-xl font-semibold text-neutral-900 hover:text-neutral-700 transition-colors"
            >
              Alex
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => navigateTo('home')}
                className={`transition-colors ${
                  currentPage === 'home' ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                About me
              </button>
              <button
                onClick={() => navigateTo('projects')}
                className={`transition-colors ${
                  currentPage === 'projects' ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Case studies
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://www.linkedin.com/in/alexbarra"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-neutral-300 rounded-full text-neutral-900 hover:bg-neutral-100 transition-all"
              >
                See my work
              </a>
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
                className={`text-left transition-colors py-2 ${
                  currentPage === 'home' ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                About me
              </button>
              <button
                onClick={() => navigateTo('projects')}
                className={`text-left transition-colors py-2 ${
                  currentPage === 'projects' ? 'text-neutral-900' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Case studies
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
      <footer className="bg-stone-50 text-neutral-500 py-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center text-sm">
            © 2026 Alex Barra. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
