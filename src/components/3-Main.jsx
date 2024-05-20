import { useState } from "react";
import { myProjects } from './../myProject'
import { motion, AnimatePresence } from "framer-motion"



function Main() {

    const [currenActive, setcurrenActive] = useState('all')
    const [arr, setarr] = useState(myProjects)

    const handleClick = (buttonCat) => {
        setcurrenActive(buttonCat)
        const newArr = myProjects.filter((item) => {
            return item.category === buttonCat;
        });
        setarr(newArr)
    }
    return (
        <main className='flex flex-col sm:flex-row  gap-[2.64rem] sm:items-start' >
            <section className="left-section flex flex-row flex-wrap justify-center sm:flex-col gap-[10px]">
                <button onClick={() => {
                    setcurrenActive('all')
                    setarr(myProjects)
                }} className={`${currenActive === 'all' ? 'active' : null} w-[7rem] py-[0.8rem] text-[0.9rem] sm:w-[11rem] sm:py-[0.75rem] px-0 text-center sm:text-[1.05rem] capitalize opacity-50 transition-[0.3s] rounded-md`}>all projects</button>
                <button onClick={() => {
                    handleClick('css')
                }}
                    className={`${currenActive === 'css' ? 'active' : null} w-[7rem] py-[0.8rem] text-[0.9rem] sm:w-[11rem]
                     sm:py-[0.75rem] px-0 text-center sm:text-[1.05rem] capitalize opacity-50 transition-[0.3s] rounded-md`}>HTML & CSS</button>
                <button onClick={() => {
                    handleClick('javascript')
                }}
                    className={`${currenActive === 'javascript' ? 'active' : null} w-[7rem] py-[0.8rem] text-[0.9rem] sm:w-[11rem]
                     sm:py-[0.75rem] px-0 text-center sm:text-[1.05rem] capitalize opacity-50 transition-[0.3s] rounded-md`}>Javascript</button>
                <button onClick={() => {
                    handleClick('tailwind')
                }}
                    className={`${currenActive === 'tailwind' ? 'active' : null} w-[7rem] py-[0.8rem] text-[0.9rem] sm:w-[11rem]
                     sm:py-[0.75rem] px-0 text-center sm:text-[0.95rem] capitalize opacity-50 transition-[0.3s] rounded-md`}>tailwind & bootstarb</button>
                <button onClick={() => {
                    handleClick('react')
                    // const smallArry = item.category.find((i) => {
                    //     return i === 'react'
                    // });
                    // console.log(smallArry)
                }}
                    className={`${currenActive === 'react' ? 'active' : null} w-[7rem] py-[0.8rem] text-[0.9rem] sm:w-[11rem]
                     sm:py-[0.75rem] px-0 text-center sm:text-[1.05rem] capitalize opacity-50 transition-[0.3s] rounded-md`}>React.js</button>
            </section>
            <section className="right-section flex flex-wrap gap-y-8 gap-x-4 justify-center">
                <AnimatePresence>
                    {arr.map((item, index) => {
                        return (
                            <motion.article
                                layout
                                initial={{ transform: 'scale(0)' }}
                                animate={{ transform: 'scale(1)' }}
                                transition={{ type: 'spring', damping: 10, stiffness: 50 }}
                                key={index} className="card w-[266px]">
                                <img src={`${item.imgPath}`} alt="photo" className="" />
                                <div className="box py-4 px-[0.4rem]">
                                    <h1 className="title font-bold capitalize">{item.title}</h1>
                                    <p className="sub-title text-[0.8rem] mt-[0.7rem] mb-[1.1rem]">{item.p}</p>
                                    <div className="flex justify-between">
                                        <div className="flex gap-[11px]">
                                            <a className='icon icon-link text-[1.2rem]' href={`${item.link}`}></a>
                                            <a className="icon icon-github text-[1.2rem]" href={`${item.gitHub}`}></a>
                                        </div>
                                        <a href="#" className="flex text-[0.9rem] mr-3">
                                            more
                                            <span className='icon-arrow_forward self-center'></span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        )
                    })}
                </AnimatePresence>
            </section>
        </main>
    )
}

export default Main