import { Link } from "react-router-dom";

const AdventureCard = (props) => {
  const { Image, Title, EcoFriendlyFeatures,id } = props.data;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={Image} alt="" className="h-48 p-4 w-full" />
        </figure>
        <div className="items-center text-center space-y-2">
          <h2 className="font-bold text-xl mt-4">{Title}</h2>
          <p className="text-sm text-gray-500">{EcoFriendlyFeatures}</p>
          <div className="pb-4">
            <Link to={`/adventuredetails/${id}`}>
              <button className="btn btn-primary">Explore Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;
