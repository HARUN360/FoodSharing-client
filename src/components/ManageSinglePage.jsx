
import { Link } from "react-router-dom";


const ManageSinglePage = ({item, handleDelete}) => {
    const {_id, foodname, foodphoto, ExpiredDate, notes, quantity, location, name, email, userphoto, } = item;
    console.log(foodphoto);
    return (
        // <div className="card  bg-[#E7EAEF] shadow-xl">
        // <figure><img src={foodphoto} className="" alt="tourist" /></figure>
        // <div className="card-body">
        //     <h2 className="card-title text-4xl font-bold text-black">
        //         {foodname}

        //     </h2>
        //     <div className="flex items-center gap-2 text-xl text-black font-semibold">
        //         <p className="flex items-center gap-2">  <span>Location:</span> <span className="text-[#e66940]"> <CiLocationOn /></span> <span>{location}</span></p>
        //         <p>Quantity: {quantity}</p>
        //     </div>
        //     <p className="text-black">{notes}</p>
        //     <p>{ExpiredDate}</p>
        //     <hr />
        //     <div className="flex items-center gap-4">
        //         <img src={userphoto} alt="" className="w-20 rounded-full" />
        //         <p>{name}</p>
        //         <hr />
        //     </div>
        //     <div className="card-actions justify-center">
        //     <button className="btn btn-success">delete</button>
        //     <button className="btn btn-success">Update</button>
        //     </div>
        // </div>
        // </div>
        <tr>
        <th>
            <button onClick={()=> handleDelete(_id)} className="btn  btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </th>
        <td>
            <div className="flex items-center gap-3">

                <div className="rounded w-24 h-24">
                {foodphoto && <img src={foodphoto} alt="Avatar Tailwind CSS Component" />}
                </div>


            </div>
        </td>
        <td>
            {foodname}
        </td>
        <td>{ExpiredDate}</td>
        <td>{quantity}</td>
        <th>
           {/* <button>Update</button> */}
           <Link to={`/updated/${_id}`} className="btn">Updated</Link>
        </th>
    </tr>

    );
};

export default ManageSinglePage;