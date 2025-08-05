import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-tech-repair.jpg";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-2xl">
                Контакты
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Свяжитесь с нами любым удобным способом. 
                Мы всегда готовы помочь решить вашу проблему.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Phone */}
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Телефоны
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+375293534488" 
                      className="block text-lg text-primary hover:text-primary-glow transition-smooth"
                    >
                      +375(29)353-44-88
                    </a>
                    <a 
                      href="tel:+375333534488" 
                      className="block text-lg text-primary hover:text-primary-glow transition-smooth"
                    >
                      +375(33)353-44-88
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Звоните в любое время в рабочие часы
                  </p>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Адрес
                  </h3>
                  <p className="text-lg text-foreground mb-2">
                    г. Минск
                  </p>
                  <p className="text-muted-foreground">
                    Фрунзенский район
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Точный адрес уточняйте по телефону
                  </p>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Режим работы
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>ПН - ПТ: с 9:00 до 18:00</p>
                    <p>Суббота: с 10:00 до 18:00</p>
                    <p>Воскресенье: выходной</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card shadow-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                    О компании <span className="text-primary">FIXim.BY</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          Наши преимущества:
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• 15 опытных специалистов</li>
                          <li>• Работаем с 2009 года</li>
                          <li>• Более 90% ремонтов за 1 час</li>
                          <li>• Оригинальные запчасти</li>
                          <li>• Гарантия на работы</li>
                          <li>• Бесплатная диагностика</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          Виды услуг:
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Ремонт мобильных телефонов</li>
                          <li>• Ремонт планшетов</li>
                          <li>• Ремонт ноутбуков</li>
                          <li>• Ремонт Apple Watch</li>
                          <li>• Установка защитных пленок</li>
                          <li>• Продажа аксессуаров</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border text-center">
                    <p className="text-lg text-foreground font-medium mb-4">
                      Чтобы уточнить возникающие вопросы, наличие деталей, срочный ремонт, 
                      компетенцию мастера, обращайтесь к нам в любое время.
                    </p>
                    <p className="text-muted-foreground">
                      Мы постараемся дать самые полные ответы на все ваши вопросы.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Как нас найти
              </h2>
              <p className="text-lg text-muted-foreground">
                Мы находимся в Фрунзенском районе Минска
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-muted/30 rounded-2xl p-8 text-center">
                <MapPin className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Удобное расположение
                </h3>
                <p className="text-muted-foreground mb-6">
                  Наш сервисный центр удобно расположен в Фрунзенском районе Минска. 
                  Точный адрес и схему проезда уточняйте по телефону.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    onClick={() => window.location.href = 'tel:+375293534488'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Уточнить адрес
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Написать в мессенджер
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;