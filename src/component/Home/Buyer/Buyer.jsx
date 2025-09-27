import React from 'react'
import {buyer} from '../../../data/Data.jsx';
import Slider from 'react-slick';
import RecipeReviewCard from '../../common/RecipeReviewCard.jsx';
const settings = {
    dots: true,
    infinite: true,
    speed: 30000,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerMode:true,
    centerPadding:"20px",
    autoplay:false,          // Bật tự động chạy
    autoplaySpeed:0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
};
const Buyer = () => {
    return (
        <div className='mt-40 container ml-auto mr-auto'>
            <div className='flex flex-col mb-10 mx-4 md:mx-20 lg:flex lg:justify-between lg:flex-row lg:mx-10 lg:gap-10'>
                <h1 className='text-3xl font-semibold mb-6 lg:text-4xl lg:flex lg:justify-center lg:items-center' style={{color: '#45595b'}}>Buyer Leading</h1>
            </div>
            <div className='mx-4 w-full product '>
                <Slider {...settings}>

                    {buyer.map((val) => {
                        return (
                            <div key={val.id} className='box border rounded-lg w-1/3 mb-6 mx-2 slick-item'>
                                <RecipeReviewCard  data={val}/>
                            </div>
                        )
                    })}
                </Slider>

            </div>
        </div>
    )
}

export default Buyer
