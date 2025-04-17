import { Carousel } from "@material-tailwind/react";
const CarouselSection= () => {
return(
    <div className="carousel w-full h-80 border-black border-2 flex items-center justify-center text-center" >
<Carousel className="">
      <img
        src="https://i.pinimg.com/736x/d7/4c/21/d74c219d5ffefb8d80217c3bbcef1a9c.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i.pinimg.com/736x/49/23/f1/4923f1c0857a8fb21856f4294bb13405.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i.pinimg.com/736x/1e/c5/76/1ec5761653ce93e70af125dd7bd1da10.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
        </div>
)
}
export default CarouselSection;



 
