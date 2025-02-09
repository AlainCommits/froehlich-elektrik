//Users/alonondanse/froehlich-elektrik/components/modules/Footer.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { label: "Elektro-Notdienst", href: "/services/notdienst" },
    { label: "Elektroinstallationen", href: "/services/installationen" },
    { label: "Elektrische Reparaturen", href: "/services/reparaturen" },
    { label: "Smart Home", href: "/services/smart-home" },
    { label: "Preise", href: "/preise" },
    { label: "Über uns", href: "/about" }
  ]

  const contactInfo = [
    { icon: MapPin, text: "Musterstraße 123, 12345 Stadt" },
    { icon: Phone, text: "0157-926-430-00" },
    { icon: Mail, text: "info@froehlich-elektrik.de" },
    { icon: Clock, text: "24/7 Elektro-Notdienst" }
  ]

  const legalLinks = [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" }
  ]

  return (
    <footer className="bg-primary-foreground w-full">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Fröhlich Elektrik</h3>
            <p className="text-background">
              Ihr zuverlässiger Partner für Elektroinstallationen. 
              24/7 Elektro-Notdienst in Ihrer Region.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Service</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-background hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Kontakt</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <info.icon className="h-5 w-5 text-primary" />
                  <span className="text-background">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Elektro-Notdienst</h3>
            <p className="text-background">
              Elektrische Probleme? Das Fröhlich Elektrik Team ist rund um die Uhr für Sie da!
            </p>
            <Button size="lg" className="w-full" asChild>
              <Link href="tel:0157-926-430-00">
                <Phone className="mr-2 h-5 w-5" />
                0157-926-430-00
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background">
              © {new Date().getFullYear()} Fröhlich Elektrik. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-background hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}