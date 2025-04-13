import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, X, Instagram, User, Grid, LogOut } from "react-feather"
import { useAuth } from "../../context/AuthContext"
import { motion } from "framer-motion"

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate("/")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
              <Instagram className="w-8 h-8 text-pink-600" />
            </motion.div>
            <motion.span
              className="font-bold text-xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              ProfilePeek
            </motion.span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {isAuthenticated ? (
              <>
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/profile" className="text-gray-700 hover:text-pink-600 font-medium flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/feed" className="text-gray-700 hover:text-pink-600 font-medium flex items-center gap-1">
                    <Grid className="w-4 h-4" />
                    <span>Feed</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/contact" className="text-gray-700 hover:text-pink-600 font-medium flex items-center gap-1">
                    <span>Contact</span>
                  </Link>
                </motion.div>
                <motion.button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-pink-600 font-medium flex items-center gap-1"
                  whileHover={{ y: -2 }}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </motion.button>
                {user?.profilePicture ? (
                  <img
                    src={user.profilePicture || "/placeholder.svg"}
                    alt={user.username}
                    className="w-8 h-8 rounded-full border-2 border-pink-500"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    {user?.username ? user.username.charAt(0).toUpperCase() : "U"}
                  </div>
                )}
              </>
            ) : (
              <>
                <motion.div whileHover={{ y: -2 }}>
                  <Link to="/contact" className="text-gray-700 hover:text-pink-600 font-medium">
                    Contact
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/" className="btn-primary">
                    Login
                  </Link>
                </motion.div>
              </>
            )}
          </nav>

          <button className="md:hidden text-gray-700" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-2 flex flex-col gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-pink-600 font-medium flex items-center gap-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </Link>
                <Link
                  to="/feed"
                  className="text-gray-700 hover:text-pink-600 font-medium flex items-center gap-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Grid className="w-5 h-5" />
                  <span>Feed</span>
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-pink-600 font-medium flex items-center gap-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Contact</span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                  className="text-gray-700 hover:text-pink-600 font-medium flex items-center gap-2 py-2"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-pink-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link to="/" className="btn-primary inline-block text-center" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              </>
            )}
          </motion.nav>
        )}
      </div>
    </header>
  )
}

export default Header
