import Marquee from 'react-fast-marquee';

const ChoseSection = () => {
    return (
        <div>
                <div className="p-4 space-y-4">
               <Marquee pauseOnHover={true} speed={75}>
               <h3 className="font-bold text-2xl text-center">CHOOSE YOUR DESTINATIONS</h3>
               </Marquee>
                <Marquee pauseOnHover={true} speed={75}>
                <p className="text-sm text-gray-500 text-center">Embark on your extraordinary adventure with Himalayan escapades and inspiring getaways.</p>
                </Marquee> 
                </div>
            <div className="flex">
                
                <div className="py-4">
                <img className="p-2 w-26" src="https://i.ibb.co.com/XkxCCG1/tibet-e1709485688492-500x300.jpg" alt="" />
                <p className="text-center text-xl">Nepal</p>
                </div>
                <div className="py-4">
                <img className="p-2 w-26" src="https://i.ibb.co.com/Jdbw5H8/bhutan-500x300.jpg" alt="" />
                <p className="text-center text-xl">Bhutan</p>
                </div>
                <div className="py-4">
                <img className="p-2 w-26" src="https://i.ibb.co.com/1K78tBL/Nepal-500x300.jpg" alt="" />
                <p className="text-center text-xl">Tibet</p>
                </div>
            </div>
        </div>
    );
};

export default ChoseSection;