"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Building2, Globe, Home, Users, ChevronRight, BarChart2, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import ParallaxHero from "@/components/parallax-hero"
import { useMediaQuery } from "@/hooks/use-media-query"
import SectionHeading from "@/components/section-heading"
import AnimatedCounter from "@/components/animated-counter"

export default function HomePage() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  // Refs for scroll animations
  const introRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  // InView animations
  const introInView = useInView(introRef, { once: true, amount: 0.3 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.2 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 })

  const services = [
    {
      icon: <Building2 className="h-8 w-8 text-yellow-600" />,
      title: "Enterprise Solutions",
      description:
        "Comprehensive digital transformation services that help businesses streamline operations, enhance productivity, and drive innovation across the organization.",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    {
      icon: <Home className="h-8 w-8 text-yellow-600" />,
      title: "Sustainable Development",
      description:
        "Eco-friendly residential and commercial properties built with cutting-edge sustainable materials and smart technologies for reduced environmental impact.",
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      icon: <Globe className="h-8 w-8 text-yellow-600" />,
      title: "Global Connectivity",
      description:
        "Innovative solutions that connect businesses with international markets, facilitating seamless collaboration and expansion opportunities worldwide.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    },
  ]

  const projects = [
    {
      title: "NextGen Smart Office",
      description:
        "A revolutionary smart office complex that reduced energy consumption by 45% while enhancing employee productivity.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "Sustainable Development",
    },
    {
      title: "Global Supply Chain Platform",
      description:
        "An AI-powered platform that optimized international logistics operations for a Fortune 500 company, saving $4.2M annually.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Enterprise Solutions",
    },
    {
      title: "Eco-Tourism Initiative",
      description:
        "A sustainable tourism program that preserved natural habitats while creating economic opportunities for local communities.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Global Connectivity",
    },
  ]

  const testimonials = [
    {
      quote:
        "The team's expertise transformed our operations completely. Their innovative solutions increased our efficiency by 40% and opened new market opportunities we hadn't even considered.",
      author: "Sarah Johnson",
      position: "CEO, TechInnovate",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    },
    {
      quote:
        "The attention to detail and commitment to sustainability in our new headquarters has exceeded all expectations. Our employees love the space, and we've seen measurable improvements in productivity.",
      author: "Michael Chen",
      position: "Director, GreenFuture Corp",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ]

  const stats = [
    { value: 250, suffix: "+", label: "Projects Completed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 15, suffix: "+", label: "Years of Excellence" },
    { value: 42, suffix: "M", prefix: "$", label: "Client Savings" },
  ]

  const sustainabilityInitiatives = [
    "Carbon-neutral operations across all our global offices since 2020",
    "Reduced client carbon footprints by an average of 30% through our solutions",
    "Invested $5M in community development and environmental conservation programs",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxHero />

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-yellow-900 to-teal-800 text-white" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col items-center"
              >
                <p className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="text-yellow-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white" ref={introRef} id="intro">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Transforming Industries Through Innovation"
            subtitle="We are a forward-thinking organization dedicated to excellence across multiple sectors. Our integrated approach delivers exceptional value and sustainable solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              >
                <Card className="transition-all duration-500 hover:shadow-xl group border-none bg-gradient-to-br from-white to-gray-50 overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="text-center">
                    <motion.div
                      className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="font-display">{service.title}</CardTitle>
                    <CardDescription>Innovative solutions for modern challenges</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button
                      variant="ghost"
                      className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 gap-2 group"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-yellow-100 text-yellow-800 rounded-full px-4 py-1 text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Pioneering Excellence Since 2021</h2>
              <p className="text-gray-700 mb-4">
                Founded with a vision to revolutionize how businesses approach sustainability and innovation, we've
                grown from a small team of passionate experts to a global organization with a presence in 6 countries.
              </p>
              <p className="text-gray-700 mb-6">
                Our journey has been defined by a relentless pursuit of excellence, a commitment to ethical practices,
                and a drive to create solutions that make a meaningful difference in the world.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: <Shield className="h-5 w-5 text-yellow-600" />,
                    title: "Trusted Partnerships",
                    description: "Long-term relationships with 200+ global clients",
                  },
                  {
                    icon: <BarChart2 className="h-5 w-5 text-yellow-600" />,
                    title: "Proven Results",
                    description: "Consistent growth and measurable outcomes",
                  },
                  {
                    icon: <Zap className="h-5 w-5 text-yellow-600" />,
                    title: "Innovative Approach",
                    description: "Cutting-edge solutions for complex challenges",
                  },
                  {
                    icon: <Users className="h-5 w-5 text-yellow-600" />,
                    title: "Expert Team",
                    description: "Industry leaders and specialized professionals",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="mr-3 mt-1 bg-yellow-100 p-2 rounded-full">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button asChild className="bg-yellow-600 hover:bg-yellow-700 group">
                <Link href="/about">
                  Learn More About Us
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg mt-8"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Business meeting"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                    alt="Office space"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg mt-8"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Team discussion"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold">2+ Years</p>
                <p>of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects with Parallax */}
      <section className="py-20 bg-white overflow-hidden" ref={projectsRef}>
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore our most impactful work that has transformed businesses and communities across the globe."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="inline-flex items-center bg-yellow-600/80 rounded-full px-3 py-1 text-xs font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">
                    {project.title}
                  </h3>
                  <p className="mb-4 opacity-90 transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-1 transition-delay-50">
                    {project.description}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-yellow-800 border-white hover:bg-white/20 transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-1 transition-delay-100"
                  >
                    View Case Study
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button asChild className="bg-yellow-600 hover:bg-yellow-700 group" size="lg">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials & Social Responsibility */}
      {/* <section className="py-20 bg-gray-50" ref={testimonialsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={testimonialsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold mb-8 font-display">What Our Clients Say</h2>
              <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    whileHover={{ y: -5 }}
                  >
                    <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={testimonialsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold mb-8 font-display">Our Commitment to Sustainability</h2>
              <motion.div
                className="bg-gradient-to-br from-yellow-50 to-teal-50 p-8 rounded-lg shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1623227866882-c005c26dfe41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Sustainability"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <p className="text-gray-700 mb-6">
                    We believe in building a better future for all. Our initiatives focus on environmental
                    sustainability, community development, and ethical business practices that create lasting positive
                    impact.
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {sustainabilityInitiatives.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={testimonialsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    >
                      <div className="mr-2 mt-1 text-yellow-600">•</div>
                      <p>{item}</p>
                    </motion.li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="text-yellow-700 border-yellow-700 hover:bg-yellow-50 group"
                >
                  <Link href="/about#csr">
                    Learn About Our CSR
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Partners Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Trusted Partners"
            subtitle="We collaborate with industry leaders to deliver exceptional solutions and drive innovation."
          />

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="text-gray-400 font-semibold">PARTNER {index}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-800 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')] opacity-10 bg-cover bg-center"></div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-teal-600/20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        ></motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in creating innovative solutions that drive growth, sustainability, and success in today's
              competitive landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-yellow-800 hover:bg-gray-100 group">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-yellow-800 hover:bg-white/10">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
