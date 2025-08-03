import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Clock, Award } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Тщательная диагностика",
      description: "Мы выполняем тщательную диагностику неполадок, быстро находим проблемы, вне зависимости от конкретной модели."
    },
    {
      icon: Users,
      title: "Сертифицированные запчасти",
      description: "У нас есть все необходимые сертифицированные запчасти. Вам не придется тратить свое время на поиск интересующей детали."
    },
    {
      icon: Clock,
      title: "Современное оборудование",
      description: "Современное оборудование позволяет выполнить тщательную диагностику и выявить поломку любой сложности."
    },
    {
      icon: Award,
      title: "Гарантия качества",
      description: "На свою работу предоставляем непременную гарантию, все замечания устраняем бесплатно."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Сервисный центр по <span className="text-primary">ремонту телефонов</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground max-w-4xl mx-auto">
            <p className="leading-relaxed">
              Вы случайно уронили свой телефон? На аппарат попала жидкость? Не можете представить свою жизнь без мобильной связи? 
              Хотите устранить поломку, выполнив ремонт телефонов, и не тратить деньги на приобретение новой техники?
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Доверив свой телефон нам, вы сможете и дальше пользоваться им в привычном режиме
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Economics section */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            С нами вы экономите
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <p className="text-muted-foreground">
                После оформления договора мы выполняем диагностику за свой счет. При необходимости, эту процедуру можно реализовать за отдельную плату.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <p className="text-muted-foreground">
                На запчасти и расходные материалы компания установила минимальные наценки, не перекладывая все на заказчиков.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <p className="text-muted-foreground">
                Завершив работу, обязательно оповещаем клиентов о необходимости забрать телефон.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <p className="text-muted-foreground">
                Стоимость наших услуг вполне доступна. Мы стараемся снижать издержки, сохраняя отменное качество.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                5
              </div>
              <p className="text-muted-foreground">
                Подписав договор, всегда придерживаемся его положений, включая стоимость, сроки, ответственность компании.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};