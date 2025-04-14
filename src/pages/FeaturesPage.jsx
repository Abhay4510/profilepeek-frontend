import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Instagram, User, MessageCircle, BarChart2, Shield, Zap, Smartphone, Clock, RefreshCw } from "react-feather"

const FeaturesPage = () => {
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

  const features = [
    {
      icon: <User className="w-6 h-6 text-pink-500" />,
      title: "Profile Analytics",
      description:
        "Get detailed insights about your Instagram profile, including followers, engagement rates, and growth trends.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-purple-500" />,
      title: "Comment Management",
      description:
        "View and reply to comments on your posts directly from our platform with advanced filtering options.",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-indigo-500" />,
      title: "Performance Metrics",
      description: "Track how your content performs with comprehensive analytics on likes, comments, and reach.",
    },
    {
      icon: <Shield className="w-6 h-6 text-pink-500" />,
      title: "Secure Authentication",
      description: "Connect securely with Instagram using official OAuth authentication for peace of mind.",
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: "Fast Performance",
      description: "Enjoy a lightning-fast experience with our optimized platform built for speed and reliability.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-500" />,
      title: "Mobile Friendly",
      description:
        "Access all features on any device with our fully responsive design that works seamlessly on mobile.",
    },
    {
      icon: <Clock className="w-6 h-6 text-pink-500" />,
      title: "Scheduled Reports",
      description: "Set up automated reports to receive regular updates on your Instagram performance.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-purple-500" />,
      title: "Real-time Updates",
      description: "Get the latest data with real-time synchronization between ProfilePeek and Instagram.",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-block p-3 bg-purple-100 rounded-full mb-6">
              <Instagram className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Powerful Features</h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover all the ways ProfilePeek can help you better understand and engage with your Instagram presence.
              Our platform is packed with features designed to give you deeper insights and more control.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ProfilePeek offers a comprehensive set of tools to enhance your Instagram experience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                variants={fadeIn}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="bg-gray-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">Profile Analytics Dashboard</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mb-6"></div>
                <p className="text-lg text-gray-600 mb-6">
                  Our comprehensive dashboard gives you a complete overview of your Instagram performance at a glance.
                  Track followers, engagement, and content performance all in one place.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="text-green-500 mt-1">✓</div>
                    <span>Real-time follower count and growth trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-green-500 mt-1">✓</div>
                    <span>Engagement rate calculations and benchmarks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-green-500 mt-1">✓</div>
                    <span>Content performance metrics and comparisons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-green-500 mt-1">✓</div>
                    <span>Audience demographics and insights</span>
                  </li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Try It Now
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-gray-800 p-4 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-sm mx-auto">Analytics Dashboard</div>
                </div>
                <div className="bg-white p-4 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Dashboard Preview</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="rounded-xl overflow-hidden shadow-xl order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-gray-800 p-4 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-sm mx-auto">Comment Management</div>
                </div>
                <div className="bg-white p-4 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Comments Interface Preview</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">Advanced Comment Management</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mb-6"></div>
                <p className="text-lg text-gray-600 mb-6">
                  Never miss an important comment again. Our powerful comment management system lets you view, filter,
                  and respond to comments across all your posts from a single interface.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="text-green-500 mt-1">✓</div>
                    <span>Filter comments by date, post, or keyword</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-green-500 mt-1">✓</div>
                    <span>Batch reply to multiple comments at once</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-green-500 mt-1">✓</div>
                    <span>Set up notifications for important comments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="text-green-500 mt-1">✓</div>
                    <span>Track comment sentiment and engagement</span>
                  </li>
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Explore Comments
                  </Link>
                </motion.div>
              </motion.div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to unlock all features?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with ProfilePeek today and take your Instagram presence to the next level.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="inline-block px-8 py-3 bg-white text-purple-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Started Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage
