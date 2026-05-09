import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">КлиматПро</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Продажа, монтаж и обслуживание кондиционеров с 2014 года
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-semibold mb-4">Бренды</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Daikin</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mitsubishi Electric</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">LG</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Samsung</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Haier</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Продажа кондиционеров</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Монтаж и установка</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Техническое обслуживание</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Ремонт</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Демонтаж</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} />
                <a href="tel:+78001234567" className="hover:text-foreground transition-colors">8 800 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                <a href="mailto:info@klimatpro.ru" className="hover:text-foreground transition-colors">info@klimatpro.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={14} />
                <span>Ежедневно 9:00–21:00</span>
              </li>
              <li><a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 КлиматПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
