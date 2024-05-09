import logo from '../img/logo2.svg';
import facebookIcon from '../icon/facebook.svg';
import twitterIcon from '../icon/twitter.svg';
import instagramIcon from '../icon/instagram.svg';

const Footer = () => {
    return ( 
        <div className="w-full max-w-[1400px] mx-auto my-10 md:my-24 px-4 md:px-10 pt-10 pb-5">
            <div className="flex flex-col-reverse md:flex-row justify-start items-start">
                <div className="w-full md:w-3/12 pr-5">
                    <img src={logo.src} alt="Qubly" className="mb-2 mx-auto md:mx-0 w-[70px]" />
                    <p className="text-sm text-primary-200 font-medium text-center md:text-left">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim
                    </p>

                    {/* Social Icons */}
                    <div className="flex mt-3 justify-center md:justify-start items-center">
                        <img src={facebookIcon.src} alt="Facebook" className="w-6 mx-4 md:mx-0 md:mr-4 cursor-pointer" />
                        <img src={twitterIcon.src} alt="Twitter" className="w-6 mx-4 md:mx-0 md:mr-4 cursor-pointer" />
                        <img src={instagramIcon.src} alt="Instagram" className="w-6 mx-4 md:mx-0 md:mr-4 cursor-pointer" />
                    </div>
                </div>
                <div className="hidden md:block w-2/12">
                    <h2 className="foot-title">
                        Product
                    </h2>
                    <ul className="text-sm font-medium">
                        {['Connections', 'Protocols', 'Personas', 'Integrations', 'Catalog', 'Pricing', 'Security', 'GDPR'].map((item, index) => (
                            <li key={index} className="my-2 cursor-pointer">
                                { item }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:block w-2/12">
                    <h2 className="foot-title">
                        For Developers
                    </h2>
                    <ul className="text-sm font-medium">
                        {['Docs', 'API', 'Open Source', 'Engineering Team'].map((item, index) => (
                            <li key={index} className="my-2 cursor-pointer">
                                { item }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=" hidden md:block w-2/12">
                    <h2 className="foot-title">
                        Company
                    </h2>
                    <ul className="text-sm font-medium">
                        {['Careers', 'Blog', 'Press'].map((item, index) => (
                            <li key={index} className="my-2 cursor-pointer">
                                { item }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:block w-2/12">
                    <h2 className="foot-title">
                        Support
                    </h2>
                    <ul className="text-sm font-medium">
                        {['Help Center', 'Contact Us', 'Security Bulletins', 'Documentation', 'Partner Portal'].map((item, index) => (
                            <li key={index} className="my-2 cursor-pointer">
                                { item }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-3/12">
                    <h2 className="foot-title">
                        Newsletter
                    </h2>
                    <div className="relative mb-10">
                        <input 
                            type="email" 
                            className="rounded p-3 outline-none shadow-lg border border-secondary-100 w-full"
                            placeholder="Email"
                        />
                        <svg className="absolute top-0 right-0 m-3 rounded-full" xmlns="http://www.w3.org/2000/svg" width="28.01" height="28.01" viewBox="0 0 28.01 28.01">
                            <path id="Icon_ionic-ios-send" data-name="Icon ionic-ios-send" d="M23.686,4.547,4.748,12.8a.434.434,0,0,0,.015.789l5.123,2.894a.826.826,0,0,0,.944-.093l10.1-8.708c.067-.057.227-.165.289-.1s-.036.222-.093.289l-8.739,9.843a.823.823,0,0,0-.083.985l3.348,5.37a.436.436,0,0,0,.784-.01L24.268,5.12A.434.434,0,0,0,23.686,4.547Z" transform="translate(14.005 -6.368) rotate(45)" fill="#722ed1"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between">
                <p className="basis-1/1 text-sm mt-5 italic font-medium text-center">
                    Coded with  
                    <span className="animate-pulse mx-1 text-red-600">
                        ❤
                    </span> 
                    using React & TailwindCSS by  
                    <a href="https://instagram.com/babblebey" className="text-secondary-200 underline mx-1" target="_blank">
                        @babblebey
                    </a>
                    from a UI Design by
                    <a href="https://dribbble.com/shots/10847367-Qubly-XD-Freebie" className="text-secondary-200 underline mx-1" target="_blank">
                        Rahul Rao
                    </a>
                </p>
                <p className="basis-1/1 text-sm mt-5 italic text-center">
                    <a href="https://github.com/babblebey/qubly" className="text-secondary-200 underline mx-1" target="_blank">
                        View Source on GitHub
                    </a>
                </p>
            </div>
        </div>
     );
}
 
export default Footer;