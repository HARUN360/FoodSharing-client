import { useContext } from "react";
import { AuthContext } from './../providers/AuthProvider';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";




const AddFood = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const handleAddFood = e => {
        e.preventDefault()
        const form = e.target;
        const foodname = form.foodname.value;
        const foodphoto = form.foodphoto.value;
        const location = form.location.value;
        const ExpiredDate = form.ExpiredDate.value;
        const notes = form.notes.value;
        const quantity = form.quantity.value;
        const name = user.displayName;
        const email = user.email;
        const userphoto = user.photoURL;
        const newTouristSpot = { foodname, foodphoto, ExpiredDate, notes, quantity, location, name, email, userphoto, }
        console.log(newTouristSpot);


        // send data to the server
        fetch('https://food-sharing-self.vercel.app/food', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTouristSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log('this is information',data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Foods Added Succesfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }

   


    return (
        <div>
             <Helmet>
                <title>FoodSharing/AddFood</title>
            </Helmet>
            <div className="bg-[#E7EAEF] p-24 rounded-xl my-10">
                <h1 className="text-4xl font-bold text-black">Add Food</h1>
                <form onSubmit={handleAddFood}>
                    {/* foods */}
                    <div className="md:flex gap-3 my-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-black text-2xl">Food Name</span>
                            </label>
                            <label className="input-gruop">
                                <input type="text" name="foodname" placeholder="Food Name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-black text-2xl">Food Image</span>
                            </label>
                            <label className="input-gruop">
                                <input type="Category" name="foodphoto" placeholder="Enter your Food Image" className="input input-bordered w-full" required />
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
                                <input type="text" name="location" placeholder="Enter location" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-black text-2xl">Expired Date/Time</span>
                            </label>
                            <label className="input-gruop">
                                <input type="date" name="ExpiredDate" placeholder="Expired Date/Time" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>

                    {/* notes */}
                    <div className="md:flex gap-3 my-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-black text-2xl">Additional Notes</span>
                            </label>
                            <label className="input-gruop">
                                <input type="text" name="notes" placeholder="Additional Notes" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-black text-2xl">Food Quantity</span>
                            </label>
                            <label className="input-gruop">
                                <input type="text" name="quantity" placeholder="Food Quantity" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    {/* user */}
                    <div className="md:flex gap-3 my-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-black text-2xl">User Name</span>
                            </label>
                            <label className="input-gruop">
                                <input type="text" name="name" defaultValue={user?.displayName} placeholder="Donator Name" className="input input-bordered w-full"  disabled />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-black text-2xl">User email</span>
                            </label>
                            <label className="input-gruop">
                                <input type="email" name="email" defaultValue={user?.email} placeholder="enter your email" className="input input-bordered w-full" disabled />
                            </label>
                        </div>
                    </div>
                    {/* user photo */}
                    <div className="">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="text-black text-2xl"> User Photo Url</span>
                            </label>
                            <label className="input-gruop">
                                <input type="Category" name="userphoto" defaultValue={user?.photoURL} placeholder="user photo url" className="input input-bordered w-full" disabled />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add Food" className="btn btn-outline btn-success w-full mt-4" />
                </form>
            </div>

        </div>
    );
};

export default AddFood;