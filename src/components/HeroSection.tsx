import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-tech-repair.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-2xl">
              <span className="text-white">FIXim</span>
              <span className="text-white">.BY</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-light drop-shadow-lg">
              AT YOUR SIDE
            </p>
          </div>

          {/* Service description */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              РЕМОНТ МОБИЛЬНОЙ ТЕХНИКИ
            </h2>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Современный сервисный центр с 15 специалистами. 
              Более 90% ремонтов выполняем за 1 час. Замена экрана от 15 минут.
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg text-white drop-shadow-md">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-white" />
              <span>ПН - ПТ: с 9:00 до 18:00</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/50"></div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-white" />
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
          <p className="text-sm text-white mt-8 drop-shadow-md">
            Если вы не нашли своего производителя, проконсультируйтесь с нашим специалистом
          </p>
        </div>
      </div>
    </section>
  );
};