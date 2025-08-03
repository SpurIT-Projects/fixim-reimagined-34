import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">F</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">FIXim.BY</h3>
                <p className="text-xs text-muted-foreground">AT YOUR SIDE</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Современный сервисный центр по ремонту мобильной техники. 
              15 специалистов, качественный ремонт, оригинальные запчасти.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Услуги</h3>
            <div className="space-y-2 text-sm">
              <Link to="/remont_telefonov.html" className="block text-muted-foreground hover:text-primary transition-smooth">
                Ремонт телефонов
              </Link>
              <Link to="/remont_planshetov.html" className="block text-muted-foreground hover:text-primary transition-smooth">
                Ремонт планшетов
              </Link>
              <Link to="/remont_notebook.html" className="block text-muted-foreground hover:text-primary transition-smooth">
                Ремонт ноутбуков
              </Link>
              <Link to="/remont-apple-watch.html" className="block text-muted-foreground hover:text-primary transition-smooth">
                Ремонт Apple Watch
              </Link>
              <Link to="/gidrogelevaya_plenka.html" className="block text-muted-foreground hover:text-primary transition-smooth">
                Гидрогелевая пленка
              </Link>
              <Link to="/eksklyuzivnie-chehli.html" className="block text-muted-foreground hover:text-primary transition-smooth">
                Эксклюзивные чехлы
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+375293534488" className="block text-muted-foreground hover:text-primary transition-smooth">
                    +375(29)353-44-88
                  </a>
                  <a href="tel:+375333534488" className="block text-muted-foreground hover:text-primary transition-smooth">
                    +375(33)353-44-88
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  г. Минск, Фрунзенский район
                </span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Режим работы</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>ПН - ПТ: с 9:00 до 18:00</p>
                  <p>Суббота: с 10:00 до 18:00</p>
                  <p>Воскресенье: выходной</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p>© 2024 FIXim.BY. Все права защищены.</p>
              <p className="mt-1">
                Сервисный центр по ремонту мобильной техники в Минске
              </p>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>Работаем с 2009 года</p>
              <p>Более 90% ремонтов за 1 час</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};