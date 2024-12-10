
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
    <div>
        {productionHouseList.map((item) => (
          <div key={item.id}>
            <video src={item.video} />
            <img src={item.image} alt="" />
          </div>  
        ))}
    </div>
  )
}

export default ProductionHouse
