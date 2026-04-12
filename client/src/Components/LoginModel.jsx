import React from 'react'
import { AnimatePresence, motion } from "motion/react"
import { SiGooglegemini } from 'react-icons/si'

const LoginModel = ({ open, onClose }) => {
    return (

        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center 
      bg-black/80 backdrop-blur-xl px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.88, opacity: 0, y: 60 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 40 }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className='relative w-full max-w-md p-[1px] rounded-3xl 
                        bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent'
                    >
                        <div className='relative rounded-3xl bg-[#0b0b0b] border border-white/10 
                        shadow-[0_30px_120px_rgba(0,0,0,0.8)] overflow-hidden'>

                            <motion.div
                                animate={{ opacity: [0.25, 0.4, 0.25] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className='absolute -top-32 -left-32 w-80 h-80 
                                bg-purple-500/30 blur-[140px]'
                            />
                            <motion.div
                                animate={{ opacity: [0.2, 0.35, 0.2] }}
                                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                                className='absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/25 blur-[140px]'
                            />

                            <button
                                onClick={onClose}
                                className='cursor-pointer absolute top-5 right-5 z-20 text-zinc-400 hover:text-white transition text-lg'
                            >
                                X
                            </button>

                            <div className='relative px-8 pt-14 pb-10 text-white flex flex-col items-center text-center'>
                                <h1 className='mb-6 px-4 py-1.5 rounded-full bg-white/5
  border border-white/10 text-xs text-zinc-300'>
                                    AI-powered website builder
                                </h1>

                                {/* ✅ FIX ONLY HERE */}
                                <h2 className='text-3xl font-semibold leading-tight mb-3 flex flex-col items-center'>
                                    <span>
                                        Welcome to
                                        <span className=' ml-2 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                                            GenWeb.Ai
                                        </span>
                                    </span>
                                </h2>

                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="group relative w-full h-12 rounded-xl 
  bg-white text-black font-semibold shadow-lg 
  flex items-center justify-center gap-3
  hover:shadow-2xl transition-all duration-300 overflow-hidden mt-3"
                                >
                                    {/* Hover Glow */}
                                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 
  bg-gradient-to-r from-purple-500/10 to-blue-500/10 transition" />

                                    {/* Google Icon */}
                                    <svg
                                        className="w-5 h-5 z-10"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                    >
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                                    </svg>

                                    {/* Text */}
                                    <span className="z-10">Continue with Google</span>
                                </motion.button>

                            </div>

                        </div>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default LoginModel



//2:03:10