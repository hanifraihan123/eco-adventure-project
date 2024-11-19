import { useLoaderData } from "react-router-dom";
import AdventureCard from "./AdventureCard";

const Experience = () => {

    const categories = useLoaderData();
    
    return (
        <div>
            <h3 className="font-bold text-center py-4 text-xl">Adventure Experiences Section</h3>
            <p className="text-sm text-center text-gray-500 py-4">On the Lordsky Destination Details Page, you'll find a comprehensive overview of each destination, including vibrant photos, <br /> key highlights, and an interactive map to give you a clear picture of what awaits. Whether it's a tropical paradise, a bustling city, <br />  or a serene mountain retreat, each location comes with detailed descriptions to spark your wanderlust.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-2 w-11/12 mx-auto">
                {
                    categories.map(category=> (<AdventureCard key={category.id} data={category}></AdventureCard>))
                }
            </div>
        </div>
    );
};

export default Experience;