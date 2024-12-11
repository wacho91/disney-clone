import { useEffect, useRef, useState } from "react"
import GlobalApi from "../Services/GlobalApi"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import MovieCard from "./MovieCard"
import HrMoieCard from "./HrMoieCard"

const MovieList = ({genreId, index_}) => {

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        getMovieByGenreId();
    },[]);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(res => {
            setMovieList(res.data.results);
        });
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }

    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

  return (
    <div>
        <IoChevronBackOutline 
            onClick={() => slideLeft(elementRef.current)} 
            className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}
        />
        <div 
            ref={elementRef} 
            className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4"
        >
            {movieList.map((item, index) => (
                <>
                    {index_%3==0?<HrMoieCard movie={item}/>:<MovieCard movie={item} />}
                </>
            ))}
        </div>
        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
  )
}

export default MovieList
