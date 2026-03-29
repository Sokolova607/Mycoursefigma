import { Monitor, Wifi, Headphones, Calendar, Clock } from 'lucide-react';

const requirements = [
  {
    icon: Monitor,
    text: 'Стационарный компьютер или ноутбук'
  },
  {
    icon: Headphones,
    text: 'Наушники и микрофон'
  },
  {
    icon: Wifi,
    text: 'Стабильный интернет и Zoom'
  }
];

const schedule = [
  {
    day: 'Четверг',
    time: '15:00 (МСК)',
    group: 'группа 4–5 класс',
    color: 'primary'
  },
  {
    day: 'Пятница',
    time: '15:30 (МСК)',
    group: 'группа 6–8 класс',
    color: 'secondary'
  }
];

export function Requirements() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Requirements */}
        <div>
          <div className="mb-6">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 border border-primary/30">
              <span className="text-sm text-primary">💻 Что потребуется</span>
            </div>
            <h2 className="text-3xl font-bold">Технические требования</h2>
          </div>

          <div className="space-y-4">
            {requirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground">{req.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Schedule */}
        <div>
          <div className="mb-6">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-secondary/10 border border-secondary/30">
              <span className="text-sm text-secondary">🕒 Расписание</span>
            </div>
            <h2 className="text-3xl font-bold">Когда проходят занятия</h2>
          </div>

          <div className="space-y-4">
            {schedule.map((item, index) => {
              const colorClass = item.color === 'primary' ? 'text-primary' : 'text-secondary';
              const bgColorClass = item.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10';
              const borderColorClass = item.color === 'primary' ? 'border-primary/50' : 'border-secondary/50';

              return (
                <div 
                  key={index}
                  className={`p-6 rounded-xl bg-card border border-border hover:${borderColorClass} transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${bgColorClass} flex items-center justify-center`}>
                      <Calendar className={`w-5 h-5 ${colorClass}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${colorClass}`}>{item.day}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className={`w-4 h-4 ${colorClass}`} />
                    <p className="text-lg font-semibold">{item.time}</p>
                  </div>
                  
                  <p className="text-muted-foreground">{item.group}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
