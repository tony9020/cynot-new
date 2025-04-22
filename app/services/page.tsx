import Link from "next/link"
import { ArrowRight, Building2, CheckCircle, Globe, Home, Lightbulb, LifeBuoy, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import contactUsBg from "@/lib/assets/services.jpg"; // Adjust this import path as needed
import Image from "next/image"


export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-yellow-800 text-white">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <Image
      src={contactUsBg} // Using the imported image
      alt="Contact Us Background"
      fill
      className="object-cover"
      quality={100}
      priority
    />
  </div>
  
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Contact Us Title */}
    <h1 className="text-4xl font-semibold text-center text-white mb-8">
      Our Services
    </h1>
    
    {/* You can add more content here for the rest of your hero section */}
  </div>
</section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Can Help You</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our integrated approach allows us to provide comprehensive solutions across multiple industries and
              sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
                title: "Innovative Solutions",
                description: "We develop cutting-edge solutions tailored to your specific needs and challenges.",
              },
              {
                icon: <Users className="h-8 w-8 text-yellow-600" />,
                title: "Expert Consultation",
                description: "Our team of experts provides strategic guidance to help you achieve your goals.",
              },
              {
                icon: <Settings className="h-8 w-8 text-yellow-600" />,
                title: "Seamless Implementation",
                description: "We ensure smooth deployment and integration of our solutions into your existing systems.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-yellow-600" />,
                title: "Quality Assurance",
                description: "We maintain the highest standards of quality in all our products and services.",
              },
              {
                icon: <LifeBuoy className="h-8 w-8 text-yellow-600" />,
                title: "Ongoing Support",
                description:
                  "Our dedicated support team is always available to assist you with any issues or questions.",
              },
              {
                icon: <Globe className="h-8 w-8 text-yellow-600" />,
                title: "Global Reach",
                description: "With offices in multiple countries, we can serve clients around the world.",
              },
            ].map((service, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Divisions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each of our specialized divisions is dedicated to excellence in its respective field.
            </p>
          </div>

          <Tabs defaultValue="technologies" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="technologies" className="text-lg py-3">
                Technologies
              </TabsTrigger>
              <TabsTrigger value="homes" className="text-lg py-3">
                Homes
              </TabsTrigger>
              <TabsTrigger value="tours" className="text-lg py-3">
                Tours
              </TabsTrigger>
            </TabsList>

            <TabsContent value="technologies" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-yellow-100 text-yellow-800 rounded-full px-4 py-1 text-sm font-medium mb-4">
                    <Building2 className="h-4 w-4 mr-2" />
                    Technologies Division
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Innovative Digital Solutions</h3>
                  <p className="text-gray-700 mb-6">
                    Our Technologies division specializes in developing cutting-edge software and hardware solutions
                    that help businesses streamline operations, enhance productivity, and drive growth.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      "Custom Software Development",
                      "Mobile Application Development",
                      "Cloud Computing Solutions",
                      "AI and Machine Learning Integration",
                      "IoT and Smart Systems",
                      "Cybersecurity Services",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                    <Link href="/services/technologies">
                      <span className="flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=600&width=800&text=Technologies"
                    alt="Technologies services"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                    <p className="text-gray-700 mb-2">
                      <span className="font-bold text-yellow-600">200+</span> Successful Projects
                    </p>
                    <p className="text-gray-700">
                      <span className="font-bold text-yellow-600">98%</span> Client Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="homes" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-yellow-100 text-yellow-800 rounded-full px-4 py-1 text-sm font-medium mb-4">
                    <Home className="h-4 w-4 mr-2" />
                    Homes Division
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Sustainable Living Spaces</h3>
                  <p className="text-gray-700 mb-6">
                    Our Homes division is dedicated to creating sustainable, comfortable, and beautiful living and
                    working spaces that prioritize environmental responsibility without compromising on quality or
                    aesthetics.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      "Eco-Friendly Residential Properties",
                      "Sustainable Commercial Buildings",
                      "Green Building Certification",
                      "Energy-Efficient Renovations",
                      "Smart Home Integration",
                      "Sustainable Urban Planning",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                    <Link href="/services/homes">
                      <span className="flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=600&width=800&text=Homes"
                    alt="Homes services"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                    <p className="text-gray-700 mb-2">
                      <span className="font-bold text-yellow-600">50+</span> Sustainable Buildings
                    </p>
                    <p className="text-gray-700">
                      <span className="font-bold text-yellow-600">30%</span> Energy Savings
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tours" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-yellow-100 text-yellow-800 rounded-full px-4 py-1 text-sm font-medium mb-4">
                    <Globe className="h-4 w-4 mr-2" />
                    Tours Division
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Unforgettable Travel Experiences</h3>
                  <p className="text-gray-700 mb-6">
                    Our Tours division specializes in creating unique, immersive travel experiences that connect people
                    with cultures, nature, and communities around the world, all while promoting responsible tourism.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      "Eco-Tourism Adventures",
                      "Cultural Immersion Experiences",
                      "Luxury Travel Packages",
                      "Corporate Retreat Planning",
                      "Sustainable Tourism Consulting",
                      "Custom Itinerary Development",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                    <Link href="/services/tours">
                      <span className="flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=600&width=800&text=Tours"
                    alt="Tours services"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                    <p className="text-gray-700 mb-2">
                      <span className="font-bold text-yellow-600">100+</span> Destinations
                    </p>
                    <p className="text-gray-700">
                      <span className="font-bold text-yellow-600">10,000+</span> Happy Travelers
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure the successful delivery of all our services.
            </p>
          </div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200 hidden md:block"></div>

            {/* Process steps */}
            {[
              {
                number: "01",
                title: "Discovery & Consultation",
                description:
                  "We begin by understanding your needs, goals, and challenges through in-depth consultations.",
              },
              {
                number: "02",
                title: "Strategy & Planning",
                description:
                  "Our team develops a comprehensive strategy and detailed plan tailored to your specific requirements.",
              },
              {
                number: "03",
                title: "Design & Development",
                description:
                  "We create innovative designs and develop solutions that align with your vision and objectives.",
              },
              {
                number: "04",
                title: "Implementation & Testing",
                description:
                  "Our experts implement the solution and conduct thorough testing to ensure quality and performance.",
              },
              {
                number: "05",
                title: "Launch & Support",
                description:
                  "We ensure a smooth launch and provide ongoing support to address any issues and optimize results.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? "md:ml-auto md:mr-[50%] md:pr-12" : "md:mr-auto md:ml-[50%] md:pl-12"}`}
              >
                <div
                  className="hidden md:block absolute top-0 w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold border-4 border-white shadow-md"
                  style={{ [index % 2 === 0 ? "right" : "left"]: "-20px" }}
                >
                  {step.number}
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="md:hidden inline-block px-3 py-1 bg-yellow-500 text-white rounded-full font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our clients about their experiences working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The team's expertise and dedication to our project exceeded our expectations. They delivered an innovative solution that has transformed our business operations.",
                author: "Robert Chen",
                position: "CTO, Global Innovations",
                image: "/placeholder.svg?height=100&width=100&text=R.C.",
              },
              {
                quote:
                  "Working with the Homes division was a pleasure from start to finish. Our new office building is not only beautiful but also incredibly energy-efficient.",
                author: "Emily Johnson",
                position: "Facilities Director, EcoTech",
                image: "/placeholder.svg?height=100&width=100&text=E.J.",
              },
              {
                quote:
                  "The Tours team created an unforgettable experience for our corporate retreat. The attention to detail and personalized service made all the difference.",
                author: "Michael Rodriguez",
                position: "HR Manager, Future Finance",
                image: "/placeholder.svg?height=100&width=100&text=M.R.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What industries do you serve?",
                answer:
                  "We serve a wide range of industries including technology, real estate, hospitality, healthcare, finance, education, and manufacturing. Our diverse expertise allows us to provide tailored solutions across various sectors.",
              },
              {
                question: "How do you ensure the quality of your services?",
                answer:
                  "We maintain rigorous quality control processes throughout all stages of our projects. This includes regular reviews, comprehensive testing, adherence to industry standards, and continuous client feedback to ensure we meet and exceed expectations.",
              },
              {
                question: "Do you work with international clients?",
                answer:
                  "Yes, we have extensive experience working with international clients. With offices in multiple countries and a global team, we can provide services worldwide while understanding local regulations and cultural nuances.",
              },
              {
                question: "What is your approach to sustainability?",
                answer:
                  "Sustainability is at the core of everything we do. We integrate environmentally responsible practices across all our divisions, from energy-efficient technologies to eco-friendly building materials and responsible tourism initiatives.",
              },
              {
                question: "How do you handle project timelines and budgets?",
                answer:
                  "We employ robust project management methodologies to ensure projects are delivered on time and within budget. This includes detailed planning, regular progress tracking, transparent communication, and proactive risk management.",
              },
              {
                question: "Can you customize your services to meet specific needs?",
                answer:
                  "Absolutely. We pride ourselves on our ability to create customized solutions tailored to each client's unique requirements. Our team works closely with you to understand your specific needs and develop personalized approaches.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see your question here? Contact us for more information.</p>
            <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you achieve your goals with our comprehensive range of services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-yellow-800 hover:bg-gray-100">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-yellow-600 hover:bg-white/10">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
