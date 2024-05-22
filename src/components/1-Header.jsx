import { useEffect, useState } from "react"

function Header() {
    const [showModal, setshowModal] = useState(false)

    const [theme, settheme] = useState(localStorage.getItem('currentMode') ?? 'dark')
    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        } else {
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }
    }, [theme])


    return (
        <header className="flex items-center justify-between py-0 px-[2.4rem] mt-[1.2rem]">
            <button className="icon-menu flex justify-center items-center rounded-full md:hidden cursor-pointer" onClick={() => { setshowModal(true) }}></button>
            <div />
            <nav className=" hidden md:flex items-center py-3 px-8 rounded-full">
                <ul className="flex items-center justify-between gap-4 ">
                    <li><a href="#About" className=" opacity-90 text-[0.88rem] font-medium hover:opacity-100 hover:text-[0.9rem] ">About</a></li>
                    <li><a href="#Artices" className=" opacity-90 text-[0.88rem] font-medium hover:opacity-100 hover:text-[0.9rem] ">Artices</a></li>
                    <li><a href="#Projects" className=" opacity-90 text-[0.88rem] font-medium hover:opacity-100 hover:text-[0.9rem] ">Projects</a></li>
                    <li><a href="#Speaking" className=" opacity-90 text-[0.88rem] font-medium hover:opacity-100 hover:text-[0.9rem] ">Speaking</a></li>
                    <li><a href="#Contact" className=" opacity-90 text-[0.88rem] font-medium hover:opacity-100 hover:text-[0.9rem] ">Contact</a></li>
                </ul>
            </nav>
            <button onClick={() => {

                localStorage.setItem('currentMode', theme === 'dark' ? 'light' : 'dark')

                settheme(localStorage.getItem('currentMode'))


            }} className="modeIcons flex justify-center items-center rounded-full cursor-pointer active:scale-95">
                {theme === 'dark' ? <span className="icon-moon-o dark"></span> : <span className="icon-sun light text-[#ffa500]"></span>}
            </button>

            {showModal && (
                <div className="modal fixed inset-0 bg-[#292930e8] backdrop-blur-[4px] md:hidden z-50">
                    <ul className="w-[75%] mx-auto mt-8 rounded-2xl py-4 px-8">
                        <li className=" text-right pb-0 pt-[0.2rem] mb-[-1rem]">
                            <button className="icon-close cursor-pointer text-[1.3rem] hover:text-[1.5rem] transition-[0.3s]" onClick={() => { setshowModal(false) }} />
                        </li>
                        <li className="pb-[0.77rem] pt-[0.5rem]"><a href="#About" className=" text-base">About</a></li>
                        <li className="pb-[0.77rem] pt-[0.5rem]"><a href="#Artices" className=" text-base">Artices</a></li>
                        <li className="pb-[0.77rem] pt-[0.5rem]"><a href="#Projects" className=" text-base">Projects</a></li>
                        <li className="pb-[0.77rem] pt-[0.5rem]"><a href="#Speaking" className=" text-base">Speaking</a></li>
                        <li className="pb-[0.77rem] pt-[0.5rem]"><a href="#Contact" className=" text-base">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header