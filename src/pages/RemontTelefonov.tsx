import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const RemontTelefonov = () => {
  const brands = [
    { name: "iPhone", path: "/remont_telefonov/iphone", description: "Ремонт iPhone всех моделей" },
    { name: "Samsung", path: "/remont_telefonov/samsung", description: "Ремонт телефонов Samsung Galaxy" },
    { name: "Xiaomi", path: "/remont_telefonov/xiaomi", description: "Ремонт телефонов Xiaomi и Redmi" },
    { name: "Huawei", path: "/remont_telefonov/huawei", description: "Ремонт телефонов Huawei и Honor" },
    { name: "Nokia", path: "/remont_telefonov/nokia", description: "Ремонт телефонов Nokia" },
    { name: "LG", path: "/remont_telefonov/lg", description: "Ремонт телефонов LG" },
    { name: "Sony", path: "/remont_telefonov/sony", description: "Ремонт телефонов Sony Xperia" },
    { name: "HTC", path: "/remont_telefonov/htc", description: "Ремонт телефонов HTC" },
    { name: "Meizu", path: "/remont_telefonov/meizu", description: "Ремонт телефонов Meizu" },
    { name: "Lenovo", path: "/remont_telefonov/lenovo", description: "Ремонт телефонов Lenovo" },
    { name: "ZTE", path: "/remont_telefonov/zte", description: "Ремонт телефонов ZTE" },
    { name: "Realme", path: "/remont_telefonov/realme", description: "Ремонт телефонов Realme" },
    { name: "Vivo", path: "/remont_telefonov/vivo", description: "Ремонт телефонов Vivo" },
    { name: "Poco", path: "/remont_telefonov/poco", description: "Ремонт телефонов Poco" }
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
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Ремонт телефонов
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Профессиональный ремонт мобильных телефонов всех марок и моделей. 
                Более 90% ремонтов выполняем за 1 час. Замена экрана от 15 минут.
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
                Мы ремонтируем телефоны всех популярных производителей с использованием оригинальных запчастей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {brands.map((brand, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {brand.description}
                    </p>
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
                Виды ремонта телефонов
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
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Программный ремонт:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Прошивка телефона</li>
                    <li>• Разблокировка</li>
                    <li>• Восстановление ПО</li>
                    <li>• Удаление вирусов</li>
                    <li>• Настройка системы</li>
                    <li>• Восстановление данных</li>
                    <li>• Сброс до заводских настроек</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Если вы не нашли своего производителя, проконсультируйтесь с нашим специалистом по телефонам
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

export default RemontTelefonov;