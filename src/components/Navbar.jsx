import { useState } from "react";
import logo from '../../public/img/logo.svg';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }

    return ( 
        <div className="w-full max-w-[1400px] mx-auto">
            <div className={`flex justify-between items-center p-4 md:px-10 ${toggleMenu && 'bg-white shadow-sm'}`}>
                <img src={logo.src} alt="Qubly" className="w-[38px] md:w-[48px]"/>
                
                <div className="hidden md:block">
                    <ul className="flex flex-col sm:flex-row items-center">
                        {['About', 'Pricing', 'Contact Us', 'Login'].map((item, index) => (
                            <li key={index} className="text-black font-medium px-4 cursor-pointer">
                                {item}
                            </li>
                        ))}
                        <li>
                            <button className="rounded-full border text-secondary-200 hover:text-white border-secondary-200 hover:bg-secondary-200 py-1 px-7 transition ease-out duration-300">
                                <p>Get Started</p>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="md:hidden cursor-pointer" onClick={handleToggle}>
                    { !toggleMenu ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) }
                </div>
            </div>

            {toggleMenu && (
                <div className="md:hidden relative">
                    <ul className="flex flex-col animate-slide-in items-center fixed w-fit right-0 bg-white shadow-sm rounded-bl-xl pb-5 px-10">
                        {['About', 'Pricing', 'Contact Us', 'Login'].map((item, index) => (
                            <li key={index} className="text-black font-medium p-2 cursor-pointer">
                                {item}
                            </li>
                        ))}
                        <li className="p-2 group cursor-pointer">
                            <button className="rounded-full border border-secondary-200 py-1 px-7 group-hover:bg-secondary-200 transition ease-out duration-300">
                                <p className="text-secondary-200 group-hover:text-white">Get Started</p>
                            </button>
                        </li>
                    </ul>
                </div>
            )}

        </div>
     );
}
 
export default Navbar;