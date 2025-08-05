import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Watch, Phone } from "lucide-react";
import heroImage from "@/assets/hero-tech-repair.jpg";

const RemontAppleWatch = () => {
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
                <Watch className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-2xl">
                Ремонт Apple Watch
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Профессиональный ремонт Apple Watch всех серий и моделей. 
                Замена дисплея, аккумулятора, кнопок и других компонентов.
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

        {/* Services Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Виды ремонта Apple Watch
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Популярные поломки:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Замена дисплея и тачскрина</li>
                    <li>• Замена аккумулятора</li>
                    <li>• Ремонт кнопок Digital Crown и боковой кнопки</li>
                    <li>• Замена вибромотора</li>
                    <li>• Ремонт динамика и микрофона</li>
                    <li>• Ремонт после попадания влаги</li>
                    <li>• Замена стекла</li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Поддерживаемые модели:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Apple Watch Series 1</li>
                    <li>• Apple Watch Series 2</li>
                    <li>• Apple Watch Series 3</li>
                    <li>• Apple Watch Series 4</li>
                    <li>• Apple Watch Series 5</li>
                    <li>• Apple Watch Series 6</li>
                    <li>• Apple Watch SE</li>
                    <li>• Apple Watch Series 7 и новее</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-card rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-center text-foreground mb-6">
                  Особенности ремонта Apple Watch
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                      <Watch className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground">Точная диагностика</h4>
                    <p className="text-sm text-muted-foreground">
                      Используем специализированное оборудование для точной диагностики умных часов
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                      <Watch className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground">Оригинальные запчасти</h4>
                    <p className="text-sm text-muted-foreground">
                      Используем только качественные запчасти для Apple Watch
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                      <Watch className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground">Быстрый ремонт</h4>
                    <p className="text-sm text-muted-foreground">
                      Большинство ремонтов выполняем в течение дня
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Качественный ремонт Apple Watch с гарантией на выполненные работы
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

export default RemontAppleWatch;