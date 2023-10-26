'use client'
import { motion } from 'framer-motion'
import { HiOutlineChartPie, HiOutlineCamera, HiOutlineChip, HiOutlineClipboardList, HiOutlineCog, HiOutlineLibrary } from "react-icons/hi";
import { headingVariants } from "../animate";

const TabIcon = () => {
    return (
        <motion.div
            variants={headingVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mt-6">
            <div className="relative group ring-2 text-2xl text-black/80 ring-gray-300 cursor-pointer rounded-xl p-2">
                <HiOutlineLibrary />
                <span className="absolute bottom-0 left-1/2 translate-y-10 -translate-x-1/2 bg-black/80 px-3 py-1 text-sm text-white rounded-full invisible group-hover:visible">Home</span>
            </div>
            <div className="relative group ring-2 text-2xl text-black/80 ring-gray-300 cursor-pointer rounded-xl p-2">
                <HiOutlineChartPie />
                <span className="absolute bottom-0 left-1/2 translate-y-10 -translate-x-1/2 bg-black/80 px-3 py-1 text-sm text-white rounded-full invisible group-hover:visible">Pie</span>
            </div>
            <div className="relative group ring-2 text-2xl text-black/80 ring-gray-300 cursor-pointer rounded-xl p-2">
                <HiOutlineCamera />
                <span className="absolute bottom-0 left-1/2 translate-y-10 -translate-x-1/2 bg-black/80 px-3 py-1 text-sm text-white rounded-full invisible group-hover:visible">Camera</span>
            </div>
            <div className="relative group ring-2 text-2xl text-black/80 ring-gray-300 cursor-pointer rounded-xl p-2">
                <HiOutlineChip />
                <span className="absolute bottom-0 left-1/2 translate-y-10 -translate-x-1/2 bg-black/80 px-3 py-1 text-sm text-white rounded-full invisible group-hover:visible">Chip</span>
            </div>
            <div className="relative group ring-2 text-2xl text-black/80 ring-gray-300 cursor-pointer rounded-xl p-2">
                <HiOutlineClipboardList />
                <span className="absolute bottom-0 left-1/2 translate-y-10 -translate-x-1/2 bg-black/80 px-3 py-1 text-sm text-white rounded-full invisible group-hover:visible">Clipboard</span>
            </div>
            <div className="relative group ring-2 text-2xl text-black/80 ring-gray-300 cursor-pointer rounded-xl p-2">
                <HiOutlineCog />
                <span className="absolute bottom-0 left-1/2 translate-y-10 -translate-x-1/2 bg-black/80 px-3 py-1 text-sm text-white rounded-full invisible group-hover:visible">Cog</span>
            </div>
        </motion.div>
    )
}

export default TabIcon