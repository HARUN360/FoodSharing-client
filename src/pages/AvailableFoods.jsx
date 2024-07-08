
import { Helmet } from "react-helmet-async";
import SingleAvailableFood from "../components/SingleAvailableFood";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useNavigation } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";




const AvailableFoods = () => {
    const [search, setSearch] = useState('')
    const [asc, setAsc] = useState(true)
    const [items, setItem] = useState([])
    const [count, setCount] = useState(false)
    const navigation = useNavigation();

    useEffect(() => {

        // fetch(`https://assignment11-server-site-ecru.vercel.app/food`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     setItem(data)
        // })
        axios.get(`https://assignment11-server-site-ecru.vercel.app/food?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
            .then(response => {
                console.log(response.data);
                setItem(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [asc, search]);


    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        console.log(searchText);
        setSearch(searchText)
    }


    if (navigation.state === 'loading') return <Loader></Loader>
    console.log(items);



    return (
        <div>
            <Helmet>
                <title>FoodSharing/AvailableFoods</title>
            </Helmet>
            {/* <h1 className="text-center text-4xl font-bold">Available Foods Here</h1> */}
            <h1 className='text-2xl md:text-5xl text-center font-bold md:mb-4'>
                {' '}
                <span className=''>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Available Foods Here!', 'Available Foods Here!', 'Available Foods Here!', 'Available Foods Here!']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                </span>
            </h1>

            <div className="bg-red-400 w-[320px] p-2 rounded-xl ml-2  inline-block">
                <form onSubmit={handleSearch}>
                    <input type="text" name="search" placeholder="Search Your FoodName" className="py-3 px-2 rounded-md mr-2" />
                    <input type="submit" value="Search" className="btn" />
                </form>
            </div>


            <button onClick={() => setAsc(!asc)} className="btn text-lg h-[60px] text-center px-2 ml-2 md:ml-6 bg-red-400">{asc ? ' Expiry date is near' : ' Expiry date is long'}</button>






            <div className="hidden md:block text-right ">
                <p className="text-2xl inline-block text-black">Changed Layout </p>
                <button onClick={() => setCount(false)} className="btn btn-success mx-2">small</button>
                <button onClick={() => setCount(true)} className="btn btn-success ">large</button>
            </div>

            <div className={`grid grid-cols-1 ${count === true ? 'md:grid-cols-2' : 'md:grid-cols-3 text-lg'}  gap-4 my-6`}>
                {
                    items.map(fd => <SingleAvailableFood key={fd._id} fd={fd} count={count}></SingleAvailableFood>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;



// https://github.com/ProgrammingHero1/car-doctor-server-with-search-sort