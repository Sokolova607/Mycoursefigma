import { ArrowRight, Send } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function EnrollCTA() {
  return (
    <section id="enroll" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-teal-500 to-secondary p-1">
            <div className="relative bg-card/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/30">
                  <Send className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-semibold">📢 Набор открыт!</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Запишитесь на курс прямо сейчас
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group px-10 py-5 bg-gradient-to-r from-primary to-teal-400 text-primary-foreground rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-semibold">
                    <span className="text-lg">Записаться на курс</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="px-10 py-5 bg-card border-2 border-secondary text-foreground rounded-xl hover:bg-secondary/10 transition-all duration-300 flex items-center justify-center gap-2 font-semibold">
                    <span className="text-lg">Задать вопрос</span>
                  </button>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-1">10</div>
                    <div className="text-sm text-muted-foreground">уроков</div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/20">
                    <div className="text-3xl font-bold text-secondary mb-1">6</div>
                    <div className="text-sm text-muted-foreground">детей в группе</div>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-1">A2-B1</div>
                    <div className="text-sm text-muted-foreground">уровень английского</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}