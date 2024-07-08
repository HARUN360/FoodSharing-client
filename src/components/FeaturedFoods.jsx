import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";


const FeaturedFoods = ({food}) => {
    const  {_id, foodname, foodphoto, ExpiredDate, notes, quantity, location, name, email, userphoto, } = food;
    return (
        <div className="card  bg-[#E7EAEF] shadow-xl">
        <figure><img src={foodphoto} className="" alt="tourist" /></figure>
        <div className="card-body">
            <h2 className="card-title text-4xl font-bold text-black">
                {foodname}

            </h2>
            <div className="flex items-center gap-2 text-xl text-black font-semibold">
                <p className="flex items-center gap-2">  <span>Location:</span> <span className="text-[#e66940]"> <CiLocationOn /></span> <span>{location}</span></p>
                <p>Quantity: {quantity}</p>
            </div>
            <p className="text-black">{notes}</p>
            <p>{ExpiredDate}</p>
            <hr />
            <div className="flex items-center gap-4">
                <img src={userphoto} alt="" className="w-20 rounded-full" />
                <p>{name}</p>
                <hr />
            </div>
            <div className="card-actions justify-center">
            <Link to={`/viewdetails/${_id}`}><button className="btn btn-success mt-2">View Details</button></Link>
            </div>
        </div>
        </div>
    );
};

export default FeaturedFoods;