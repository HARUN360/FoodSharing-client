
import Slider from "../components/Slider";
import FeaturedFoods from "../components/FeaturedFoods";
import TeamSection from "../components/TeamSection";
import About from "../components/About";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Home = () => {
 
    const [items, setItem] = useState([])

  
                 useEffect(()=> {
                    fetch(`https://food-sharing-self.vercel.app/food`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            setItem(data)
                        })
                }, []);
                console.log(items);
    return (
        <div>
              <Helmet>
                <title>FoodSharing</title>
            </Helmet>
            <Slider></Slider>
            <About></About>
            <div className="my-10">
                <h1 className='text-2xl md:text-5xl text-center font-bold md:mb-4'>
                    {' '}
                    <span className=''>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Featured Foods!', 'Featured Foods!', 'Featured Foods!', 'Featured Foods!']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </span>
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    {
                        items.slice(0, 6).map(food => <FeaturedFoods key={food._id} food={food}></FeaturedFoods>)
                    }
                </div>
                <div className="text-center my-6"><Link to='/availablefoods' className="btn btn-success p-4">Show All</Link></div>
            </div>
            <TeamSection></TeamSection>
        </div>
    );
};

export default Home;