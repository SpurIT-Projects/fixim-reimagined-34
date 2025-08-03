import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Phone, CheckCircle, Star } from "lucide-react";

const GidrogelevayaPlenka = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Надежная защита",
      description: "Защищает экран от царапин, сколов и потертостей"
    },
    {
      icon: CheckCircle,
      title: "Прозрачность",
      description: "Полностью прозрачная, не влияет на качество изображения"
    },
    {
      icon: Star,
      title: "Самовосстановление",
      description: "Мелкие царапины исчезают в течение 24 часов"
    }
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
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Гидрогелевая пленка
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Надежная защита экрана вашего устройства. Высокое качество, прозрачность и долговечность.
              </p>
              <div className="bg-orange/20 backdrop-blur-sm rounded-xl p-6 border border-orange/30">
                <h2 className="text-2xl font-bold text-white mb-2">🎁 АКЦИЯ!</h2>
                <p className="text-lg text-gray-200">
                  При выполнении ремонта по замене стекла на телефоне от 70 рублей 
                  гидрогелевую пленку наклеим в подарок!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Преимущества <span className="text-primary">гидрогелевой пленки</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Особенности гидрогелевой пленки
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Защитные свойства:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Защита от царапин и потертостей</li>
                    <li>• Устойчивость к ударам</li>
                    <li>• Защита от отпечатков пальцев</li>
                    <li>• Устойчивость к воздействию влаги</li>
                    <li>• УФ-защита экрана</li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Технические характеристики:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Толщина: 0.14 мм</li>
                    <li>• Прозрачность: 99%</li>
                    <li>• Идеальное прилегание к экрану</li>
                    <li>• Не оставляет следов при снятии</li>
                    <li>• Совместима с чехлами</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-card rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-center text-foreground mb-6">
                  Процесс установки
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <h4 className="font-semibold text-foreground">Очистка</h4>
                    <p className="text-sm text-muted-foreground">
                      Тщательная очистка экрана от пыли и загрязнений
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <h4 className="font-semibold text-foreground">Позиционирование</h4>
                    <p className="text-sm text-muted-foreground">
                      Точное позиционирование пленки на экране
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <h4 className="font-semibold text-foreground">Нанесение</h4>
                    <p className="text-sm text-muted-foreground">
                      Аккуратное нанесение без пузырей
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <h4 className="font-semibold text-foreground">Финализация</h4>
                    <p className="text-sm text-muted-foreground">
                      Проверка качества и окончательная фиксация
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Защитите свой экран уже сегодня
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Качественная установка гидрогелевой пленки с гарантией
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  onClick={() => window.location.href = 'tel:+375293534488'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Записаться: +375(29)353-44-88
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

export default GidrogelevayaPlenka;