import { useEffect, useRef, useState } from "react"
import GlobalApi from "../Services/GlobalApi"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;

const Slider = () => {

    const [ movieList, setMovieList ] = useState([]);
    const elementRef=useRef();

    useEffect(() => {
        getTrendingMovies();
    },[])

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
        <HiChevronLeft 
            className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
            onClick={()=>sliderLeft(elementRef.current)}
        />

        <HiChevronRight 
            className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
            onClick={()=>sliderRight(elementRef.current)}
        />
        <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth">
            
        </div>
    </div>
  )
}

export default Slider
