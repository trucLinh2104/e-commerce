import React from 'react'
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,          // Bật tự động chạy
    autoplaySpeed:0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};
const Carousel = ({data}) => {
    console.log(data);
    return (<>
       <div className="w-full h-full carousel ">
           <Slider {...settings}>
               {data.map((val) => (
                   <div key={val.id}
                        className="h-full flex justify-center items-center "
                   >
                       <img
                           src={val.img}
                           alt=""
                           className="h-full w-full object-fill block rounded-lg"
                       />

                       {val.button &&
                           <Fab variant="extended" sx={{position:'absolute', right:'20px', bottom:'50px', zIndex:'10'}} href={val.button} >
                                <NavigationIcon sx={{ mr: 1 }} />
                               {val.button_name}
                           </Fab>
                       }
                   </div>
               ))}
           </Slider>
       </div>


    </>)
}
export default Carousel