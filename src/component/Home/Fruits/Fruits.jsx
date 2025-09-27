import React from 'react'
import { fruits } from '../../../data/Data.jsx'
import Slider from 'react-slick';
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerMode:true,
    centerPadding:"20px",
    autoplay:true,          // Bật tự động chạy
    autoplaySpeed:1000,
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
const Fruits = () => {
    return (
        <div className='mt-40 container ml-auto mr-auto'>
            <div className='flex flex-col mb-10 mx-4 md:mx-20 lg:flex lg:justify-between lg:flex-row lg:mx-10 lg:gap-10'>
                <h1 className='text-3xl font-semibold mb-6 lg:text-4xl lg:flex lg:justify-center lg:items-center' style={{color: '#45595b'}}>Our Organic Products</h1>
                <ul className='flex flex-row flex-wrap'>
                    <li className='py-2 px-3 border rounded-full text-white w-32 text-center mx-2 my-2 lg:mx-1 text-green-900 font-semibold  hover:cursor-pointer' style={{backgroundColor: 'rgb(255, 252, 189)'}}>All Products</li>
                    <li className='py-2 px-3 border rounded-full w-32 text-center mx-2 my-2 lg:mx-1 text-green-900 font-semibold hover:cursor-pointer' style={{backgroundColor: '#f4f6f8'}}>Vegetables</li>
                    <li className='py-2 px-3 border rounded-full w-32 text-center mx-2 my-2 lg:mx-1 text-green-900 font-semibold hover:cursor-pointer' style={{backgroundColor: '#f4f6f8'}}>Fruits</li>
                    <li className='py-2 px-3 border rounded-full w-32 text-center mx-2 my-2 lg:mx-1 text-green-900 font-semibold hover:cursor-pointer' style={{backgroundColor: '#f4f6f8'}}>Bread</li>
                    <li className='py-2 px-3 border rounded-full w-32 text-center mx-2 my-2 lg:mx-1 text-green-900 font-semibold hover:cursor-pointer' style={{backgroundColor: '#f4f6f8'}}>Meat</li>
                </ul>
            </div>
            <div className='mx-4 w-full product  '>
                <Slider {...settings}>
                    {fruits.map((val) => {
                        return (
                            <div key={val.id} className='box border rounded-lg border-orange-400  mb-6 mx-2 w-1/3'>
                                <div className='w-full relative overflow-clip '>
                                    <img className='hover:scale-150 duration-500 w-full h-[180px] rounded-lg' src={val.img} alt="" />
                                    <span className='absolute top-3 left-3 text-green-900 font-semibold text-lg py-1 px-2 rounded-xl text-[12px] border-[1px] border-green-950 border-solid' style={{backgroundColor: 'rgb(255, 252, 189)'}}>Fruits</span>
                                </div>
                                <div className='text-center'>
                                    <h3 className='text-2xl mt-5 font-semibold' style={{color: '#45595b'}}>{val.name}</h3>
                                    <p className='leading-normal font-normal my-4 w-10/12 mx-auto' style={{color: '#020e1ccf'}}>{val.desc}</p>
                                </div>
                                <div className='flex justify-between items-center mb-8 mx-6 xl:mx-3'>
                                    <p className='font-semibold text-lg' style={{color: '#0c363b'}}>${val.price} / Kg</p>
                                    <div className='border rounded-full border-orange-400 py-2 px-4 lg:px-2 '>
                                        <span className='pr-4 lg:pr-1 ' style={{color: '#0B8457'}}>{val.icon}</span>
                                        <button  className='font-semibold' style={{color: '#0B8457'}}>{val.cart}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>

            </div>
        </div>
    )
}

export default Fruits
