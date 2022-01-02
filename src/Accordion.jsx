import { useState } from "react";

const Accordion = ({heading, desc}) => {
    const [isActive, setIsActive] = useState(false);

    return (
       <>
          <div className="flex flex-col items-center justify-center mt-8">
           <div onClick={() => setIsActive(!isActive)} className="flex justify-between max-w-sm bg-slate-500 p-4 w-80 sm:w-96 cursor-pointer font-semibold text-xl">
               {heading}
               <span className="font-semibold text-2xl"> {isActive ? "-" : "+"} </span>
           </div>

            {
                isActive ? (
                    <div className="p-4 bg-zinc-400 w-80 sm:w-96 font-semibold text-xl">
                        {desc}
                    </div>
                ) : ""
            }

          </div>  
       </>
              
      
    )
}

export default Accordion