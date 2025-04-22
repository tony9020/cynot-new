"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Check, Mail, MapPin, Phone, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import Image from "next/image";
import contactUsBg from "@/lib/assets/contactUs.jpg"; // Adjust this import path as needed

export default function ContactPage() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-8 w-8 text-yellow-600" />,
      title: "Visit Us",
      content: (
        <address className="not-italic text-gray-600">
          <p>123 Business Avenue</p>
          <p>Corporate District, CA 90210</p>
          <p>United States</p>
        </address>
      ),
    },
    {
      icon: <Mail className="h-8 w-8 text-yellow-600" />,
      title: "Email Us",
      content: (
        <>
          <p className="text-gray-600 mb-1">General Inquiries:</p>
          <p className="text-yellow-600 font-medium mb-2">info@company.com</p>
          <p className="text-gray-600 mb-1">Support:</p>
          <p className="text-yellow-600 font-medium">support@company.com</p>
        </>
      ),
    },
    {
      icon: <Phone className="h-8 w-8 text-yellow-600" />,
      title: "Call Us",
      content: (
        <>
          <p className="text-gray-600 mb-1">Main Office:</p>
          <p className="text-yellow-600 font-medium mb-2">+1 (555) 123-4567</p>
          <p className="text-gray-600 mb-1">Customer Service:</p>
          <p className="text-yellow-600 font-medium">+1 (555) 987-6543</p>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative py-32 md:py-40 bg-yellow-800 text-white mt-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-800 to-teal-700"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        ></motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Contact Us
            </h1>
            <p className="text-xl mb-8">
              We'd love to hear from you. Reach out to us with any questions,
              inquiries, or project ideas.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-white text-yellow-800 hover:bg-gray-100 group"
                onClick={() => {
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section> */}
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
      Contact Us
    </h1>
    
    {/* You can add more content here for the rest of your hero section */}
  </div>
</section>



      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <Card className="transition-all duration-300 hover:shadow-lg border-none bg-gradient-to-br from-white to-gray-50 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <motion.div
                      className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 font-display">
                      {item.title}
                    </h3>
                    {item.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            id="contact-form"
          >
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-display">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  className="bg-gradient-to-br from-yellow-50 to-teal-50 border border-yellow-200 rounded-lg p-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2,
                    }}
                  >
                    <Check className="h-8 w-8 text-yellow-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 font-display">
                    Thank You!
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Your message has been sent successfully. We'll get back to
                    you shortly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-yellow-600 hover:bg-yellow-700 group"
                  >
                    Send Another Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 relative">
                      <Label
                        htmlFor="name"
                        className={`transition-colors duration-200 ${
                          focusedField === "name" ? "text-yellow-600" : ""
                        }`}
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        ref={nameRef}
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus("name")}
                        onBlur={handleBlur}
                        className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-200"
                        required
                      />
                      {focusedField === "name" && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-yellow-600"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                    <div className="space-y-2 relative">
                      <Label
                        htmlFor="email"
                        className={`transition-colors duration-200 ${
                          focusedField === "email" ? "text-yellow-600" : ""
                        }`}
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        ref={emailRef}
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus("email")}
                        onBlur={handleBlur}
                        className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-200"
                        required
                      />
                      {focusedField === "email" && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-yellow-600"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 relative">
                      <Label
                        htmlFor="phone"
                        className={`transition-colors duration-200 ${
                          focusedField === "phone" ? "text-yellow-600" : ""
                        }`}
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        ref={phoneRef}
                        placeholder="+1 (555) 123-4567"
                        value={formState.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus("phone")}
                        onBlur={handleBlur}
                        className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-200"
                      />
                      {focusedField === "phone" && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-yellow-600"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                    <div className="space-y-2 relative">
                      <Label
                        htmlFor="subject"
                        className={`transition-colors duration-200 ${
                          focusedField === "subject" ? "text-yellow-600" : ""
                        }`}
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        ref={subjectRef}
                        placeholder="How can we help you?"
                        value={formState.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus("subject")}
                        onBlur={handleBlur}
                        className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-200"
                        required
                      />
                      {focusedField === "subject" && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-yellow-600"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="space-y-2 relative">
                    <Label
                      htmlFor="message"
                      className={`transition-colors duration-200 ${
                        focusedField === "message" ? "text-yellow-600" : ""
                      }`}
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      ref={messageRef}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={handleBlur}
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 transition-all duration-200"
                      required
                    />
                    {focusedField === "message" && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-yellow-600"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-600 to-teal-600 hover:from-yellow-700 hover:to-teal-700 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* Map */}

            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-display">Our Location</h2>
              <p className="text-gray-600 mb-8">
                Visit our headquarters or one of our global offices. We're always happy to meet in person.
              </p>
              <motion.div
                className="bg-gray-200 rounded-lg overflow-hidden h-[400px] relative shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-600">Interactive Map Would Be Embedded Here</p>
                </div>
                <img
                  src="/placeholder.svg?height=400&width=600&text=Map"
                  alt="Office location map"
                  className="w-full h-full object-cover opacity-50"
                />
              </motion.div>
              <div className="mt-6">
                <h3 className="font-bold mb-2">Office Hours</h3>
                <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-display">
                Our Location
              </h2>
              <p className="text-gray-600 mb-8">
                Visit our headquarters or one of our global offices. We're
                always happy to meet in person.
              </p>

              <motion.div
                className="bg-gray-200 rounded-lg overflow-hidden h-[400px] relative shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Map.png"
                  alt="Google Map Location"
                  fill
                  className="object-cover opacity-90"
                />
              </motion.div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">Office Hours</h3>
                <p className="text-gray-600 mb-1">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Our Global Offices
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With locations around the world, we're able to serve clients
              globally while understanding local markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: "New York",
                country: "United States",
                address: "456 Park Avenue, New York, NY 10022",
                phone: "+1 (212) 555-6789",
                email: "newyork@company.com",
              },
              {
                city: "London",
                country: "United Kingdom",
                address: "123 Oxford Street, London W1D 2HG",
                phone: "+44 20 7123 4567",
                email: "london@company.com",
              },
              {
                city: "Singapore",
                country: "Singapore",
                address: "88 Market Street, Singapore 048948",
                phone: "+65 6123 4567",
                email: "singapore@company.com",
              },
              {
                city: "Sydney",
                country: "Australia",
                address: "240 George Street, Sydney NSW 2000",
                phone: "+61 2 9123 4567",
                email: "sydney@company.com",
              },
              {
                city: "Tokyo",
                country: "Japan",
                address: "1-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005",
                phone: "+81 3 1234 5678",
                email: "tokyo@company.com",
              },
              {
                city: "Dubai",
                country: "United Arab Emirates",
                address: "Sheikh Zayed Road, Dubai, UAE",
                phone: "+971 4 123 4567",
                email: "dubai@company.com",
              },
            ].map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg border-none bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1 font-display">
                      {office.city}
                    </h3>
                    <p className="text-yellow-600 mb-4">{office.country}</p>
                    <address className="not-italic text-gray-600 mb-4">
                      {office.address}
                    </address>
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold">Phone:</span>{" "}
                      {office.phone}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Email:</span>{" "}
                      {office.email}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about contacting us and our
              response times.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly can I expect a response?",
                answer:
                  "We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please indicate this in your message subject line.",
              },
              {
                question: "Do you offer consultations?",
                answer:
                  "Yes, we offer both in-person and virtual consultations. You can request a consultation through our contact form or by calling our office directly.",
              },
              {
                question: "Can I visit your office without an appointment?",
                answer:
                  "While we welcome visitors, we recommend scheduling an appointment to ensure that the appropriate team members are available to meet with you.",
              },
              {
                question: "How can I join your team?",
                answer:
                  "We're always looking for talented individuals to join our team. Please visit our Careers page to view current openings and submit your application.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 font-display">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-800 to-teal-700 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        ></motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help you achieve your
              goals.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-yellow-800 hover:bg-gray-100 group shadow-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Contact Us Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
