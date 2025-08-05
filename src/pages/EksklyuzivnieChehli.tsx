import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Phone, Star, Palette, Shield } from "lucide-react";
import heroImage from "@/assets/hero-tech-repair.jpg";

const EksklyuzivnieChehli = () => {
  const features = [
    {
      icon: Star,
      title: "Премиум качество",
      description: "Изготовлены из высококачественных материалов"
    },
    {
      icon: Palette,
      title: "Большой выбор",
      description: "Разнообразные дизайны и цветовые решения"
    },
    {
      icon: Shield,
      title: "Надежная защита",
      description: "Защищают от ударов, царапин и загрязнений"
    }
  ];

  const caseTypes = [
    "Силиконовые чехлы",
    "Кожаные чехлы", 
    "Пластиковые чехлы",
    "Чехлы-книжки",
    "Защитные стекла",
    "Водонепроницаемые чехлы",
    "Чехлы с подставкой",
    "Прозрачные чехлы"
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
              <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-2xl">
                Эксклюзивные чехлы
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Большой выбор качественных чехлов для всех моделей телефонов и планшетов. 
                Стиль, защита и индивидуальность в одном аксессуаре.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Почему выбирают <span className="text-primary">наши чехлы</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Types */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Виды чехлов
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseTypes.map((type, index) => (
                  <div key={index} className="bg-card rounded-lg p-4 text-center shadow-card hover:shadow-elegant transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Gift className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{type}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-card rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-center text-foreground mb-6">
                  Индивидуальный подбор
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                      <Gift className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground">Подбор по модели</h4>
                    <p className="text-sm text-muted-foreground">
                      Идеальная совместимость с вашим устройством
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                      <Palette className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground">Выбор дизайна</h4>
                    <p className="text-sm text-muted-foreground">
                      Множество цветов и стилей на любой вкус
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground">Уровень защиты</h4>
                    <p className="text-sm text-muted-foreground">
                      От базовой до максимальной защиты
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Преимущества наших чехлов
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Функциональность:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Полный доступ ко всем портам и кнопкам</li>
                    <li>• Совместимость с беспроводной зарядкой</li>
                    <li>• Не препятствуют работе камеры</li>
                    <li>• Идеальная посадка по размеру</li>
                    <li>• Легкое надевание и снятие</li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Качество материалов:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Прочные и долговечные материалы</li>
                    <li>• Устойчивость к выцветанию</li>
                    <li>• Легкость в уходе</li>
                    <li>• Экологически безопасные материалы</li>
                    <li>• Приятные тактильные ощущения</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Найдите идеальный чехол для вашего устройства
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Посетите наш сервисный центр и выберите чехол из большого ассортимента
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  onClick={() => window.location.href = 'tel:+375293534488'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Узнать наличие: +375(29)353-44-88
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

export default EksklyuzivnieChehli;