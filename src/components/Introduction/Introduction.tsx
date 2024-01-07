import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Introduction() {
    return (
        <div className="w-full z-10">
            <div className="w-full md:h-full">
                <div className="container mt-10 sm:mt-0 grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                         <div className='relative rounded-md overflow-hidden md:h-80 md:w-80'>
                            <Image src="/assets/me.jpeg" priority layout='fill' objectFit='cover' alt="Avatar" /> 
                        </div> 

                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="mb-5 text-3xl md:text-4xl leading-tight md:mb-10">Transforming ideas into code,<br />
                            <span className="text-secondary">one innovation at a time</span></h1>
                        <p className="max-w-sm  mb-10 text-md md:max-w-2xl md:mx-0 md:mb-16 md:text-xl">
                        As a versatile Full Stack Developer, my expertise covers both frontend and backend development. I specialize in crafting seamless solutions, ensuring a versatile and user-friendly digital experience
                        </p>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            <a href="/routes/works" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            View Projects
                            </a>
                            <a href="/cv/curriculo.pdf" download="juan_pablo_valencia_cv.pdf" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                            View CV
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
