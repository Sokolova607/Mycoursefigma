import { DollarSign, Package, Ticket } from 'lucide-react';

const pricingOptions = [
  {
    icon: Package,
    title: 'Полный курс',
    subtitle: '10 уроков',
    price: '12 000',
    currency: 'руб',
    features: [
      'Все 8 модулей программы',
      'Дипломный проект',
      'Сертификат по окончании',
      'Экономия 1 000 руб'
    ],
    popular: true,
    color: 'primary'
  },
  {
    icon: Ticket,
    title: 'Абонемент',
    subtitle: 'за урок',
    price: '1 300',
    currency: 'руб',
    features: [
      'Оплата по уроку',
      'Гибкость в планировании',
      'Без обязательств'
    ],
    popular: false,
    color: 'secondary'
  }
];

export function Pricing() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 border border-primary/30">
          <span className="text-sm text-primary">💳 Стоимость</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Выберите свой вариант
        </h2>
        <p className="text-muted-foreground text-lg">
          Инвестиция в уверенность вашего ребёнка
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {pricingOptions.map((option, index) => {
          const Icon = option.icon;
          const isPopular = option.popular;
          const colorClass = option.color === 'primary' ? 'text-primary' : 'text-secondary';
          const bgColorClass = option.color === 'primary' ? 'bg-primary' : 'bg-secondary';
          const borderColorClass = option.color === 'primary' ? 'border-primary' : 'border-secondary';

          return (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl bg-card border-2 transition-all duration-300 ${
                isPopular 
                  ? `${borderColorClass} shadow-lg shadow-${option.color}/20` 
                  : 'border-border hover:border-muted-foreground/50'
              }`}
            >
              {isPopular && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full ${bgColorClass} text-primary-foreground text-sm font-semibold`}>
                  Рекомендуем
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl ${option.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${colorClass}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-1">{option.title}</h3>
                <p className="text-muted-foreground text-sm">{option.subtitle}</p>
                
                <div className="mt-6">
                  <span className={`text-5xl font-bold ${colorClass}`}>{option.price}</span>
                  <span className="text-xl text-muted-foreground ml-2">{option.currency}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className={colorClass}>✓</span>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-destructive/10 to-destructive/5 border border-destructive/30 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-1">Места ограничены!</h3>
            <p className="text-muted-foreground text-sm">
              Группы маленькие — максимум 6 детей. Не упустите возможность!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
