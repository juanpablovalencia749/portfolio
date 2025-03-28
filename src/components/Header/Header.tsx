"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialNetworks } from './dataHeader'

export function Header() {
    return (
        <div className='static w-full py-5 md:mt-10 md:py-0'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container justify-around mx-auto md:flex">
                    <Link href="/">
                        <h1 className="my-3 text-3xl md:text-4xl text-center text-white md:text-lef">Juan Pablo
                            <span className="text-secondary"> Valencia</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src }) => (
                            <Link key={src} href={src} target="_blank" className="transition-all duration-300 hover:text-secondary">
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
