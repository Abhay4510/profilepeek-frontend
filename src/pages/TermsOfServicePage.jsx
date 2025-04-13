import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="mb-4">Last Updated: April 12, 2025</p>

          <h2 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using ProfilePeek, you agree to be bound by these Terms of Service and all applicable laws
            and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing
            this site.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily access the materials on ProfilePeek's website for personal,
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
            this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on ProfilePeek's website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">3. Instagram Integration</h2>
          <p className="mb-4">
            ProfilePeek integrates with Instagram through their official API. By using our service, you acknowledge
            that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              You are granting ProfilePeek permission to access your Instagram data as specified during the
              authorization process
            </li>
            <li>You must comply with Instagram's Terms of Service while using our platform</li>
            <li>ProfilePeek is not affiliated with Instagram or Meta Platforms, Inc.</li>
            <li>Instagram may change their API or Terms of Service at any time, which could affect our service</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">4. Disclaimer</h2>
          <p className="mb-4">
            The materials on ProfilePeek's website are provided on an 'as is' basis. ProfilePeek makes no warranties,
            expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
            implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
            of intellectual property or other violation of rights.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">5. Limitations</h2>
          <p className="mb-4">
            In no event shall ProfilePeek or its suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
            use the materials on ProfilePeek's website, even if ProfilePeek or a ProfilePeek authorized representative
            has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">6. Contact Information</h2>
          <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
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

export default TermsOfServicePage
