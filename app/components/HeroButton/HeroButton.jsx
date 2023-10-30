import { motion, AnimatePresence } from 'framer-motion'
import Text from '../Text/Text'
import { heroBtnVariants } from '../animate'

const HeroButton = ({ text }) => {
  return (
    <AnimatePresence>


      <motion.div
        whileHover='hover'
        variants={heroBtnVariants}
        className='bg-gray-300 rounded-2xl w-fit p-[2px]'>
        <button className='bg-white px-3 py-3 rounded-[14px]'><Text className='text-xl font-semibold'>{text}</Text></button>
      </motion.div>
    </AnimatePresence>
  )
}

export default HeroButton