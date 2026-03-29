import { 
  Plane, 
  Hotel, 
  UtensilsCrossed, 
  MapPin, 
  AlertCircle, 
  Landmark,
  Heart,
  Award
} from 'lucide-react';

const programItems = [
  {
    icon: Plane,
    title: 'Аэропорт без стресса',
    description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
    benefit: 'Уверенность уже в первые часы за границей.',
    color: 'primary'
  },
  {
    icon: Hotel,
    title: 'В отеле: заселение и помощь',
    description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
    benefit: 'Практика вежливых фраз и повседневной лексики.',
    color: 'secondary'
  },
  {
    icon: UtensilsCrossed,
    title: 'Кафе и рестораны',
    description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
    benefit: 'Развитие гастрономического словаря и уверенности в общении.',
    color: 'primary'
  },
  {
    icon: MapPin,
    title: 'На улице: ориентирование и просьбы',
    description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
    benefit: 'Понимание устной речи и произношения в реальных ситуациях.',
    color: 'secondary'
  },
  {
    icon: AlertCircle,
    title: 'Экстренные случаи',
    description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
    benefit: 'Важные фразы, которые могут спасти отпуск.',
    color: 'primary'
  },
  {
    icon: Landmark,
    title: 'Туризм и развлечения',
    description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
    benefit: 'Погружение в культурный контекст через язык.',
    color: 'secondary'
  },
  {
    icon: Heart,
    title: 'Дружба в путешествиях',
    description: 'Как познакомиться с другими детьми или подростками за границей.',
    benefit: 'Игровая практика диалогов и неформального общения.',
    color: 'primary'
  },
  {
    icon: Award,
    title: 'Дипломный проект: «Мой идеальный отпуск»',
    description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
    benefit: 'Развитие связной речи и творческого самовыражения.',
    color: 'secondary'
  }
];

export function CourseProgram() {
  return (
    <section id="program" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 border border-primary/30">
          <span className="text-sm text-primary">📚 Программа курса</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Что будет на курсе?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          8 увлекательных модулей для реальной жизни
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {programItems.map((item, index) => {
          const Icon = item.icon;
          const colorClass = item.color === 'primary' ? 'text-primary' : 'text-secondary';
          const bgColorClass = item.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10';
          const borderColorClass = item.color === 'primary' ? 'border-primary/50' : 'border-secondary/50';
          const gradientClass = item.color === 'primary' ? 'from-primary/5' : 'from-secondary/5';

          return (
            <div 
              key={index}
              className={`group relative p-6 rounded-2xl bg-card border border-border hover:${borderColorClass} transition-all duration-300`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${bgColorClass} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${colorClass}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className={`flex items-start gap-2 p-3 rounded-lg ${bgColorClass}`}>
                  <span className="text-lg">👉</span>
                  <p className={`text-sm ${colorClass} font-medium`}>
                    {item.benefit}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
