import { ScaleLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <ScaleLoader size={100} color="#E23E31" ></ScaleLoader>
        </div>
    );
};

export default Loader;