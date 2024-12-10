import Disney from "../assets/images/disney.png";
import Marvel from "../assets/images/marvel.png";
import National from "../assets/images/nationalG.png";
import Pixar from "../assets/images/pixar.png";
import Starwar from "../assets/images/starwar.png";

import Disneyv from "../assets/videos/disney.mp4";
import Marvelv from "../assets/videos/marvel.mp4";
import Nationalv from "../assets/videos/national-geographic.mp4";
import Pixarv from "../assets/videos/pixar.mp4";
import Starwarv from "../assets/videos/star-wars.mp4";

const ProductionHouse = () => {

    const productionHouseList = [
        {
            id: 1,
            image: Disney,
            video: Disneyv
        },

        {
            id: 2,
            image: Marvel,
            video: Marvelv
        },

        {
            id: 3,
            image: National,
            video: Nationalv
        },

        {
            id: 4,
            image: Pixar,
            video: Pixarv
        },

        {
            id: 5,
            image: Starwar,
            video: Starwarv
        }
    ]

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
        {productionHouseList.map((item) => (
            <div
                className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300
                ease-in-out cursor-pointer relative shadow-xl shadow-gray-800" 
                key={item.id}
            >
                <video 
                    src={item.video} autoPlay loop playsInline muted  
                    className="absolute z-0  top-0 rounded-md opacity-0 hover:opacity-50"
                />
                <img 
                    src={item.image} 
                    className="w-full z-[1] opacity-100"
                />
            </div>  
        ))}
    </div>
  )
}

export default ProductionHouse
