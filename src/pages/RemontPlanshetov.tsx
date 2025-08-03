import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tablet, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const RemontPlanshetov = () => {
  const brands = [
    { name: "iPad", path: "/remont_planshetov/ipad.html", description: "Ремонт iPad всех моделей" },
    { name: "Samsung", path: "/remont_planshetov/samsung.html", description: "Ремонт планшетов Samsung Galaxy Tab" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Tablet className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Ремонт планшетов
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Профессиональный ремонт планшетов всех марок и моделей. 
                Качественные запчасти, опытные мастера, быстрое выполнение работ.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 text-lg px-8 py-6"
                  onClick={() => window.location.href = 'tel:+375293534488'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +375(29)353-44-88
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Поддерживаемые <span className="text-primary">бренды</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Мы ремонтируем планшеты ведущих производителей с использованием оригинальных запчастей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {brands.map((brand, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Tablet className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {brand.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {brand.description}
                    </p>
                    <Button 
                      asChild
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    >
                      <Link to={brand.path}>
                        Подробнее
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Info */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Виды ремонта планшетов
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Аппаратный ремонт:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Замена дисплея и тачскрина</li>
                    <li>• Замена аккумулятора</li>
                    <li>• Ремонт разъема зарядки</li>
                    <li>• Замена камеры</li>
                    <li>• Ремонт кнопок</li>
                    <li>• Замена динамика и микрофона</li>
                    <li>• Ремонт после попадания влаги</li>
                    <li>• Замена стекла корпуса</li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Программный ремонт:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Прошивка планшета</li>
                    <li>• Разблокировка</li>
                    <li>• Восстановление ПО</li>
                    <li>• Удаление вирусов</li>
                    <li>• Настройка системы</li>
                    <li>• Восстановление данных</li>
                    <li>• Сброс до заводских настроек</li>
                    <li>• Установка приложений</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Качественный ремонт планшетов с гарантией на выполненные работы
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <a href="tel:+375293534488" className="text-primary hover:text-primary-glow transition-smooth">
                    +375(29)353-44-88
                  </a>
                  <a href="tel:+375333534488" className="text-primary hover:text-primary-glow transition-smooth">
                    +375(33)353-44-88
                  </a>
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

export default RemontPlanshetov;