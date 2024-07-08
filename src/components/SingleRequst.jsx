
// import { Link } from "react-router-dom";


const SingleRequst = ({ item }) => {
    const { foodname, foodphoto, ExpiredDate,currentdata, notes, quantity, location, name, email, userphoto, } = item;
    console.log(foodphoto);
    return (
        <tr>
      
        <td>
          {name}
        </td>
        <td>
            {location}
        </td>
        <td>{ExpiredDate}</td>
        <td>{currentdata}</td>
    </tr>
    );
};

export default SingleRequst;