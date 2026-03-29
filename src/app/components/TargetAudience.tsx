import { Users, GraduationCap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function TargetAudience() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-secondary/10 border border-secondary/30">
            <span className="text-sm text-secondary">📌 Для кого курс</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Для кого этот курс?
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        <ScrollReveal delay={200}>
          <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Первая группа</h3>
              <p className="text-3xl font-bold text-primary mb-2">4–5 класс</p>
              <p className="text-muted-foreground">
                Для младших школьников, которые только начинают путешествовать
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-14 h-14 mb-6 rounded-xl bg-secondary/10 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Вторая группа</h3>
              <p className="text-3xl font-bold text-secondary mb-2">6–8 класс</p>
              <p className="text-muted-foreground">
                Для подростков, готовых к более самостоятельному общению
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}