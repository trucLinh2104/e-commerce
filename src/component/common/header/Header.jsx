import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import LongMenu from '../LongMenu.jsx';
import FadeMenu from '../FadeMenu.jsx';

const Header = () => {
    const [bar, setBar] = useState(false);
    const totalItems = 1;
    const categories = ['Điện thoại', 'Laptop', 'Phụ kiện'];
    return (
        <div className="header fixed w-full bg-white z-10">
            <div
                className='md:container md:mx-auto hidden lg:flex lg:justify-between text-white text-sm main p-4 top box-border '>
                <div className='flex'>
                    <div>
                        <span className='fas fa-map-marker-alt secondary pr-3 pl-2'></span>
                        <span className='hover:cursor-pointer'>123 Street, New York</span>
                    </div>
                    <div>
                        <span className="fas fa-envelope secondary pr-3 pl-4"></span>
                        <span className='hover:cursor-pointer'>Email@Example.com</span>
                    </div>
                </div>
                <div className='pr-3'>
                    <span className="relative group hover:cursor-pointer transition inline-block">
                        Languages
                        <i className="fa fa-angle-down pl-1 hover:cursor-pointer"></i>
                        <ul className="absolute hidden group-hover:block rounded-md bg-gray-200 xl:py-2 pl-3 pr-8 z-20 w-[120px]">
                            <li className="p-1 li-hov flex flex-nowrap items-center justify-start gap-2 text-black">
                                 <img alt="img" src="https://flagcdn.com/w20/vn.webp" className="flag"
                                      style={{ display: "flex", marginRight: "8px" }}/>
                                VietNam

                            </li>
                            <li className="p-1 li-hov flex flex-nowrap items-center justify-start gap-2 text-black">
                                 <img alt="img" src="https://flagcdn.com/w20/gb.webp" className="flag"
                                      style={{ display: "flex", marginRight: "8px" }}/>
                                English</li>

                        </ul>
                    </span>
                    <span className='pr-2 pl-2 hover:cursor-pointer'>/</span>
                    <span className='hover:cursor-pointer hov transition'>Privacy Policy</span>
                    <span className='pr-2 pl-2 hover:cursor-pointer'>/</span>
                    <span className='hover:cursor-pointer hov transition'>Terms of Use</span>
                    <span className='pl-2 pr-2 hover:cursor-pointer'>/</span>
                    <span className='hover:cursor-pointer hov transition'>Sales and Refunds</span>
                </div>
            </div>
            <div className='md:container md:mx-auto flex justify-between m-6 sticky z-10'>
                <div className='main-text text-3xl sm:text-4xl font-extrabold'><Link to='/'>FruitsFresh</Link></div>
                <ul className={`xl:flex xl:justify-center xl:items-center relative ${bar ? 'bar-menu flex flex-col bg-white right-0 relative' : 'hidden xl:flex xl:flex-row'}`}>
                    <li className='px-4 text-gray-500 font-extrabold nav-hov'><Link to='/'>Home</Link></li>
                    <li className='px-4 text-gray-500 font-extrabold nav-hov'><Link to='/shop'>Shop</Link></li>
                    <li className='px-4 text-gray-500 font-extrabold nav-hov'><Link to='/shop-detail'>Shop Detail</Link>
                    </li>
                    <li className='px-4 text-gray-500 font-extrabold nav-hov relative pages'><Link>Pages</Link>
                        <i className='fa fa-angle-down pl-1 hover:cursor-pointer'></i>
                        <ul className='absolute inside rounded-md top-10 bg-gray-200 xl:py-2 pl-3 pr-8'>
                            <li className='p-1 li-hov'><Link to='/cart'>Cart</Link></li>
                            <li className='p-1 li-hov'><Link to='/checkout'>Checkout</Link></li>
                            <li className='p-1 li-hov'><Link to='/testimonial'>Testimonial</Link></li>
                            <li className='p-1 li-hov'><Link to='/error'>404 Page</Link></li>
                        </ul>
                    </li>
                    <li className='px-4 text-gray-500 font-extrabold nav-hov'><Link to='/contact'>Contact</Link></li>
                    <div className={`xl:pl-20 xl:flex ${bar ? 'flex bg-white' : 'hidden'}`}>
                        <span
                            className='fa fa-search main-text p-5 mr-2 mt-2 w-10 h-10 border search search-hov flex justify-center items-center hover:cursor-pointer'></span>
                        <Link to='/cart' className='fa fa-shopping-bag fa-2x main-text p-3 relative icon-hov'>
                            <span
                                className='absolute top-2 right-0 w-6 h-6 text-xs search flex justify-center items-center bord text-green-600'>{totalItems}</span>
                        </Link>
                        <span className='fas fa-user fa-2x main-text p-3 icon-hov'></span>
                    </div>
                </ul>
                <i className='fa fa-bars xl:hidden bars py-1 px-4 text-xl hover:cursor-pointer'
                   onClick={() => setBar(!bar)}></i>
            </div>

            <div className="md:container md:mx-auto flex justify-between m-6 sticky z-10">
                <div className="flex flex-nowrap w-1/3 gap-2 items-center">
                    <LongMenu></LongMenu>
                    <span className="text-gray-500 font-extrabold text-[1rem]">Danh mục sản phẩm</span>


                </div>

                <div className="portal-option flex flex-1 justify-end items-center">
                    <div className="flex flex-nowrap w-1/3 gap-2 justify-end">
                        <FadeMenu title="Dành cho người mua"
                                  options={categories}
                        ></FadeMenu>
                        <i className="fa fa-angle-down pl-1 hover:cursor-pointer flex items-center"></i>
                    </div>
                    <div className="flex flex-nowrap w-1/3 gap-2 justify-end">
                        <FadeMenu title="Dành cho người bán"
                                  options={categories}
                        ></FadeMenu>
                        <i className="fa fa-angle-down pl-1 hover:cursor-pointer flex items-center"></i>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;
