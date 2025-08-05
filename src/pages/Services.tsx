import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tech-repair.jpg";

const Services = () => {
  const additionalServices = [
    {
      icon: Shield,
      title: "Гидрогелевая пленка",
      description: "Защитная пленка для экрана телефона. Обеспечивает надежную защиту от царапин и ударов.",
      link: "/gidrogelevaya_plenka.html"
    },
    {
      icon: Gift,
      title: "Эксклюзивные чехлы",
      description: "Большой выбор качественных чехлов для всех моделей телефонов и планшетов.",
      link: "/eksklyuzivnie-chehli.html"
    }
  ];

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
                Наши услуги
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Полный спектр услуг по ремонту и обслуживанию мобильной техники. 
                Качественно, быстро, с гарантией.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Основные <span className="text-primary">услуги</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-4">Ремонт телефонов</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Все виды ремонта мобильных телефонов
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/remont_telefonov.html">Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-4">Ремонт планшетов</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Качественный ремонт планшетов всех марок
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/remont_planshetov.html">Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-4">Ремонт ноутбуков</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Профессиональный ремонт ноутбуков
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/remont_notebook.html">Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-4">Ремонт Apple Watch</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ремонт умных часов Apple
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/remont-apple-watch.html">Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Additional Services */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Дополнительные <span className="text-primary">услуги</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Button 
                      asChild
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    >
                      <Link to={service.link}>
                        Подробнее
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Нужна консультация?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Если вы не нашли нужную услугу или у вас есть вопросы, 
                свяжитесь с нашими специалистами
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  onClick={() => window.location.href = 'tel:+375293534488'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +375(29)353-44-88
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.location.href = 'tel:+375333534488'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +375(33)353-44-88
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;