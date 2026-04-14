import { ArrowLeft, Plus } from 'lucide-react'
import React from 'react'
import { SiGooglegemini } from 'react-icons/si';
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from "motion/react"

const Generate = () => {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen bg-linear-to-br from-[#050505] 
    via-[#0b0b0b] to-[#050505] text-white'>

            <div className='sticky top-0 z-40 backdrop-blur-xl bg-black/50
            border-b border-white/10'>
                <div className='max-w-7xl mx-auto px-6 h-16 flex items-center
                justify-between'>
                    <div className='flex items-center gap-4'>
                        <button
                            onClick={() => navigate(-1)}
                            className='cursor-pointer p-2 rounded-lg
                        hover:bg-white/10 transition'>
                            <ArrowLeft size={16} />
                        </button>
                        <h1 className='text-lg font-semibold'>
                            <div className="flex items-center gap-2 text-2xl font-bold">
                                <SiGooglegemini className="text-indigo-400 text-3xl" />
                                <div>
                                    <span className="text-white">GenWeb</span>
                                    <span className="text-indigo-400">.Ai</span>
                                </div>
                            </div>
                        </h1>
                    </div>

                </div>
            </div>

            <div className='max-w-6xl mx-auto px-6 py-16'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-center mb-16'
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
                        Build Websites with <br />
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
  bg-clip-text text-transparent">
                            Real AI Power
                        </span>
                    </h1>
                    <p className='text-zinc-400 max-w-2xl mx-auto'>
                        This process may take several minutes.
                        GenWen.Ai focuses on quality, not shortcuts.
                    </p>
                </motion.div>

                <div className="mb-6">
                    <h1 className="text-lg md:text-xl font-semibold mb-3 text-white">
                        Describe your website
                    </h1>

                    <div className="relative group">
                        <textarea
                            placeholder="Describe your website in detail..."
                            className="w-full h-56 p-5 rounded-2xl 
      bg-white/5 border border-white/10 backdrop-blur-xl
      text-sm text-gray-200 placeholder-gray-500 
      outline-none resize-none leading-relaxed

      focus:border-white/20 focus:ring-2 focus:ring-indigo-500/30
      transition-all duration-200"
                        />

                        {/* subtle glow on focus */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-focus-within:opacity-100 
    bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 
    blur-xl transition pointer-events-none"></div>
                    </div>
                </div>

                <div className="flex justify-center  ">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl 
    bg-gradient-to-r from-indigo-500 to-purple-600 
    text-white font-semibold text-sm shadow-lg 
    hover:shadow-xl transition-all duration-200"
                    >
                        <Plus size={18} />
                        Generate Website
                    </motion.button>
                </div>

            </div>

        </div>
    )
}

export default Generate

//4:20:50