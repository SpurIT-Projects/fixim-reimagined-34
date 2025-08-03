import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-white">FIXim</span>
              <span className="text-primary-glow">.BY</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light">
              AT YOUR SIDE
            </p>
          </div>

          {/* Service description */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              РЕМОНТ МОБИЛЬНОЙ ТЕХНИКИ
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Современный сервисный центр с 15 специалистами. 
              Более 90% ремонтов выполняем за 1 час. Замена экрана от 15 минут.
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary-glow" />
              <span>ПН - ПТ: с 9:00 до 18:00</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-400"></div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary-glow" />
              <span>воскресенье - выходной</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 text-lg px-8 py-6"
              onClick={() => window.location.href = 'tel:+375293534488'}
            >
              <Phone className="w-5 h-5 mr-2" />
              +375(29)353-44-88
            </Button>
            <Button 
              size="lg" 
              className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 text-lg px-8 py-6"
              onClick={() => window.location.href = 'tel:+375333534488'}
            >
              +375(33)353-44-88
            </Button>
          </div>

          {/* Additional info */}
          <p className="text-sm text-gray-300 mt-8">
            Если вы не нашли своего производителя, проконсультируйтесь с нашим специалистом
          </p>
        </div>
      </div>
    </section>
  );
};