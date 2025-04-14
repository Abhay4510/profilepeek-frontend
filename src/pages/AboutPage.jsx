import { motion } from "framer-motion"
import { Instagram, Users, Shield, Award, Code } from "react-feather"
import { Link } from "react-router-dom"

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
    //   image: "/placeholder.svg?height=200&width=200",
      bio: "Alex has over 10 years of experience in social media analytics and previously worked at Instagram.",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
    //   image: "/placeholder.svg?height=200&width=200",
      bio: "Sarah is a full-stack developer with expertise in React, Node.js, and API integrations.",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Design",
    //   image: "/placeholder.svg?height=200&width=200",
      bio: "Michael brings 8 years of UX/UI design experience and a passion for creating beautiful interfaces.",
    },
    {
      name: "Priya Patel",
      role: "Marketing Director",
    //   image: "/placeholder.svg?height=200&width=200",
      bio: "Priya specializes in digital marketing strategies and has helped grow multiple tech startups.",
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
            <h1 className="text-4xl font-bold mb-6">About ProfilePeek</h1>
            <p className="text-lg text-gray-600 mb-8">
              We're on a mission to help Instagram users better understand and engage with their profiles and audience.
              Our platform provides a seamless way to view your Instagram data, interact with comments, and manage your
              social media presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                ProfilePeek was founded in 2023 with a simple idea: make Instagram data more accessible and useful for
                everyday users. Our founder, Alex Johnson, noticed that while Instagram provided a wealth of
                information, it wasn't always easy to navigate or understand the full picture of one's social media
                presence.
              </p>
              <p>
                What started as a side project quickly gained traction as more users discovered the value of having a
                dedicated platform to explore their Instagram profiles in depth. Today, ProfilePeek serves thousands of
                users worldwide, helping them better understand their audience, engage with followers, and optimize
                their content strategy.
              </p>
              <p>
                Our team has grown from a single developer to a diverse group of professionals passionate about social
                media, data analytics, and creating exceptional user experiences. We're committed to continuous
                improvement and regularly add new features based on user feedback.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at ProfilePeek, from product development to customer support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-pink-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User-Centered</h3>
              <p className="text-gray-600">
                We put our users first in every decision, focusing on creating intuitive and valuable experiences.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy & Security</h3>
              <p className="text-gray-600">
                We're committed to protecting user data and maintaining the highest standards of security.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new technologies and approaches to provide better solutions for our users.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-pink-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from code quality to customer support.
              </p>
            </motion.div>
          </div>
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
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented people behind ProfilePeek who make everything possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                {/* <div className="aspect-square bg-gray-200">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-purple-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to explore your Instagram profile?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already gaining insights from ProfilePeek.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="inline-block px-8 py-3 bg-white text-purple-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
