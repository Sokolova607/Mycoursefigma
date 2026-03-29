import { Sparkles, MessageCircle, Gamepad2, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Акцент на практическую речь',
    description: 'Живая речь, а не грамматика ради грамматики. Все ситуации — из реальной жизни путешественника.'
  },
  {
    icon: Gamepad2,
    title: 'Интерактивные задания',
    description: 'Ролевые игры, аудиоситуации, мини-квесты. Учиться весело и интересно!'
  },
  {
    icon: TrendingUp,
    title: 'Результат A2–B1',
    description: 'Ребёнок выходит на уровень Pre-Intermediate за курс.'
  }
];

export function WhySpecial() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 mb-4 rounded-full bg-secondary/10 border border-secondary/30">
          <span className="text-sm text-secondary">✨ Почему этот курс особенный?</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Наши преимущества
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/30">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <Sparkles className="w-16 h-16 text-secondary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Маленькие группы</h3>
            <p className="text-muted-foreground">
              Максимум 6 детей в группе, чтобы каждый получил персональное внимание и мог активно практиковаться!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
