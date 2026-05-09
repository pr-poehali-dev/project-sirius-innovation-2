import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "ShieldCheck",
    title: "Гарантия 5 лет",
    description: "Даём гарантию на все виды монтажных работ. Если что-то пойдёт не так — устраним за наш счёт",
  },
  {
    icon: "Zap",
    title: "Монтаж за 1 день",
    description: "Выезд мастера в день обращения. Устанавливаем кондиционер быстро и аккуратно, без лишнего шума",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description: "Круглосуточная линия для наших клиентов. Ответим на любой вопрос и пришлём мастера в любое время",
  },
  {
    icon: "BadgePercent",
    title: "Честные цены",
    description: "Фиксированная стоимость без скрытых доплат. Смета перед началом работ — платите только то, что обсудили",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему выбирают <span className="font-semibold">КлиматПро</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Мы не просто продаём кондиционеры — мы обеспечиваем комфорт в вашем доме на долгие годы
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <Icon name={feature.icon} size={32} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
