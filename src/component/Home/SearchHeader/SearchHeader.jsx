import React from 'react'


const SearchHeader = () => {

    return (
        <>
            <div className='md:container md:mx-auto flex justify-between lg:flex-row pt-[100px] w-full'>
                <div className='ml-5 my-20 flex-col w-full items-center justify-between'>
                    <div className="row">
                        <div className="w-full flex-col flex-wrap">
                            <h4 className="text-xl lg:text-2xl font-semibold"
                                style={{color: '#ec9c00'}}
                            >100% Organic Foods</h4>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-10 lg:w-9/12"
                                style={{color: '#0B8457'}}
                            >VietNam's product and fresh food for you</h1>
                        </div>
                    </div>
                    <div className="w-full flex flex-nowrap gap-2">
                        <div className="relative box-border w-8/12">
                            <div className="">
                                <input className="border border-orange-400 relative w-full rounded-full  pl-4 py-4 "
                                       type="text"
                                       placeholder="Search"
                                />
                                <i className="fa-solid fa-magnifying-glass pl-1 hover:cursor-pointer absolute  py-4 right-1/3 top-[3px] px-6 text-md top-0 px-6"></i>
                            </div>

                        </div>

                        <div className="flex gap-2 flex-grow justify-start items-center ">
                            <button className="pl-2 py-2 rounded-[15px] w-1/2 text-white font-extrabold"
                                    style={{backgroundColor: '#0B8457'}}
                                    type="submit"
                            >Buyer
                            </button>
                            <button className="pl-2 py-2 rounded-[15px] w-1/2 text-white font-extrabold"
                                    style={{backgroundColor: '#0B8457'}}
                                    type="submit"
                            >Purchaser
                            </button>
                        </div>
                    </div>

                </div>

            </div>


        </>

    )
}

export default SearchHeader;
