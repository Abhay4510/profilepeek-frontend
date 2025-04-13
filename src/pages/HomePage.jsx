import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Instagram, User, MessageCircle, Heart, Shield } from "react-feather"
import LoginButton from "../components/auth/LoginButton"
import { useAuth } from "../context/AuthContext"
import { motion } from "framer-motion"

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/feed")
    }
  }, [isAuthenticated, navigate])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Connect with Instagram
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Explore your Instagram profile, view your media feed, and interact with comments in a beautiful new
              interface.
            </p>
            <motion.div className="flex justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <LoginButton />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 relative max-w-sm mx-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                <div className="w-full h-full bg-gradient-to-b from-pink-50 to-purple-50 flex flex-col">
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <Instagram className="w-6 h-6 text-pink-600" />
                      <span className="font-bold text-lg bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        ProfilePeek
                      </span>
                    </div>
                    <Heart className="w-5 h-5 text-pink-500" />
                  </div>
                  <div className="flex-1 overflow-y-auto p-2 space-y-4">
                    <div className="bg-white rounded-lg shadow-sm p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                          J
                        </div>
                        <span className="font-medium text-sm">johndoe</span>
                      </div>
                      <div className="w-full h-40 bg-gray-200 rounded-md mb-2"></div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Heart className="w-4 h-4" />
                        <MessageCircle className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                          A
                        </div>
                        <span className="font-medium text-sm">alice_smith</span>
                      </div>
                      <div className="w-full h-40 bg-gray-200 rounded-md mb-2"></div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Heart className="w-4 h-4" />
                        <MessageCircle className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Features
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="card p-6 flex flex-col items-center text-center"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-pink-100 p-4 rounded-full mb-4">
                <User className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Profile Details</h3>
              <p className="text-gray-600">
                View your Instagram profile information including followers, following, and media count.
              </p>
            </motion.div>

            <motion.div
              className="card p-6 flex flex-col items-center text-center"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Instagram className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Media Feed</h3>
              <p className="text-gray-600">
                Browse through your Instagram posts, reels, and other media in a clean, organized interface.
              </p>
            </motion.div>

            <motion.div
              className="card p-6 flex flex-col items-center text-center"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <MessageCircle className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comment Interaction</h3>
              <p className="text-gray-600">View and reply to comments on your posts directly from our platform.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="flex flex-col items-center text-center" variants={fadeIn}>
              <motion.div
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                1
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">Login with Instagram</h3>
              <p className="text-gray-600">
                Connect your Instagram account securely using Instagram's official authentication.
              </p>
            </motion.div>

            <motion.div className="flex flex-col items-center text-center" variants={fadeIn}>
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                2
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">Explore Your Profile</h3>
              <p className="text-gray-600">
                View your profile details and media feed in our beautifully designed interface.
              </p>
            </motion.div>

            <motion.div className="flex flex-col items-center text-center" variants={fadeIn}>
              <motion.div
                className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                3
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">Interact with Content</h3>
              <p className="text-gray-600">Reply to comments, view your media statistics, and more.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Your Data is Secure</h2>
            <p className="text-lg text-gray-600 mb-8">
              We prioritize your privacy and security. ProfilePeek only accesses the data you explicitly authorize and
              never shares your information with third parties.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/privacy-policy"
                className="text-purple-600 font-medium hover:underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms-of-service"
                className="text-purple-600 font-medium hover:underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="/contact"
                className="text-purple-600 font-medium hover:underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect your Instagram account now and explore your profile in a whole new way.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <LoginButton />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
