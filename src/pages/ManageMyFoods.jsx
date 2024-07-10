import { useContext, useEffect, useState } from "react";
import ManageSinglePage from "../components/ManageSinglePage";
import { AuthContext } from "../providers/AuthProvider";
import { Typewriter } from "react-simple-typewriter";


const ManageMyFoods = () => {
    const {user} = useContext(AuthContext) || {};
    const [items, setItem] = useState([])
    // const [bookings, setBookings] = useState([]);
  
    useEffect(()=> {
        fetch(`https://food-sharing-self.vercel.app/request/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setItem(data)
        })
    }, [user]);

    const handleDelete = id => {
        const proceed = confirm('Are You Sure your want to delete');
        if(proceed){
            fetch(`https://food-sharing-self.vercel.app/food/${id}`, {
                method: 'DELETE',

            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted succesfull');
                    const remaingin = items.filter(fruits => fruits._id !== id)
                    setItem(remaingin)
                }
            })
        }
    }
    return (
      
        <div className="my-10">
              <h1 className='text-2xl md:text-5xl text-center font-bold md:mb-4'>
                            {' '}
                            <span className=''>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Your Foods Here!', 'Your Foods Here!', 'Your Foods Here!', 'Your Foods Here!']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
            </h1>
            <div className="overflow-x-auto bg-gray-300 rounded-xl">
                <table className="table">
                    {/* head */}
                    <thead className="uppercase">
                        <tr>
                            <th>Delete</th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Expire Date</th>
                            <th>quantity</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            items.map(item => <ManageSinglePage 
                                key={item._id} 
                                item={item} 
                                handleDelete={handleDelete} 
                                ></ManageSinglePage>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ManageMyFoods;