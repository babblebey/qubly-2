import guilermo from '../img/guilermo.svg';
import clearbit from '../img/clearbit.svg';
import bigspring from '../img/bigspring.svg';
import tonkean from '../img/tonkean.svg';
import shake from '../img/shake.svg';
import mine from '../img/mine.svg';

const Testimonials = () => {
    return ( 
        <div className="bg-gradient-to-b from-[#F9F0FF] to-[#E2F1FF] -skew-y-6 mb-12 md:mb-28">
            <div className="w-full max-w-[1400px] mx-auto py-14 md:py-28 skew-y-6">
                <div className="w-full md:w-6/12 m-auto px-4 text-center">
                    <p className="font-medium text-primary-200 text-lg">
                        "What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"
                    </p>
                    <img src={guilermo.src} alt="Guilermo" className="mx-auto mt-6 mb-2"/>
                    <p className="text-primary-200 font-bold">
                        Guilemmor Cabane <br />
                        CTO @ BigSpring
                    </p>
                </div>

                <div className="w-full md:w-10/12 mx-auto mt-16 px-4">
                    <div className="h-[1px] w-full bg-[#DEC9FA]" />

                    <div className="flex flex-wrap lg:flex-nowrap justify-evenly md:justify-between items-center py-10 px-4">
                        <img src={tonkean.src} alt="Tonkean" className="basis-1/3 h-[25px] md:h-full mb-4 w-auto md:basis-1" />
                        <img src={bigspring.src} alt="BigSpring" className="basis-1/3 h-[25px] md:h-full mb-4 w-auto md:basis-1" />
                        <img src={clearbit.src} alt="Clearbit" className="basis-1/3 h-[25px] md:h-full mb-4 w-auto md:basis-1" />
                        <img src={mine.src} alt="Mine" className="basis-1/3 h-[25px] md:h-full mb-4 w-auto md:basis-1" />
                        <img src={shake.src} alt="Shake" className="basis-1/3 h-[25px] md:h-full mb-4 w-auto md:basis-1" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Testimonials;