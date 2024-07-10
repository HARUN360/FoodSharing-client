import { CiLocationOn } from "react-icons/ci";
import { useLoaderData, useNavigate } from "react-router-dom";
// import { Swal } from 'sweetalert2';


const ViewDetails = () => {
    const food = useLoaderData();
    const navigate = useNavigate();
    const { _id, foodname, foodphoto, ExpiredDate, notes, quantity, location, name, email, userphoto, } = food;


    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth() returns 0-indexed month
    const day = currentDate.getDate().toString().padStart(2, '0'); // PadStart ensures double digits

    // Format the date
    const formattedDate = `${year}-${month}-${day}`;

    const handleConform = e => {
        e.preventDefault()
        const form = e.target;
        const additonalnotes = form.additonalnotes.value;
        const currentdata = form.currentdata.value;
        const requitsUser = { food_id: _id, foodname, foodphoto, ExpiredDate, additonalnotes, currentdata, quantity, location, name, email, userphoto }
        console.log(requitsUser);


        // send data to the server
        fetch('https://food-sharing-self.vercel.app/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requitsUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('this is information', data);
                if (data.insertedId) {
                    fetch(`https://food-sharing-self.vercel.app/food/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                navigate(location?.state ? location.state : '/request')
                            }
                        })


                }

            })
    }

    return (
        <div>
            
          
            <div className="hero rounded-xl bg-[#7697d170] my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2"><img src={foodphoto} className="w-full rounded-lg " /></div>


                    <div className="w-full lg:w-1/2">
                    <h2 className="card-title text-4xl font-bold text-black my-4">
                        {foodname}

                    </h2>
                    <div className="flex items-center gap-2 text-xl text-black font-semibold">
                        <p className="flex items-center gap-2 ">  <span>Location:</span> <span className="text-[#e66940]"> <CiLocationOn /></span> <span>{location}</span></p>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <p className="text-black my-4">{notes}</p>
                    <p>{ExpiredDate}</p>
                    <hr />
                    <div className="flex items-center gap-4 my-4">
                        <img src={userphoto} alt="" className="w-20 rounded-full" />
                        <p>{name}</p>
                        <hr />
                    </div>



                         {/* modal */}
                    <div className="card-actions  justify-center">
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-wide bg-green-500" onClick={() => document.getElementById('my_modal_3').showModal()}> Food Request</button>
                        <dialog id="my_modal_3" className="modal ">
                            <div className="modal-box w-xl">
                                <form onSubmit={handleConform} method="dialog">
                                    <div className="md:flex gap-3 my-6">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="text-black text-2xl">Food Name</span>
                                            </label>
                                            <label className="input-gruop">
                                                <input type="text" name="foodname" defaultValue={foodname} placeholder="Food Name" className="input input-bordered w-full" disabled />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="text-black text-2xl">Food Image</span>
                                            </label>
                                            <label className="input-gruop">
                                                <input type="Category" name="foodphoto" defaultValue={foodphoto} placeholder="Enter your Food Image" className="input input-bordered w-full" disabled />
                                            </label>
                                        </div>
                                    </div>
                                    {/* Food id */}
                                    <div className="md:flex gap-3 my-6">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="text-black text-2xl">Food ID</span>
                                            </label>
                                            <label className="input-gruop">
                                                <input type="text" name="food_id" defaultValue={_id} placeholder="Enter location" className="input input-bordered w-full" disabled />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="text-black text-2xl">Food Donator email</span>
                                            </label>
                                            <label className="input-gruop">
                                                <input type="email" name="email" defaultValue={email} placeholder="your email" className="input input-bordered w-full" disabled />
                                            </label>
                                        </div>
                                    </div>
                                    {/* User Name */}
                                    <div className="md:flex gap-3 my-6">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="text-black text-2xl">Food Donator Name</span>
                                            </label>
                                            <label className="input-gruop">
                                                <input type="text" name="name" defaultValue={name} placeholder="Enter location" className="input input-bordered w-full" disabled />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="text-black text-2xl">Request Date</span>
                                            </label>
                                            <label className="input-gruop">
                                                <input type="text" name="currentdata" id="currentTime" defaultValue={formattedDate} className="input input-bordered w-full" disabled />
                                            </label>
                                        </div>
                                    </div>
                                    {/* location */}
                                    <div className="md:flex gap-3 my-6">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="text-black text-2xl">location</span>
                                            </label>
                                            <label className="input-gruop">
                                                <input type="text" name="location" defaultValue={location} placeholder="Enter location" className="input input-bordered w-full" disabled />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="text-black text-2xl">Expired Date/Time</span>
                                            </label>
                                            <label className="input-gruop">
                                                <input type="date" name="ExpiredDate" defaultValue={ExpiredDate} placeholder="Expired Date/Time" className="input input-bordered w-full" disabled />
                                            </label>
                                        </div>

                                    </div>
                                    <div className="md:flex gap-3 my-6">

                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="text-black text-2xl">Additional Notes</span>
                                            </label>
                                            <label className="input-gruop">
                                                <input type="text" name="additonalnotes" placeholder="Additional Notes" className="input input-bordered w-full" required />
                                            </label>
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="text-black text-2xl">Expired Date/Time</span>
                                            </label>
                                            <label className="input-gruop">
                                                <input type="date" name="ExpiredDate" defaultValue={ExpiredDate} placeholder="Expired Date/Time" className="input input-bordered w-full" disabled />
                                            </label>
                                        </div>

                                    </div>
                                  
                                    <button  className="btn btn-accent">Request Conform</button>
                                    <button type="button" onClick={ () => document.getElementById('my_modal_3').close()}  className="btn btn-accent ml-6">Close</button>
                                   
                                </form>

                            </div>
                        </dialog>
                    </div>

                    </div>





                </div>
            </div>
        </div>
    );
};

export default ViewDetails;