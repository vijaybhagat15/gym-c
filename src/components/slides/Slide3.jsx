import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Slide3() {
  return (
<div className="sm:bg-gradient-to-bl h-screen grid grid-cols-1 md:grid-cols-2 items-center font-sans px-2 md:px-4 max-h-[450px]" style={{ backgroundImage: "url('src/assets/images/img2.jpg')" }}>

      {/* left Section: Text Content */}
      <motion.div
        className="flex items-center justify-center "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-white px-8">
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SAVE UPTO 50% OFF
          </motion.p>
          <motion.h1
            className="sm:text-3xl text-2xl font-extrabold mt-2 text-accent font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            COACHES GUIDE,
            <br /> GOALS ACHIEVED
          </motion.h1>
          <motion.p
            className="mt-4 text-lg leading-relaxed text-white font-sans"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Guided by coaches, driven by goals—your path to success starts here!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link
              to="/products"
              className="mt-6 px-6 py-3 bg-gray-500 text-white font-bold text-lg rounded-xl hover:bg-gray-600 inline-block text-center font-sans"
            >
              SHOP NOW
            </Link>
          </motion.div>
        </div>
      </motion.div>
      {/* right Section: Image Slider */}
      <motion.div
        className="hidden md:flex justify-center items-center relative"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-[#000000] via-[#283618] to-transparent opacity-80 rounded-lg"></div>
        <motion.div
          className="relative w-full max-w-md h-96 flex items-center justify-center z-10"
          style={{  width: "400px" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >

        </motion.div>
      </motion.div>

    </div>
  );
}

export default Slide3;
