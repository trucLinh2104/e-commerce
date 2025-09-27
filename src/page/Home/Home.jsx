import React from 'react';
import Banner from '/src/component/Home/Banner/Banner.jsx';
import Header from '/src/component/common/header/Header.jsx';
import Bestseller from "/src/component/Home/BestSeller/Bestseller.jsx";
import Vegetables from "/src/component/Home/Vegetables/Vegetables.jsx";
import Service from "/src/component/Home/Service/Service.jsx";
import Fruits from "/src/component/Home/Fruits/Fruits.jsx";
import Featured from "/src/component/Home/Featured/Featured.jsx";
import Hero from "/src/component/Home/Hero/Hero.jsx";
import Fact from "/src/component/Home/Fact/Fact.jsx";
import Testimonial from "/src/component/Home/Testimonial/Testimonial.jsx";
import Buyer from '../../component/Home/Buyer/Buyer.jsx';
import SearchHeader from '/src/component/Home/SearchHeader/SearchHeader.jsx';

function Home() {

    return (<>
        <SearchHeader/>
        <Hero />
        <Featured />
        <Fruits />
        <Buyer />
        <Service />
        <Vegetables />
        <Banner />
        <Bestseller />
        <Fact />
        <Testimonial />
    </>);
}

export default Home;