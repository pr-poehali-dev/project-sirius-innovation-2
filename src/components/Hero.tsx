import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/d9e5a686-9e19-4495-9784-4af44cfb4fc7/files/9f833947-2e9e-4232-a89b-bef8f087b60e.jpg"
          alt="Кондиционер в интерьере"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance">
            Комфортный климат
            <span className="block font-semibold mt-2">у вас дома</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Продажа, профессиональный монтаж и техническое обслуживание кондиционеров. Работаем быстро, с гарантией и по честным ценам
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base group"
            >
              Подобрать кондиционер
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 bg-transparent">
              Все услуги
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-border/50">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">10+</div>
            <div className="text-sm text-muted-foreground">Лет на рынке</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">3 000+</div>
            <div className="text-sm text-muted-foreground">Довольных клиентов</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">5 лет</div>
            <div className="text-sm text-muted-foreground">Гарантия на монтаж</div>
          </div>
        </div>
      </div>
    </section>
  )
}