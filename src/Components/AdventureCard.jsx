
const AdventureCard = (props) => {
  
    const {Image,Title,EcoFriendlyFeatures} = props.data;
    return (
        <div>
           <div className="card bg-base-100 shadow-xl">
  <figure>
    <img src={Image} alt="" className="rounded-xl h-36 w-full" />
  </figure>
  <div className="items-center text-center space-y-4">
    <h2 className="font-bold text-xl mt-4">{Title}</h2>
    <p className="text-sm text-gray-500">{EcoFriendlyFeatures}</p>
    <div>
      <button className="btn btn-primary">Explore Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AdventureCard;