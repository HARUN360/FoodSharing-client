import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import memeber1 from '../assets/member1.png'
import memebe2 from '../assets/member2.png'
import memeber3 from '../assets/member3.png'
import memeber4 from '../assets/member4.png'
import { Typewriter } from "react-simple-typewriter";
const TeamSection = () => {
    return (
        <div>
            <h1 className='text-2xl md:text-5xl text-center font-bold md:mb-4'>
                            {' '}
                            <span className=''>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Team Part!', 'Team Part!', 'Team Part!', 'Team Part!']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
            </h1>
          <div className="hero rounded-xl  my-10" style={{backgroundImage: 'url(https://i.ibb.co/HgxWn9T/team.png)'}}>
        <div className="hero-overlay rounded-xl bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl py-10">
            <h1 className="mb-5 text-5xl font-bold">Meet the team section</h1>
            <p className="mb-5">Dedicated to culinary excellence, our team crafts delectable dishes with passion and precision, ensuring every bite is a delightful experience for our guests</p>
           <div className='grid  grid-cols-2 lg:grid-cols-4 gap-4'>
              <div>
                <img src={memeber1} alt="" />
                <p className="font-bold mr-10 md:mr-[140px] lg:mr-0">Gias uddin</p>
                <p className="mr-10 md:mr-[140px] lg:mr-0">Food Expert</p>
                <p className="flex gap-2 text-[#F85559] mx-8 mt-2"><span><FaFacebook /></span><span><FaTwitter /></span> <span><FaLinkedin /></span></p>
              </div>
              <div>
                <img src={memebe2} alt="" />
                <p className="font-bold mr-10 md:mr-[140px] lg:mr-0">Safia Chowdhury</p>
                <p className="mr-10 md:mr-[140px] lg:mr-0">Food Expert</p>
                <p className="flex gap-2 text-[#F85559] mx-8 mt-2"><span><FaFacebook /></span><span><FaTwitter /></span> <span><FaLinkedin /></span></p>
              </div>
              <div>
                <img src={memeber3} alt="" />
                <p className="font-bold mr-10 md:mr-[140px] lg:mr-0">linkon</p>
                <p className="mr-10 md:mr-[140px] lg:mr-0">Food Expert</p>
                <p className="flex gap-2 text-[#F85559] mx-8 mt-2"><span><FaFacebook /></span><span><FaTwitter /></span> <span><FaLinkedin /></span></p>
              </div>
              <div>
                <img src={memeber4} alt="" />
                <p className="font-bold mr-10 md:mr-[140px] lg:mr-0">Chaity</p>
                <p className="mr-10 md:mr-[140px] lg:mr-0">Food Expert</p>
                <p className="flex gap-2 text-[#F85559] mx-8 mt-2"><span><FaFacebook /></span><span><FaTwitter /></span> <span><FaLinkedin /></span></p>
              </div>
           
           </div>
          </div>
        </div>
          </div>
        </div>
    );
};

export default TeamSection;