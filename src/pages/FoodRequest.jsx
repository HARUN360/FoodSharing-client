import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import SingleRequst from "../components/SingleRequst";
import { Helmet } from "react-helmet-async";
import { useQuery  } from "@tanstack/react-query";
import axios from "axios";


const FoodRequest = () => {
    const { user } = useContext(AuthContext) || {};
    // const [items, setItem] = useState([]);


    const {data, isLoadin, refetch, isError, Error } = useQuery({
        queryFn: async () => {
           const tanStackValue =await axios.get(`https://assignment11-server-site-ecru.vercel.app/requist1/${user?.email}`)
           console.log(tanStackValue);
           return tanStackValue.data;
              
           
        },
        querykey: ['true'],
        enabled: !!user?.email
    })

console.log(data);

   




    return (
        <div className="my-10 bg-gray-300 rounded-xl">
             <Helmet>
                <title>FoodSharing/FoodRequsts</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="uppercase">
                        <tr>
                            <th>Donar Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                           
                        </tr>
                      
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map(item => <SingleRequst
                                key={item._id}
                                item={item}

                            ></SingleRequst>)
                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default FoodRequest;