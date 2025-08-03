import qualityIcon from "@/assets/quality-icon.png";
import priceIcon from "@/assets/price-icon.png";
import speedIcon from "@/assets/speed-icon.png";
import promoIcon from "@/assets/promo-icon.png";

export const AdvantagesSection = () => {
  const advantages = [
    {
      icon: qualityIcon,
      title: "КАЧЕСТВО",
      description: "Только оригинальные запчасти и качественный ремонт мобильной техники"
    },
    {
      icon: priceIcon,
      title: "СТОИМОСТЬ",
      description: "Лучшие цены! Скидки постоянным клиентам!"
    },
    {
      icon: speedIcon,
      title: "СКОРОСТЬ",
      description: "Более 90% ремонтов мобильных телефонов происходит в течение 1 часа. Замена экрана от 15 минут"
    },
    {
      icon: promoIcon,
      title: "АКЦИЯ!",
      description: "При выполнении ремонта по замене стекла на телефоне от 70 рублей гидрогелевую пленку наклеим в подарок."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full p-4 flex items-center justify-center">
                <img 
                  src={advantage.icon} 
                  alt={advantage.title}
                  className="w-12 h-12 object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};