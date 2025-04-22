import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import AboutUs1 from "@/lib/assets/portfolio.jpg";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-yellow-800 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl mb-8">
              Explore our showcase of successful projects across various industries and divisions.
            </p>
            <Button asChild size="lg" className="bg-white text-yellow-800 hover:bg-gray-100">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <Image
                  src={AboutUs1} // Using the imported image
                  alt="About Us Image"
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                />

        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We take pride in delivering exceptional results across all our divisions. Browse through our portfolio to
              see the impact of our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { number: "200+", label: "Completed Projects" },
              { number: "50+", label: "Happy Clients" },
              { number: "12", label: "Countries Served" },
            ].map((stat, index) => (
              <div key={index} className="bg-yellow-50 p-8 rounded-lg text-center">
                <p className="text-4xl font-bold text-yellow-600 mb-2">{stat.number}</p>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="inline-flex h-auto bg-gray-100 p-1 rounded-lg">
                <TabsTrigger value="all" className="rounded-md px-4 py-2 text-sm">
                  All Projects
                </TabsTrigger>
                <TabsTrigger value="technologies" className="rounded-md px-4 py-2 text-sm">
                  Technologies
                </TabsTrigger>
                <TabsTrigger value="homes" className="rounded-md px-4 py-2 text-sm">
                  Homes
                </TabsTrigger>
                <TabsTrigger value="tours" className="rounded-md px-4 py-2 text-sm">
                  Tours
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{generateProjects(9)}</div>
            </TabsContent>

            <TabsContent value="technologies" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{generateProjects(3, "Tech")}</div>
            </TabsContent>

            <TabsContent value="homes" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{generateProjects(3, "Home")}</div>
            </TabsContent>

            <TabsContent value="tours" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{generateProjects(3, "Tour")}</div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Case Study</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Take a deeper look at one of our most impactful projects and the results we achieved.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center bg-yellow-100 text-yellow-800 rounded-full px-4 py-1 text-sm font-medium mb-4">
                  Featured Project
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Sustainable Smart City Development</h3>
                <p className="text-gray-700 mb-6">
                  A comprehensive project that integrated our Technologies, Homes, and Tours divisions to create a
                  sustainable smart city development that has become a model for urban planning worldwide.
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold mb-2">The Challenge</h4>
                    <p className="text-gray-700">
                      Transforming a 200-acre brownfield site into a sustainable, technology-driven community that
                      balances residential, commercial, and recreational spaces while minimizing environmental impact.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Our Approach</h4>
                    <p className="text-gray-700">
                      We implemented an integrated approach that combined smart infrastructure, sustainable building
                      practices, and community engagement to create a holistic solution.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">The Results</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>40% reduction in energy consumption compared to traditional developments</li>
                      <li>30% decrease in water usage through innovative conservation systems</li>
                      <li>Creation of 5,000+ jobs and housing for 10,000+ residents</li>
                      <li>Award-winning design recognized for innovation and sustainability</li>
                    </ul>
                  </div>
                </div>

                <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                  <Link href="/portfolio/case-studies/smart-city">
                    <span className="flex items-center">
                      Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <img
                  src="/placeholder.svg?height=800&width=800&text=Smart City Project"
                  alt="Smart City Project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 lg:hidden">
                  <Button asChild className="bg-white text-yellow-800 hover:bg-gray-100">
                    <Link href="/portfolio/case-studies/smart-city">
                      <span className="flex items-center">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about their experiences working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The team's innovative approach to our technology challenges resulted in a solution that not only met our immediate needs but positioned us for future growth. Their expertise and dedication were evident throughout the project.",
                author: "Jennifer Lee",
                position: "CIO, Global Innovations",
                image: "/placeholder.svg?height=100&width=100&text=J.L.",
              },
              {
                quote:
                  "Working with the Homes division transformed our corporate headquarters into a sustainable, energy-efficient space that has significantly reduced our operational costs while providing a healthier environment for our employees.",
                author: "David Chen",
                position: "Facilities Director, EcoTech Solutions",
                image: "/placeholder.svg?height=100&width=100&text=D.C.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Sustainability Excellence Award", year: "2023" },
              { name: "Innovation in Technology", year: "2022" },
              { name: "Best Workplace Design", year: "2022" },
              { name: "Green Building Certification", year: "2021" },
              { name: "Digital Transformation Leader", year: "2021" },
              { name: "Community Impact Award", year: "2020" },
              { name: "Best Eco-Tourism Provider", year: "2020" },
              { name: "Corporate Social Responsibility", year: "2019" },
            ].map((award, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 text-2xl font-bold">★</span>
                </div>
                <h3 className="font-semibold mb-1">{award.name}</h3>
                <p className="text-sm text-gray-600">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-yellow-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with our expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-yellow-800 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-yellow-900 hover:bg-white/10">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper function to generate project cards
function generateProjects(count: number, prefix = "") {
  const projects = []
  const categories = ["Technologies", "Homes", "Tours"]

  for (let i = 1; i <= count; i++) {
    const category = prefix ? prefix : categories[Math.floor(Math.random() * categories.length)]
    const projectNumber = prefix ? i : i

    projects.push(
      <div
        key={i}
        className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      >
        <img
          src={`/placeholder.svg?height=600&width=800&text=${category} Project ${projectNumber}`}
          alt={`${category} Project ${projectNumber}`}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <div className="inline-flex items-center bg-yellow-600/80 rounded-full px-3 py-1 text-xs font-medium mb-2">
            {category}
          </div>
          <h3 className="text-xl font-bold mb-2">
            {category} Project {projectNumber}
          </h3>
          <p className="mb-4 opacity-90">
            Brief description of this amazing project and its impact on the client's business.
          </p>
          <div className="flex space-x-3">
            <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20">
              View Details
            </Button>
            <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>,
    )
  }

  return projects
}
