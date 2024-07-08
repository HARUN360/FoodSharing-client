import { Typewriter } from "react-simple-typewriter";


const About = () => {
    return (
        <div>
            <h1 className='text-2xl md:text-5xl text-center font-bold md:mb-4'>
                            {' '}
                            <span className=''>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['About Part!', 'About Part!', 'About Part!', 'About Part!']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
            </h1>
        <div className="hero rounded-lg bg-gray-200">
        <div className="hero-content flex-col lg:flex-row">
         <div className="w-1/2 lg:w-full">
         <img src="https://i.ibb.co/2FfX0Gq/ab.jpg" className="w-full rounded-lg " />
         </div>
          <div className="w-1/2 lg:w-full">
            <h1 className="text-5xl font-bold">Where Quality Meet Excellent Service.</h1>
            <p className="py-6">Its the perfect dining experience where every dish is crafted with fresh, high-quality Experience quick and efficient service that ensures your food is servead fresh Its the dining experience where every dish is crafted with fresh, high-quality ingredients.</p>
            <button className="btn btn-primary">More About Us</button>
          </div>
        </div>
      </div>
      </div>
    );
};

export default About;