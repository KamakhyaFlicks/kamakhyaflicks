"use client"

import { useState } from "react"
import { motion } from "framer-motion"
// Replace shadcn components with standard HTML elements
// You can add these UI components later if needed

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  // Simple icon components to replace Lucide icons
  const IconMail = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  )

  const IconFilm = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"></rect>
      <line x1="7" x2="7" y1="2" y2="22"></line>
      <line x1="17" x2="17" y1="2" y2="22"></line>
      <line x1="2" x2="22" y1="12" y2="12"></line>
      <line x1="2" x2="7" y1="7" y2="7"></line>
      <line x1="2" x2="7" y1="17" y2="17"></line>
      <line x1="17" x2="22" y1="17" y2="17"></line>
      <line x1="17" x2="22" y1="7" y2="7"></line>
    </svg>
  )

  const IconMessageSquare = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  )

  const IconUser = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  )

  const IconSend = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z"></path>
      <path d="M22 2 11 13"></path>
    </svg>
  )

  const IconCheckCircle = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <path d="m9 11 3 3L22 4"></path>
    </svg>
  )

  return (
    <div className="min-h-screen w-full m-auto bg-black text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[40vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://placehold.co/1920x1080/111111/333333')",
            filter: "brightness(0.4) contrast(1.2)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            Contact <span className="text-yellow-500">Us</span>
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-zinc-400 text-lg mb-8">
                Have a project in mind? Looking to partner or work together? We'd love to hear from you.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/10 p-3 rounded-full">
                  <IconMail className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Email Us</h3>
                  <p className="text-zinc-400 mt-1">contact@movieproduction.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-500/10 p-3 rounded-full">
                  <IconFilm className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Studio Location</h3>
                  <p className="text-zinc-400 mt-1">123 Film Avenue, Hollywood, CA 90028</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-500/10 p-3 rounded-full">
                  <IconMessageSquare className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-medium">Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800"
              >
                <IconCheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-zinc-400 mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                <div className="space-y-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="name" className="text-zinc-300 block mb-1">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-zinc-500">
                        <IconUser />
                      </div>
                      <input
                        id="name"
                        placeholder="John Doe"
                        className="w-full pl-10 py-2 bg-zinc-800/50 border border-zinc-700 rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/10"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="email" className="text-zinc-300 block mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-zinc-500">
                        <IconMail />
                      </div>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full pl-10 py-2 bg-zinc-800/50 border border-zinc-700 rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/10"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="subject" className="text-zinc-300 block mb-1">
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-zinc-500">
                        <IconFilm />
                      </div>
                      <input
                        id="subject"
                        placeholder="Project Inquiry"
                        className="w-full pl-10 py-2 bg-zinc-800/50 border border-zinc-700 rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/10"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label htmlFor="message" className="text-zinc-300 block mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="w-full min-h-[150px] p-3 bg-zinc-800/50 border border-zinc-700 rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/10"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      className="w-full py-3 bg-yellow-500 hover:bg-red-600 text-black rounded-md transition-colors flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center ">
                          <IconSend className="mr-2 h-4 w-4" /> Send Message
                        </span>
                      )}
                    </button>
                  </motion.div>
                </div>
              </motion.form>
            )}

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
