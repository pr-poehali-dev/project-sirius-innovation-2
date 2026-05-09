import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const packages = [
  {
    title: "Монтаж «Стандарт»",
    duration: "1 день",
    groupSize: "до 9 000 БТЕ",
    rating: "4.9",
    reviews: "312",
    image: "/placeholder.jpg",
    highlights: ["Установка блоков", "Подключение", "Трасса 3 м", "Пуск и настройка"],
    price: "4 900 ₽",
  },
  {
    title: "Монтаж «Под ключ»",
    duration: "1 день",
    groupSize: "до 24 000 БТЕ",
    rating: "5.0",
    reviews: "278",
    image: "/placeholder.jpg",
    highlights: ["Установка блоков", "Трасса 5 м", "Межблочная магистраль", "Пуск, настройка и инструктаж"],
    price: "7 900 ₽",
  },
  {
    title: "Техобслуживание",
    duration: "2–3 часа",
    groupSize: "1–5 блоков",
    rating: "4.8",
    reviews: "195",
    image: "/placeholder.jpg",
    highlights: ["Чистка фильтров", "Проверка давления", "Дезинфекция", "Диагностика системы"],
    price: "2 500 ₽",
  },
]

export function PopularPackages() {
  return (
    <section id="packages" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Наши <span className="font-semibold">услуги</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Прозрачные пакеты услуг с фиксированной ценой — выберите то, что подходит именно вам
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Image placeholder */}
              <div className="relative h-64 overflow-hidden bg-muted flex items-center justify-center">
                <Icon name="AirVent" size={80} className="text-primary/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="Star" size={14} className="fill-primary text-primary" />
                  <span className="text-xs font-semibold">{pkg.rating}</span>
                  <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{pkg.title}</h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Icon name="Clock" size={16} />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Thermometer" size={16} />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Стоимость от</div>
                    <div className="text-2xl font-semibold text-primary">{pkg.price}</div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Заказать
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
