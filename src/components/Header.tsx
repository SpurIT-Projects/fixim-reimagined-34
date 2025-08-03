import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-card shadow-card sticky top-0 z-50 transition-smooth">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden lg:flex justify-between items-center py-2 text-sm border-b border-border">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">
                ПН - ПТ: с 9:00 до 18:00, суббота с 10:00 до 18:00, воскресенье - выходной
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+375293534488" className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-smooth">
              <Phone className="w-4 h-4" />
              <span>+375(29)353-44-88</span>
            </a>
            <a href="tel:+375333534488" className="text-primary hover:text-primary-glow transition-smooth">
              +375(33)353-44-88
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">F</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">FIXim.BY</h1>
              <p className="text-xs text-muted-foreground">AT YOUR SIDE</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth">
              ГЛАВНАЯ
            </Link>
            <Link to="/remont_telefonov.html" className="text-foreground hover:text-primary transition-smooth">
              ТЕЛЕФОНЫ
            </Link>
            <Link to="/remont_planshetov.html" className="text-foreground hover:text-primary transition-smooth">
              ПЛАНШЕТЫ
            </Link>
            <Link to="/remont_notebook.html" className="text-foreground hover:text-primary transition-smooth">
              НОУТБУКИ
            </Link>
            <Link to="/remont-apple-watch.html" className="text-foreground hover:text-primary transition-smooth">
              APPLE WATCH
            </Link>
            <Link to="/services.html" className="text-foreground hover:text-primary transition-smooth">
              УСЛУГИ
            </Link>
            <Link to="/contacts.html" className="text-foreground hover:text-primary transition-smooth">
              КОНТАКТЫ
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 py-2">
                <a href="tel:+375293534488" className="flex items-center space-x-2 text-primary">
                  <Phone className="w-4 h-4" />
                  <span>+375(29)353-44-88</span>
                </a>
              </div>
              <Link to="/" className="text-foreground hover:text-primary transition-smooth py-2" onClick={toggleMenu}>
                ГЛАВНАЯ
              </Link>
              <Link to="/remont_telefonov.html" className="text-foreground hover:text-primary transition-smooth py-2" onClick={toggleMenu}>
                ТЕЛЕФОНЫ
              </Link>
              <Link to="/remont_planshetov.html" className="text-foreground hover:text-primary transition-smooth py-2" onClick={toggleMenu}>
                ПЛАНШЕТЫ
              </Link>
              <Link to="/remont_notebook.html" className="text-foreground hover:text-primary transition-smooth py-2" onClick={toggleMenu}>
                НОУТБУКИ
              </Link>
              <Link to="/remont-apple-watch.html" className="text-foreground hover:text-primary transition-smooth py-2" onClick={toggleMenu}>
                APPLE WATCH
              </Link>
              <Link to="/services.html" className="text-foreground hover:text-primary transition-smooth py-2" onClick={toggleMenu}>
                УСЛУГИ
              </Link>
              <Link to="/contacts.html" className="text-foreground hover:text-primary transition-smooth py-2" onClick={toggleMenu}>
                КОНТАКТЫ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};