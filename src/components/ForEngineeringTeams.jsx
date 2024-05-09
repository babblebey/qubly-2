import stack from '../img/engnr-team.svg'

const ForEngineeringTeams = () => {
    return ( 
        <div className="w-full max-w-[1400px] mx-auto my-10 md:my-24">
            <div className="w-full flex flex-col md:flex-row md:w-11/12 m-auto justify-center items-center">
                <div className="w-full md:w-6/12 text-center md:text-left p-2 md:p-10">
                    <div className="flex items-center rounded-full bg-secondary-100 w-fit text-secondary-200 font-medium text-[13px] md:text-sm py-2 px-4 mx-auto md:mx-0">
                        <svg className="w-5 md:w-6 mr-3" xmlns="http://www.w3.org/2000/svg" width="23.226" height="24" viewBox="0 0 23.226 24">
                            <g id="compass" transform="translate(-1)">
                                <g id="Group_28" data-name="Group 28" transform="translate(1)">
                                <path id="Path_681" data-name="Path 681" d="M15.645,2.4V0H14.1V2.4a3.871,3.871,0,1,0,1.548,0Z" transform="translate(-3.258)" fill="#722ed1"/>
                                <path id="Path_682" data-name="Path 682" d="M20.8,19.773h1.881V18.225H20.021l-3.047-6.087a5.438,5.438,0,0,1-2.529,1.89l2.1,4.2H13.387V16.676H11.839v1.548H8.682l2.1-4.2a5.434,5.434,0,0,1-2.529-1.89L5.2,18.225H2.548v1.548H4.429L1,26.622a3.979,3.979,0,0,0,4.524-2.081l2.384-4.767h3.931v1.548h1.548V19.773h3.931L19.7,24.541a3.979,3.979,0,0,0,4.524,2.081Z" transform="translate(-1 -2.741)" fill="#722ed1"/>
                                </g>
                            </g>
                        </svg>

                        <p>For Engineering Teams</p>
                    </div>
                    <h2 className="font-bold text-2xl md:text-[36px] text-primary-200 leading-tight my-4">
                        Data-driven <br />
                        pipelines in minutes
                    </h2>
                    <p className="text-primary-100 px-4 md:px-0">
                        Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.                    
                    </p>
                </div>

                <div className="w-full md:w-6/12">
                    <img src={stack.src} alt="For Product Teams" className="m-auto md:m-0 md:w-[100%]"/>
                </div>
            </div>
        </div>
     );
}
 
export default ForEngineeringTeams;