//Users/alonondanse/froehlich-elektrik/components/modules/WhyUsSection.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Wrench, Banknote } from 'lucide-react'
import Image from 'next/image'

export default function WhyUsSection() {
  const advantages = [
    {
      icon: Clock,
      title: "24/7 Elektro-Notdienst",
      description: "Fröhlich Elektrik ist innerhalb von 30 Minuten bei Ihnen - auch nachts und an Feiertagen."
    },
    {
      icon: Shield,
      title: "Garantierte Qualität",
      description: "Modernste Elektrotechnik und qualifizierte Elektriker von Fröhlich Elektrik."
    },
    {
      icon: Wrench,
      title: "Komplettservice",
      description: "Von der Inspektion bis zur Installation - alles aus einer Hand bei Fröhlich Elektrik."
    },
    {
      icon: Banknote,
      title: "Faire Preise",
      description: "Transparente Festpreise ohne versteckte Kosten von Fröhlich Elektrik."
    }
  ]

  const stats = [
    { value: "15+", label: "Jahre Erfahrung" },
    { value: "30K+", label: "Zufriedene Kunden" },
    { value: "24/7", label: "Erreichbarkeit" },
    { value: "30 Min", label: "Reaktionszeit" }
  ]

  return (
    <section className="relative py-20 w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/elektrik-work.jpg"
          alt="Fröhlich Elektrik Service"
          fill
          className="object-cover"
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70" />
      </div>
      
      <div className="relative container mx-auto px-4 max-w-7xl text-white">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-primary/30 text-white">
            Ihre Vorteile bei Fröhlich Elektrik
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Warum Sie sich für Fröhlich Elektrik entscheiden sollten
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Professionelle Elektroinstallationen mit Qualitätsgarantie und Festpreisen
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {advantage.title}
                </h3>
                <p className="text-white/90">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}