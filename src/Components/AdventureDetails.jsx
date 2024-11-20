
import Navbar from "./Navbar";
import { useLoaderData } from "react-router-dom";


const AdventureDetails = ({params}) => {
console.log(params)
    const data = useLoaderData();

    console.log(data)

    return (
        <div className="bg-green-200">
          <Navbar></Navbar>
            <div className="card bg-base-100 w-1/2 h-[400px] mx-auto justify-center shadow-xl">
  <div className="px-6 pt-6 object-cover overflow-hidden">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl w-full h-full object-fill" />
  </div>
  <div className="card-body py-4 items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <div className="card-actions">
      <button className="btn btn-primary">Talk With Expert</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AdventureDetails;