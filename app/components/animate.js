export const bannerTextVariants = {
    hidden: {
        opacity: 0,
        y: '-40px',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.30,
            delay: 0.1,
            ease: 'easeInOut',
        }
    }
}

export const bannerBgVariants = {
    hidden: {
        x: 0,
        z: 0,
        skewX: '-4deg'
    },
    visible: {
        x: '60px',
        z: '-25px',
        skewX: 0,
        transition: {
            duration: 2.80,
            delay: 0.3,
            ease: 'easeOut',
            type: 'spring'
        }
    }
}

export const bannerImgVariants = {
    hidden: {
        y: 0,
        rotate: 0,
        scale: 0.8,
        skewX: '-4deg'
    },
    visible: {
        scale: 1.1,
        y: '70px',
        rotate: '2deg',
        rotateX: '6deg',
        transition: {
            duration: 2.80,
            delay: 0.3,
            ease: 'easeInOut',
            type:'spring',
        }
    }
}

export const headingVariants = {
    hidden: {
        opacity: 0,
        y: '80px',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.50,
            delay: 0.3,
            ease: 'easeInOut',
        }
    }
}

export const carouselVariants = {
    hidden: {
        x: 0,
    },
    visible: {
        x: '-98%',
        transition: {
            duration: 100,
            delay: 0.5,
            ease: 'linear',
            repeat: Infinity
        }
    }
}