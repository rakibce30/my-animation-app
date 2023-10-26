'use client'
import { carouselVariants, fadeIn } from '../animate'
import { motion } from 'framer-motion'

const Carousel = ({children}) => {

    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className='py-6 flex w-screen overflow-hidden'>
            <motion.div
                variants={carouselVariants}
                initial='hidden'
                animate='visible'
                >
                {children}
            </motion.div>
            <motion.div
                variants={carouselVariants}
                initial='hidden'
                animate='visible'
                >
                {children}
            </motion.div>
        </motion.div>
    )
}

export default Carousel