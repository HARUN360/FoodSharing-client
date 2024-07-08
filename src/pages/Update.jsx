import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const navigate = useNavigate();
    const food = useLoaderData();
    const  {_id, foodname, foodphoto, ExpiredDate, notes, quantity, location, name, email, userphoto, } = food;
    console.log(foodname);
    


    const updateFood = e => {
        e.preventDefault()
        const form = e.target;
        const foodname = form.foodname.value;
        const foodphoto = form.foodphoto.value;
        const location = form.location.value;
        const ExpiredDate = form.ExpiredDate.value;
        const notes = form.notes.value;
        const quantity = form.quantity.value;
        const name = form.name.value;
        const email = form.name.value;
        const userPhoto = form.userphoto.value;
        const updedeFoods = { foodname, foodphoto, ExpiredDate, notes, quantity, location, name, email, userPhoto, }
        console.log(updedeFoods);


      

          // send data to the server
          fetch(`https://assignment11-server-site-ecru.vercel.app/food/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updedeFoods)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Foods Information Updeted Succesfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
                // alert('success upded')
                navigate(location?.state ? location.state : '/manage')
            }
        })
    }
    


    return (
        <div>
        <div className="bg-[#E7EAEF] p-24 rounded-xl my-10">
            <h1 className="text-4xl font-bold text-black">Upded Food Food</h1>
            <form onSubmit={updateFood}>
                {/* foods */}
                <div className="md:flex gap-3 my-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-black text-2xl">Food Name</span>
                        </label>
                        <label className="input-gruop">
                            <input type="text" name="foodname" defaultValue={foodname} placeholder="Food Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-black text-2xl">Food Image</span>
                        </label>
                        <label className="input-gruop">
                            <input type="Category" name="foodphoto" defaultValue={foodphoto} placeholder="Enter your Food Image" className="input input-bordered w-full" required />
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
                            <input type="text" name="location" defaultValue={location} placeholder="Enter location" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-black text-2xl">Expired Date/Time</span>
                        </label>
                        <label className="input-gruop">
                            <input type="date" name="ExpiredDate" defaultValue={ExpiredDate} placeholder="Expired Date/Time" className="input input-bordered w-full" required />
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
                            <input type="text" name="notes" defaultValue={notes} placeholder="Additional Notes" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-black text-2xl">Food Quantity</span>
                        </label>
                        <label className="input-gruop">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Food Quantity" className="input input-bordered w-full" required />
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
                            <input type="text" name="name" defaultValue={name} placeholder="Donator Name" className="input input-bordered w-full"  disabled />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="text-black text-2xl">User email</span>
                        </label>
                        <label className="input-gruop">
                            <input type="email" name="email" defaultValue={email} placeholder="enter your email" className="input input-bordered w-full" disabled />
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
                            <input type="Category" name="userphoto" defaultValue={userphoto} placeholder="user photo url" className="input input-bordered w-full" disabled />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Upded Food" className="btn btn-outline btn-success w-full mt-4" />
            </form>
        </div>

    </div>
    );
};

export default Update;