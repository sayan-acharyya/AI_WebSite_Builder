import { ArrowLeft, Plus } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from "motion/react"
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const navigate = useNavigate();
    const { userData } = useSelector(state => state.user);


    return (
        <div className='min-h-screen bg-[#050505] text-white'>
            <div className='sticky top-0 z-40 backdrop-blur-xl bg-black/50
            border-b border-white/10'>
                <div className='max-w-7xl mx-auto px-6 h-16 flex items-center
                justify-between'>
                    <div className='flex items-center gap-4'>
                        <button
                            onClick={() => navigate('/')}
                            className='cursor-pointer p-2 rounded-lg
                        hover:bg-white/10 transition'>
                            <ArrowLeft size={16} />
                        </button>
                        <h1 className='text-lg font-semibold'>
                            Dashboard
                        </h1>
                    </div>
                    <button
                        onClick={() => navigate("/generate")}
                        className="group relative px-5 py-2.5 flex items-center gap-2 rounded-xl 
bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold 
shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200">

                        <Plus
                            size={18}
                            className="transition-transform duration-200 group-hover:rotate-90"
                        />

                        <span>New Website</span>

                        {/* subtle glow */}
                        <span className="absolute inset-0 rounded-xl bg-white opacity-0 
  group-hover:opacity-10 transition"></span>

                    </button>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-6 py-10'>
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mb-10'
                >
                    <p className='text-sm text-zinc-400 mb-1'>Welcome Back</p>
                    <h1 className='text-3xl font-bold'>{userData.name}</h1>

                </motion.div>
            </div>
        </div>
    )
}

export default Dashboard