'use client'
import { motion } from 'framer-motion'
import { headingVariants } from '../animate'


const Heading = ({title, description, className}) => {

    return (
        <motion.div
            variants={headingVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
            className={`max-w-3xl mx-auto text-center ${className}`}>
            <h1 className=" font-bold text-5xl mb-4">{title}</h1>
            <p className="text-xl text-gray-600">{description}</p>
        </motion.div>
    )
}

export default Heading