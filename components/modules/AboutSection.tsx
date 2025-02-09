//Users/alonondanse/froehlich-elektrik/components/modules/AboutSection.tsx
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function AboutSection() {
  const benefits = [
    {
      title: "Blitzschneller 24/7 Elektro-Notdienst",
      description: "Das Fröhlich Elektrik Team ist innerhalb von 30 Minuten bei Ihnen vor Ort - auch nachts und am Wochenende."
    },
    {
      title: "Modernste Elektrotechnik",
      description: "Fröhlich Elektrik arbeitet mit hochmoderner Ausrüstung für sichere und professionelle Elektroinstallationen."
    },
    {
      title: "Festpreisgarantie",
      description: "Transparente Preise ohne versteckte Kosten. Ihr Fröhlich Elektrik Team garantiert faire Preise."
    }
  ]

  // const stats = [
  //   { value: "15+", label: "Jahre Erfahrung" },
  //   { value: "30k+", label: "Zufriedene Kunden" },
  //   { value: "24/7", label: "Notdienst" }
  // ]

  return (
    <section className="py-12 md:py-16 bg-background mx-auto" id="about">
      <div className="container mx-auto px-4 max-w-7xl">    
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                Ihr Experte für Elektroinstallationen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Fröhlich Elektrik - Ihr professioneller Elektro-Partner
              </h2>
              <p className="text-muted-foreground text-lg">
                24/7 Elektro-Notdienst für alle elektrischen Probleme. 
                Schnell, zuverlässig und fair - Fröhlich Elektrik ist Ihr kompetenter Partner.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start gap-4 p-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/elektrik-service.jpg"
                alt="Fröhlich Elektrik Service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}