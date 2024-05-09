import accenture from '../img/accenture.svg';
import airbnb from '../img/airbnb.svg';
import sky from '../img/sky.svg';
import react from '../img/react.svg';
import googleBTN from '../img/google-btn.svg';

const Input = ({name, type, placeholder, value}) => (
    <input 
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className="border-[1.5px] border-[#8989A2] rounded bg-white text-primary-100 outline-none 
            font-medium w-full p-2 md:p-3 mb-4 focus-visible:border-secondary-200"
     />
);

const SignupForm = () => {
    return ( 
        <div className="w-full max-w-[1400px] mx-auto px-2 md:px-10 flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-6/12 text-center mb-14 lg:mb-0">
                <h2 className="font-bold text-2xl md:text-[36px] text-primary-200 leading-tight mb-5 md:mb-10">
                    See why the world's best <br className="hidden md:block"/>
                    companies use Qubly to <br className="hidden md:block"/> 
                    become truly data-driven.
                </h2>
                <div className="flex w-10/12 m-auto items-center justify-evenly">
                    <div className="h-[1px] w-3/12 md:w-4/12 bg-primary-100" />
                    <p className="w-6/12 md:w-fit font-medium text-primary-100">
                        Trusted by
                    </p>
                    <div className="h-[1px] w-3/12 md:w-4/12 bg-primary-100" />
                </div>
                <div className="w-full md:w-10/12 m-auto flex flex-wrap justify-evenly items-center">
                    <img src={accenture.src} alt="Accenture" className="max-h-6 md:max-h-10 basis-1/2 my-2 md:my-6" />
                    <img src={react.src} alt="React" className="max-h-12 md:max-h-20 basis-1/2 my-2 md:my-6" />
                    <img src={airbnb.src} alt="AirBnB" className="max-h-6 md:max-h-10 basis-1/2 my-2 md:my-6" />
                    <img src={sky.src} alt="Sky" className="max-h-6 md:max-h-10 basis-1/2 my-2 md:my-6" />
                </div>
            </div>

            <div className="w-full lg:w-6/12 p-1 md:p-2">
                <div className="h-full w-full bg-secondary-100 rounded-md">
                    <div className="bg-white w-11/12 md:w-10/12 m-auto px-4 md:px-10 pb-8 relative -top-10 border border-secondary-100 shadow-lg rounded-md">
                        <h2 className="text-primary-200 font-bold text-xl md:text-[28px] text-center my-4 md:my-8">
                            Sign Up
                        </h2>

                        <Input type={"email"} name={"email"} placeholder={"Your primary email"} onChange={() => {}} />
                        <Input type={"password"} name={"password"} placeholder={"Enter password"} onChange={() => {}} />
                        <Input type={"password"} name={"retypePassword"} placeholder={"Re-type password"} onChange={() => {}} />
                        <button 
                            className="w-full p-3 bg-secondary-200 rounded shadow-sm hover:shadow-xl transition ease-out duration-300"
                            onClick={() => {}}
                        >
                            <p className="text-white">
                                Start your free trial
                            </p>
                        </button>

                        <p className="text-center my-3 md:my-5 font-medium text-primary-200">OR</p>

                        <div className="cursor-pointer w-full md:w-[50%] m-auto">
                           <img src={googleBTN.src} className="w-full" /> 
                        </div>

                        <div className="h-[1px] w-full bg-[#8989A2] my-6" />

                        <p className="text-center text-primary-100 text-sm md:text-base">
                            Already have an account? 
                            <a href="#" className="underline text-blue-700 ml-2">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignupForm;