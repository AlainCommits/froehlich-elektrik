//Users/alonondanse/froehlich-elektrik/components/Services.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Services({ city }: { city: string }) {
  const services = [
    {
      title: "Elektro-Notdienst",
      description: "24/7 Elektro-Notdienst von Fröhlich Elektrik",
      items: [
        "✓ Stromausfall sofort beheben",
        "✓ Kurzschluss-Reparatur",
        "✓ Sicherungen & Verteilerkästen"
      ]
    },
    {
      title: "Elektroinstallationen",
      description: "Professionelle Elektroinstallationen",
      items: [
        "✓ Neue Elektroleitungen",
        "✓ Steckdosen & Schalter",
        "✓ Komplette Hausinstallationen"
      ]
    },
    {
      title: "Smart Home",
      description: "Moderne Smart Home Lösungen",
      items: [
        "✓ Smart Home Installation",
        "✓ Beleuchtungssteuerung",
        "✓ Intelligente Haussteuerung"
      ]
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Fröhlich Elektrik Services in {city}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
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