import Link from "next/link";
import {
  ArrowRight,
  Award,
  Clock,
  Globe,
  Heart,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AboutUs from "@/lib/assets/aboutUs1.jpg";
import AboutUs1 from "@/lib/assets/aboutUs2.jpg";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-yellow-800 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Company
            </h1>
            <p className="text-xl mb-8">
              We're on a mission to transform industries through innovation,
              sustainability, and exceptional service.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <Image
            src={AboutUs} // Using the imported image
            alt="Contact Us Background"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2021, our company began with a simple vision: to
                create innovative solutions that make a positive impact on the
                world. What started as a small team of passionate individuals
                has grown into a global organization with offices in 6
                countries.
              </p>
              <p className="text-gray-700 mb-6">
                Throughout our journey, we've remained committed to our core
                values of excellence, integrity, and sustainability. These
                principles guide every decision we make and every project we
                undertake.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                  <Link href="/contact">Join Our Team</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[500px] md:h-[500px]">
                <Image
                  src={AboutUs1} // Using the imported image
                  alt="About Us Image"
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-yellow-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">2+ Years</p>
                <p>of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're guided by a clear mission and a set of core values that
              define who we are and how we operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver innovative solutions that empower businesses and
                individuals to achieve their goals while making a positive
                impact on society and the environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a global leader in sustainable innovation, recognized for
                our commitment to excellence, integrity, and positive social
                impact across all our divisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-yellow-600">•</div>
                  <p>Excellence in everything we do</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-yellow-600">•</div>
                  <p>Integrity and transparency</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-yellow-600">•</div>
                  <p>Innovation and creativity</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-yellow-600">•</div>
                  <p>Sustainability and responsibility</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white" id="leadership">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our vision and drive
              our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Tony Christopher",
                position: "Chief Executive Officer",
                bio: "Tony is a visionary UI/UX Designer with over 5 years of experience, specializing in creating intuitive and user-centered designs that bridge technology and customer experience.",
                image: "/placeholder.svg?height=400&width=400&text=T.C.",
              },
              {
                name: "Abhinav Jaiju",
                position: "Chief Technology Officer",
                bio: "Abhinav is a Frontend Developer specializing in Next.js and a Marketing Analyst with a passion for building responsive and scalable web applications while optimizing user experience.",
                image: "/Abhinav.png ",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-yellow-600 mb-4">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50" id="timeline">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to our current success, explore the key
              milestones that have shaped our company.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200 hidden md:block"></div>

            {/* Timeline items */}
            {[
              {
                year: "2021",
                title: "Company Founded",
                description:
                  "Our journey began with a small team and a big vision.",
              },
              {
                year: "2021",
                title: "First Major Project",
                description:
                  "Completed our first landmark project, establishing our reputation for excellence.",
              },
              // {
              //   year: "2012",
              //   title: "International Expansion",
              //   description:
              //     "Opened our first international office, marking the beginning of our global presence.",
              // },
              // {
              //   year: "2015",
              //   title: "Sustainability Initiative",
              //   description:
              //     "Launched our comprehensive sustainability program, setting industry standards.",
              // },
              {
                year: "2022",
                title: "Technology Division",
                description:
                  "Established our technology division to drive digital innovation.",
              },
              {
                year: "2024",
                title: "Global Recognition",
                description:
                  "Received multiple industry awards for our innovative solutions and sustainable practices.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0
                    ? "md:ml-auto md:mr-[50%] md:pr-12"
                    : "md:mr-auto md:ml-[50%] md:pl-12"
                }`}
              >
                <div
                  className="hidden md:block absolute top-0 w-6 h-6 rounded-full bg-yellow-500 border-4 border-white shadow-md"
                  style={{ [index % 2 === 0 ? "right" : "left"]: "-12px" }}
                ></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-bold mb-4">
                    <Clock className="inline-block w-4 h-4 mr-2" />
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      {/* <section className="py-20 bg-white" id="csr">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Corporate Social Responsibility
              </h2>
              <p className="text-gray-700 mb-6">
                We believe that business success and social responsibility go
                hand in hand. Our CSR initiatives focus on creating positive
                impact in three key areas:
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Globe className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Environmental Sustainability
                    </h3>
                    <p className="text-gray-700">
                      Our commitment to reducing our carbon footprint and
                      promoting sustainable practices extends across all our
                      operations and projects.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Community Development
                    </h3>
                    <p className="text-gray-700">
                      We invest in the communities where we operate, supporting
                      education, healthcare, and local economic development.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Ethical Business Practices
                    </h3>
                    <p className="text-gray-700">
                      We maintain the highest standards of integrity,
                      transparency, and ethical conduct in all our business
                      relationships.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
                  <Link href="/about/csr-report">
                    <span className="flex items-center">
                      View CSR Report <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/placeholder.svg?height=300&width=300&text=CSR 1"
                alt="CSR Initiative 1"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img
                src="/placeholder.svg?height=300&width=300&text=CSR 2"
                alt="CSR Initiative 2"
                className="w-full h-auto rounded-lg shadow-md mt-8"
              />
              <img
                src="/placeholder.svg?height=300&width=300&text=CSR 3"
                alt="CSR Initiative 3"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <img
                src="/placeholder.svg?height=300&width=300&text=CSR 4"
                alt="CSR Initiative 4"
                className="w-full h-auto rounded-lg shadow-md mt-8"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-yellow-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Journey
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking to partner with us, join our team, or learn
            more about our services, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-yellow-800 hover:bg-gray-100"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-yellow-900 hover:bg-white/10"
            >
              <Link href="/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
