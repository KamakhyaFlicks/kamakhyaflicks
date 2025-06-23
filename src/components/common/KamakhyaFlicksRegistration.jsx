"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import {
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  CheckCircle,
  AlertCircle,
  Loader,
  Star,
} from "lucide-react"

const KamakhyaFlicksRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    courses: [],
    experience: "",
    goals: "",
    preferredStartDate: "",
  })

  const [status, setStatus] = useState({ type: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // EmailJS Configuration - Replace with your actual values
  const EMAILJS_CONFIG = {
    serviceId: "service_fz8qt2v", // Replace with your EmailJS service ID
    templateId: "template_swtehhw", // Replace with your EmailJS template ID
    publicKey: "iiCd3Li_yDPRerqU5", // Replace with your EmailJS public key
  }

  const courseOptions = [   
    { id: "dance", label: "Dance", icon: "💃" },
    { id: "scriptwriting", label: "Script Writing", icon: "✍️" },
    { id: "music", label: "Music", icon: "🎵" },
    { id: "videoediting", label: "Video Editing", icon: "🎬" },
    { id: "movieproduction", label: "Movie Production", icon: "🎥" },
    { id: "theaterarts", label: "Theater Arts", icon: "🎭" },
    { id: "acting", label: "Acting Classes", icon: "🎪" },
    { id: "communication", label: "Communication", icon: "🗣️" },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCourseChange = (courseId) => {
    setFormData((prev) => ({
      ...prev,
      courses: prev.courses.includes(courseId)
        ? prev.courses.filter((id) => id !== courseId)
        : [...prev.courses, courseId],
    }))
  }

  const validateForm = () => {
    const { fullName, email, phone, courses } = formData

    if (!fullName.trim()) {
      setStatus({ type: "error", message: "Full name is required" })
      return false
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setStatus({ type: "error", message: "Valid email address is required" })
      return false
    }

    if (!phone.trim() || phone.length < 10) {
      setStatus({ type: "error", message: "Valid phone number is required" })
      return false
    }

    if (courses.length === 0) {
      setStatus({ type: "error", message: "Please select at least one course" })
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: "", message: "" })

    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    try {
      // Prepare email data
      const selectedCourses = formData.courses
        .map((courseId) => courseOptions.find((course) => course.id === courseId)?.label)
        .join(", ")

      const emailData = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        age: formData.age || "Not specified",
        address: formData.address || "Not provided",
        courses: selectedCourses,
        experience: formData.experience || "No previous experience mentioned",
        goals: formData.goals || "Not specified",
        preferred_start_date: formData.preferredStartDate || "Not specified",
        registration_date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        subject: `New Registration - ${formData.fullName}`,
      }

      // Send email using EmailJS
      await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, emailData, EMAILJS_CONFIG.publicKey)

      setStatus({
        type: "success",
        message: "Registration submitted successfully! We'll contact you within 24 hours.",
      })

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        courses: [],
        experience: "",
        goals: "",
        preferredStartDate: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus({
        type: "error",
        message: "Failed to submit registration. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">KamakhyaFlicks</h1>
          <p className="text-xl text-purple-600 font-medium mb-2">Creative Academy Registration</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our creative community and unlock your artistic potential with professional training in various
            creative fields.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <motion.section variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <User className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-semibold text-gray-900">Personal Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your age"
                      min="5"
                      max="100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-purple-600" />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-purple-600" />
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 12345 67890"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-600" />
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Your complete address"
                  />
                </div>
              </motion.section>

              {/* Course Selection */}
              <motion.section variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Select Courses <span className="text-red-500">*</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {courseOptions.map((course) => (
                    <motion.label
                      key={course.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative flex flex-col items-center p-6 rounded-2xl cursor-pointer transition-all duration-200 ${
                        formData.courses.includes(course.id)
                          ? "bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-500 shadow-lg"
                          : "bg-gray-50 border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.courses.includes(course.id)}
                        onChange={() => handleCourseChange(course.id)}
                        className="sr-only"
                      />
                      <span className="text-3xl mb-3">{course.icon}</span>
                      <span className="text-sm font-medium text-gray-800 text-center">{course.label}</span>
                      {formData.courses.includes(course.id) && (
                        <CheckCircle className="absolute top-2 right-2 w-5 h-5 text-purple-600" />
                      )}
                    </motion.label>
                  ))}
                </div>
              </motion.section>

              {/* Additional Information */}
              <motion.section variants={fadeInUp} className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-semibold text-gray-900">Additional Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Previous Experience</label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your previous experience in the arts..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Goals & Expectations</label>
                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="What do you hope to achieve through our courses?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Start Date</label>
                  <input
                    type="date"
                    name="preferredStartDate"
                    value={formData.preferredStartDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </motion.section>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    status.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "bg-red-50 border border-red-200 text-red-700"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span className="font-medium">{status.message}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Submitting Registration...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Register Now</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-8 md:px-12 py-6 border-t border-gray-100">
            <p className="text-sm text-gray-600 text-center">
              🎬 <strong>KamakhyaFlicks Creative Academy</strong> - Nurturing creativity, building careers
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default KamakhyaFlicksRegistration
