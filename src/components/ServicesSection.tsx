import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Tablet, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "ТЕЛЕФОНЫ",
      description: "Ремонт всех марок телефонов",
      brands: ["iPhone", "Samsung", "Xiaomi", "Huawei", "Nokia", "LG", "Sony", "HTC", "Meizu", "Lenovo", "ZTE", "Realme", "Vivo", "Poco"],
      link: "/remont_telefonov"
    },
    {
      icon: Tablet,
      title: "ПЛАНШЕТЫ", 
      description: "Ремонт планшетов всех производителей",
      brands: ["iPad", "Samsung Galaxy Tab"],
      link: "/remont_planshetov"
    },
    {
      icon: Laptop,
      title: "НОУТБУКИ",
      description: "Ремонт ноутбуков и MacBook",
      brands: ["MacBook", "Все бренды"],
      link: "/remont_notebook"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Наши <span className="text-primary">Услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FIXim.BY — современный сервисный центр, который насчитывает 15 сотрудников. 
            Мы стараемся, чтобы сервис для Вас проходил на высшем уровне и Ваша проблема была решена.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Brands */}
                <div className="mb-8">
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.brands.map((brand, brandIndex) => (
                      <span 
                        key={brandIndex}
                        className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full border border-border"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

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
  );
};