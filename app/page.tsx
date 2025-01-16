import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Droplet, Zap, Shield, Leaf, Check, XCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-primary">
      <main className="flex-grow">
        <section id="hero" className="bg-gradient-to-r from-secondary to-accent text-primary py-16 sm:py-20 mt-16">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Revolutionary Water Purification</h2>
            <p className="text-lg sm:text-xl mb-8">Experience premium hydration with our innovative multi-material filter technology</p>
          </div>
        </section>

        <section id="about" className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">About Us</h2>
            <p className="text-base sm:text-lg text-center max-w-2xl mx-auto">
              Sippur is revolutionizing hydration with our premium lifestyle water bottle.
              Our built-in, multi-material filter utilizes the latest innovative materials for optimal water quality,
              ensuring you have access to clean, safe water wherever you go.
            </p>
          </div>
        </section>

        <section id="features" className="py-12 sm:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Features & Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {[
                    "Multi-material filtration technology",
                    "Portable and reusable design",
                    "Long-lasting filter performance",
                    "Sleek and modern aesthetic",
                    "BPA-free and eco-friendly materials"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Problems We're Solving</h3>
                <ul className="space-y-2">
                  {[
                    "Access to clean water on-the-go",
                    "Reducing plastic bottle waste",
                    "Removing contaminants from tap water",
                    "Improving hydration habits",
                    "Ensuring water safety during travel"
                  ].map((problem, index) => (
                    <li key={index} className="flex items-center">
                      <XCircle className="h-5 w-5 text-red-500 mr-2" />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="bg-secondary py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Our Technology</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Activated Carbon", description: "High surface area for excellent adsorption of organic compounds and chlorine", icon: <Droplet className="h-10 w-10 text-primary" /> },
                { title: "Graphene Oxide", description: "Advanced material with antimicrobial properties and heavy metal removal capabilities", icon: <Zap className="h-10 w-10 text-primary" /> },
                { title: "Zeolites", description: "Crystalline minerals with exceptional ion-exchange and molecular sieving properties", icon: <Shield className="h-10 w-10 text-primary" /> },
                { title: "Cellulose Nanofibers", description: "Ultrafine structure for effective filtration of bacteria and microplastics", icon: <Leaf className="h-10 w-10 text-primary" /> }
              ].map((tech, index) => (
                <Card key={index} className="flex flex-col items-center text-center bg-white text-primary border-accent">
                  <CardHeader>
                    {tech.icon}
                    <CardTitle>{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-primary">{tech.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="product" className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Our Product</h2>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=300"
                alt="PureFlow Water Bottle"
                width={200}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg max-w-2xl mx-auto">
              Our premium water bottle features a state-of-the-art multi-material filter,
              combining Activated Carbon, Graphene Oxide, Zeolites, and Cellulose Nanofibers
              to provide you with the purest water possible.
            </p>
          </div>
        </section>

        <section id="contact" className="bg-muted text-primary py-12 sm:py-16">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Contact Us</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">Interested in learning more about our technology or product? Get in touch with us!</p>
            <Button variant="outline" size="lg" className="bg-primary text-primary-foreground hover:bg-accent hover:text-primary transition-colors">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}



  {/* <footer className="bg-primary text-primary-foreground py-8">
    <div className="container mx-auto text-center px-4">
      <p>&copy; 2025 Sippur. All rights reserved.</p>
    </div>
  </footer> */}