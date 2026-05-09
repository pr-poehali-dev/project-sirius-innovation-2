import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const brands = [
  {
    name: "Daikin",
    category: "Премиум",
    image: "/placeholder.jpg",
    description: "Японское качество, тихая работа и высокая энергоэффективность. Лидер мирового рынка климатической техники",
    price: "от 35 000 ₽",
  },
  {
    name: "Mitsubishi Electric",
    category: "Премиум",
    image: "/placeholder.jpg",
    description: "Надёжная техника с интеллектуальным управлением и минимальным потреблением электроэнергии",
    price: "от 42 000 ₽",
  },
  {
    name: "LG",
    category: "Популярный",
    image: "/placeholder.jpg",
    description: "Современный дизайн, функция инвертора и удобное управление со смартфона через Wi-Fi",
    price: "от 28 000 ₽",
  },
  {
    name: "Samsung",
    category: "Популярный",
    image: "/placeholder.jpg",
    description: "Передовые технологии, стильный внешний вид и встроенный очиститель воздуха",
    price: "от 30 000 ₽",
  },
  {
    name: "Haier",
    category: "Доступный",
    image: "/placeholder.jpg",
    description: "Оптимальное соотношение цены и качества. Отличный выбор для квартиры или офиса",
    price: "от 18 000 ₽",
  },
  {
    name: "Ballu",
    category: "Доступный",
    image: "/placeholder.jpg",
    description: "Российский бренд с широкой сервисной сетью. Надёжно работает при морозах до −25°C",
    price: "от 15 000 ₽",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Популярные <span className="font-semibold">бренды</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Работаем только с проверенными производителями — поставляем оригинальную технику с гарантией
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-muted flex items-center justify-center">
                <Icon name="Wind" size={80} className="text-primary/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="Tag" size={14} className="text-primary" />
                  <span className="text-xs font-medium">{brand.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{brand.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{brand.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            Все модели
          </Button>
        </div>
      </div>
    </section>
  )
}
