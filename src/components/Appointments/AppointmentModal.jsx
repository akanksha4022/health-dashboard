import { motion, AnimatePresence } from "framer-motion";

const AppointmentModal = ({ children, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        <motion.div
          className="bg-white rounded-xl w-[90%] max-w-md p-6 shadow-lg relative"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >

          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-stone-500 hover:text-black"
          >
            ✖
          </button>

          {children}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AppointmentModal;
