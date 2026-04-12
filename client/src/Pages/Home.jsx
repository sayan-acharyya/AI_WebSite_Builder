import React from 'react'
import { motion } from "motion/react"
import { SiGooglegemini } from "react-icons/si";
import { useState } from 'react';
import LoginModel from '../Components/LoginModel';

const Home = () => {
    const highlights = [
        "AI Generated Code",
        "Fully Responsive Layouts",
        "Production Ready Output"
    ]

    const [openLogin, setOpenLogin] = useState(false);


    return (
        <div className='relative min-h-screen bg-[#040404] text-white overflow-hidden'>
            <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}

                className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 
            border-b border-white/10 '
            >
                <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center '>
                    <div className="flex items-center gap-2 text-2xl font-bold">
                        <SiGooglegemini className="text-indigo-400 text-3xl" />
                        <div>
                            <span className="text-white">GenWeb</span>
                            <span className="text-indigo-400">.Ai</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className='hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer'>
                            pricing
                        </div>
                        <button className='px-4 py-2 rounded-lg border border-white/20
                        hover:bg-white/10 text-sm'
                            onClick={() => setOpenLogin(true)}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </motion.div>

            <section className="pt-44 pb-32 text-center bg-black">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
                >
                    Build Stunning Websites
                    <br />

                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        With AI
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='mt-8 max-w-2xl mx-auto text-zinc-400 text-lg'
                >
                    Describe your idea and let AI generate a modern,
                    responsive, production-ready website.
                </motion.p>


                <button className="px-10 py-4 mt-8 rounded-xl font-semibold text-white 
bg-gradient-to-r from-purple-500 to-blue-500 
hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] 
transition duration-300">
                    Get Started
                </button>

            </section>

            <section className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid md:grid-cols-3 gap-6">

                    {highlights.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 
        hover:bg-white/10 transition backdrop-blur-lg"
                        >
                            <h3 className="text-lg font-semibold text-white">
                                {h}
                            </h3>

                            <p className="text-sm text-zinc-400 mt-2">
                                {i === 0 && "Generate clean and optimized code instantly using AI."}
                                {i === 1 && "Websites that look perfect on all devices and screens."}
                                {i === 2 && "Production-ready output you can deploy immediately."}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </section>

            <footer className="border-t border-white/10 py-10 text-center text-zinc-400">
                <p>© {new Date().getFullYear()} GenWeb.Ai — Built with AI 🚀</p>
            </footer>

            {openLogin && <LoginModel open={openLogin} onClose={() => setOpenLogin(false)} />}

        </div>
    )
}

export default Home