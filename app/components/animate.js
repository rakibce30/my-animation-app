export const upToDown = {
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

export const downToUp = {
    hidden: {
        opacity: 0,
        y: '60px',
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

export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 0.5,
            ease: 'easeIn',
        }
    }
}

export const bannerBgVariants = {
    hidden: {
        x: 0,
        z: 0,
        skewX: '-4deg',
        opacity: 0,
    },
    visible: {
        x: '60px',
        z: '-25px',
        opacity: 1,
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
        skewX: '-4deg',
        opacity: 0,
    },
    visible: {
        scale: 1.1,
        y: '70px',
        rotate: '2deg',
        rotateX: '6deg',
        opacity: 1,
        transition: {
            duration: 2.80,
            delay: 0.3,
            ease: 'easeInOut',
            type:'spring',
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
            delay: 0.8,
            ease: 'linear',
            repeat: Infinity
        }
    }
}

export const heroBtnVariants = {
    hover: {
        backgroundImage: 'linear-gradient(to right, indigo, purple, pink)',
        transition: {
            duration: 0.8,
            delay: 0.2,
            ease: 'easeInOut'
        }
    }

}



