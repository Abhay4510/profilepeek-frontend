import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="mb-4">Last Updated: April 12, 2025</p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Introduction</h2>
          <p className="mb-4">
            Welcome to ProfilePeek. We respect your privacy and are committed to protecting your personal data. This
            privacy policy will inform you about how we look after your personal data when you visit our website and
            tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">The Data We Collect</h2>
          <p className="mb-4">
            When you use ProfilePeek, we collect information that you provide directly to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Connect your Instagram account</li>
            <li>Create an account with us</li>
            <li>Contact us through our contact form</li>
            <li>Interact with our platform</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Data</h2>
          <p className="mb-4">We use your personal data for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features of our service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">Instagram Data</h2>
          <p className="mb-4">
            When you connect your Instagram account, we access only the data that you explicitly authorize. This may
            include your profile information, media, and comments. We do not store your Instagram password and all
            access is conducted through Instagram's official API.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Contact Information</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
          <p className="mb-4">
            By email: support@profilepeek.com
            <br />
            By visiting our contact page:{" "}
            <Link to="/contact" className="text-purple-600 hover:underline">
              Contact Us
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link to="/" className="text-purple-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default PrivacyPolicyPage
