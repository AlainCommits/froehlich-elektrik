//Users/alonondanse/froehlich-elektrik/components/modules/ServiceSection.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Power, Shield, Home, Settings, Plug } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "Elektro-Notdienst",
      description: "24/7 Elektro-Notdienst von Fröhlich Elektrik",
      features: [
        "Sofortige Hilfe bei Stromausfall",
        "Kurzschluss-Reparatur",
        "Sicherungskasten-Service",
      ]
    },
    {
      icon: Power,
      title: "Elektroinstallationen",
      description: "Professionelle Elektroinstallationen durch Fröhlich Elektrik",
      features: [
        "Neue Stromkreise verlegen",
        "Steckdosen & Schalter",
        "Komplette Hauselektrik",
      ]
    },
    {
      icon: Shield,
      title: "Sicherheitstechnik",
      description: "Elektrische Sicherheitssysteme von Fröhlich Elektrik",
      features: [
        "FI-Schutzschalter",
        "Überspannungsschutz",
        "Brandschutz-Elektrik",
      ]
    },
    {
      icon: Home,
      title: "Smart Home",
      description: "Intelligente Haussteuerung durch Fröhlich Elektrik",
      features: [
        "Smart Home Installation",
        "Beleuchtungssteuerung",
        "Automatisierung",
      ]
    },
    {
      icon: Settings,  // Ersetzt Tool mit Settings
      title: "Wartung & Prüfung",
      description: "Elektrische Wartungsarbeiten von Fröhlich Elektrik",
      features: [
        "E-Check durchführen",
        "Anlagenprüfung",
        "Wartungsverträge",
      ]
    },
    {
      icon: Plug,  // Zusätzliches passendes Icon für Reparaturen
      title: "Reparaturservice",
      description: "Schnelle Elektro-Reparaturen durch Fröhlich Elektrik",
      features: [
        "Störungsbehebung",
        "Gerätereparatur",
        "Elektrosanierung",
      ]
    }
  ]

  return (
    <section className="py-16 bg-muted-foreground w-full" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="mb-4">
            Unsere Leistungen
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Fröhlich Elektrik Services
          </h2>
          <p className="text-background text-lg max-w-2xl mx-auto">
            Von der Notfallhilfe bis zur Smart-Home-Installation - 
            Fröhlich Elektrik bietet Ihnen umfassende Lösungen für alle elektrischen Anforderungen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {<service.icon className="w-6 h-6 text-primary" />}
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-background">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-background">
                      <span className="mr-2 text-primary">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}