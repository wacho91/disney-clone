import { useEffect, useRef, useState } from "react"
import GlobalApi from "../Services/GlobalApi"
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;

const Slider = () => {

    const [ movieList, setMovieList ] = useState([]);
    const elementRef=useRef();

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then( res =>  {
            setMovieList(res.data.results);
        })
    }

    const sliderRight = () => {
        element.scrollLeft+=screenWidth-110
    }

    const sliderLeft = () => {
        element.scrollLeft-=screenWidth-110
    }

  return (
    <div>
        Slider Component 
    </div>
  )
}

export default Slider
