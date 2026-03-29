import { Plane } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1627670276798-0c4751b1beac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwbGFuZSUyMHN1bnNldHxlbnwxfHx8fDE3NzQ3MzIyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/80 via-[#0a0f1e]/70 to-[#0a0f1e]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/30 animate-pulse">
          <Plane className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary">Набор открыт!</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
          Английский для путешествий
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана?
        </p>
        
        <p className="text-base sm:text-lg text-foreground/90 mb-12 max-w-3xl mx-auto">
          Этот курс научит вашего ребёнка <span className="text-primary font-semibold">реальному разговорному английскому</span>, который пригодится в отпуске, поездках и будущих путешествиях!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#enroll" 
            className="px-8 py-4 bg-gradient-to-r from-primary to-teal-400 text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 font-semibold"
          >
            Записаться на курс
          </a>
          <a 
            href="#program" 
            className="px-8 py-4 bg-card border border-border text-foreground rounded-lg hover:border-primary/50 transition-all duration-300 font-semibold"
          >
            Программа курса
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
}