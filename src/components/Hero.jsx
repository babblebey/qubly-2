import heroImg from '../img/hero.svg';

const Hero = () => {
    return ( 
        <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center px-4 md:px-10 pb-10 md:pb-36 mt-10 mb-28">
            <div className="w-full lg:w-6/12">
                <div className="rounded-full flex items-center justify-center bg-secondary-100 w-fit py-2 px-4 mb-2">
                    <svg id="edit-brightness" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path id="Path_603" data-name="Path 603" d="M13,6a.75.75,0,0,1-.75-.75,1.5,1.5,0,0,0-1.5-1.5.75.75,0,0,1,0-1.5,1.5,1.5,0,0,0,1.5-1.5.75.75,0,0,1,1.5,0,1.5,1.5,0,0,0,1.5,1.5.75.75,0,0,1,0,1.5,1.5,1.5,0,0,0-1.5,1.5A.75.75,0,0,1,13,6Z" fill="#722ed1"/>
                        <path id="Path_604" data-name="Path 604" d="M6,16a1,1,0,0,1-1-1,4,4,0,0,0-4-4A1,1,0,1,1,1,9,4,4,0,0,0,5,5,1,1,0,0,1,7,5a4,4,0,0,0,4,4,1,1,0,0,1,0,2,4,4,0,0,0-4,4,1,1,0,0,1-1,1Z" fill="#722ed1"/>
                    </svg>
                    <p className="ml-1 text-secondary-200 text-sm md:text-base">
                        v3.1 released. <a href="#" className="underline">Learn More</a>
                    </p>
                </div>
                <h1 className="font-bold text-primary-200 text-3xl leading-tight md:text-[50px]">
                    Your data with <br /> real-time analytics
                </h1>
                <p className="font-medium text-primary-100 text-[16px] w-full md:w-9/12">
                    Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail
                </p>
                <div className="mt-5">
                    <button className="rounded-full py-2 md:py-4 px-6 md:px-10 mr-3 mb-3 shadow-md hover:shadow-xl bg-secondary-200">
                        <p className="text-white">Start free trial</p>
                    </button>
                    <button className="rounded-full py-2 md:py-4 px-6 md:px-10 mb-3 bg-white hover:shadow-xl">
                        <p className="text-primary-200">Learn More</p>
                    </button>
                </div>
            </div>

            <div className="w-full lg:w-6/12">
                <img src={heroImg.src} alt="Hero" className="w-full"/>
            </div>
        </div>
     );
}
 
export default Hero;