
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from '../../public/animation.json';

const Error = () => {
    return (
        <div>
          
                  
                    <Lottie animationData={animationData} loop={true} className="mt-1 h-[200px] md:h-[500px] w-full" />
                    <div className="text-center">
                  <p className="text xl md:text-2xl font-semibold">Sorry, we could not find this page.</p>
                    <Link  to='/' className="btn  btn-active btn-secondary text-lg md:text-xl my-4"><button>Back to homepage</button></Link>
                  </div>
                    
          
    </div>
    );
};

export default Error;