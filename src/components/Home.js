import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';
import Services from './Services';
import FeaturedRoom from './FeaturedRoom';


export default function Home() {
  return (
    <>

    <Hero >
      
        <Banner title="Luxurious rooms" subTitle="Delux rooms starting at $300" >
          <Link to ='/rooms' className="btn-primary">
            Our Rooms 
          </Link>
        </Banner>
      
      </Hero>
      <Services />
      <FeaturedRoom/>
      
      

    </>
   
  );
} 

