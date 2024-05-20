import Lottie from 'react-lottie-player';
import developerAnimation from './../../public/animation/developer-Animation.json'
import { motion } from "framer-motion"
import img from '../../public/imegs/imge.png'



function Hero() {



    return (
        <section className="hero-section flex items-center mt-12">
            <div className="left flex-grow">
                <div className="avatar flex items-end min-h-[88px]">
                    <motion.img
                        initial={{ transform: 'scale(0)' }}
                        animate={{ transform: 'scale(1.08)' }}
                        transition={{ damping: 6, type: 'spring', stiffness: 100 }}
                        className=" w-[88px] rounded-full border border-solid border-[#ff8c00] p-[1px] mr-[0.6rem]" src={img} alt="" />
                    <span className="icon-verified verified inline-block text-[1.1rem] mb-[0.3rem] "></span>
                </div>
                <h1 className="text-[2.85rem] font-bold my-6 mx-0 leading-[3.3rem]">Software designer, founder, and amateur astronaut. </h1>
                <p className=" text-[0.9rem] leading-[1.65rem] mb-8">I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
                <div className="icons flex text-[1.3rem] gap-6">
                    <div className="icon hover:text-[1.4rem] transition-[0.3s] icon-social-twitter"></div>
                    <div className="icon hover:text-[1.4rem] transtion icon-linkedin-square"></div>
                    <div className="icon hover:text-[1.4rem] transtion icon-github"></div>
                    <div className="icon hover:text-[1.4rem] transtion icon-instagram"></div>
                </div>
            </div>
            <div className="right w-full translate-x-[100px] translate-y-[55px] hidden xl:block">
                <Lottie
                    loop
                    animationData={developerAnimation}
                    play
                    speed={1}
                />
            </div>
        </section>
    )
}

export default Hero