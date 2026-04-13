import React from 'react'
import { AnimatePresence, motion } from "motion/react"
import { SiGooglegemini } from "react-icons/si";
import { useState } from 'react';
import LoginModel from '../Components/LoginModel';
import { useDispatch, useSelector } from 'react-redux';
import { Coins, Plus } from "lucide-react"
import axios from 'axios';
import { serverUrl } from '../App';
import { setUserData } from '../redux/slices/userSlice';
import toast from 'react-hot-toast';
const Home = () => {
    const highlights = [
        "AI Generated Code",
        "Fully Responsive Layouts",
        "Production Ready Output"
    ]
    const dispatch = useDispatch();

    const [openLogin, setOpenLogin] = useState(false);

    const { userData } = useSelector(state => state.user);

    const [openProfile, setOpenProfile] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.get(`${serverUrl}/auth/logout`, { withCredentials: true });
            dispatch(setUserData(null));
            setOpenProfile(false);
            window.location.reload();
             
        } catch (error) {
            console.log(error);

        }
    }


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
                        {
                            userData && <div className='hidden  md:flex items-center gap-2 px-3 py-1.5 
                            rounded-full bg-white/5 border border-white/10 text-sm cursor-pointer
                            hover:bg-white/10 transition'>
                                <Coins size={14} className='text-yellow-400' />
                                <span className='text-zinc-300'>Credits</span>
                                <span>{userData.credits}</span>
                                <span className='font-semibold'><Plus size={14} /></span>
                            </div>
                        }

                        {!userData ?
                            <button className='px-4 py-2 rounded-lg border border-white/20
                        hover:bg-white/10 text-sm'
                                onClick={() => setOpenLogin(true)}
                            >
                                Get Started
                            </button> :
                            <div className='relative'>
                                <button
                                    onClick={() => setOpenProfile(!openProfile)}
                                    className='flex items-center'>
                                    <img
                                        src={userData.avatar || `https://ui-avatars.com/api/?name=${userData.name}`}
                                        alt="avatar"
                                        className="w-10 h-10 rounded-full object-cover border-white/20"
                                    />
                                </button>
                                <AnimatePresence>
                                    {openProfile && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.96 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute right-0 mt-4 w-64 z-50 rounded-2xl 
      bg-[#0b0b0b]/95 backdrop-blur-xl border border-white/10 
      shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden"
                                        >

                                            {/* 👤 User Info */}
                                            <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                                                <img
                                                    src={userData.avatar}
                                                    referrerPolicy="no-referrer"
                                                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                                                />
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-semibold">{userData.name}</p>
                                                    <p className="text-xs text-zinc-400 truncate">
                                                        {userData.email}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* 💰 Credits */}
                                            <div className="  px-4 py-3 flex items-center justify-between 
      border-b border-white/10 hover:bg-white/5 transition">
                                                <div className="flex items-center gap-2 text-sm text-zinc-300">
                                                    <Coins size={15} className="text-yellow-400" />
                                                    Credits
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-semibold">
                                                        {userData.credits}
                                                    </span>
                                                    <Plus size={14} className="text-indigo-400 cursor-pointer hover:scale-110 transition" />
                                                </div>
                                            </div>

                                            {/* 📊 Menu */}
                                            <div className="py-2">
                                                <button className="w-full px-4 py-2 text-left text-sm 
        text-zinc-300 hover:bg-white/5 hover:text-white transition">
                                                    Dashboard
                                                </button>


                                            </div>

                                            {/* 🚪 Logout */}
                                            <div className="border-t border-white/10">
                                                <button
                                                    onClick={handleLogout}
                                                    className="w-full px-4 py-3 text-left text-sm 
        text-red-400 hover:bg-red-500/10 transition">
                                                    Logout
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        }

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


                <button
                    onClick={() => setOpenLogin(true)}
                    className="px-10 py-4 mt-8 rounded-xl font-semibold text-white 
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

export default Home;



//3:31:03