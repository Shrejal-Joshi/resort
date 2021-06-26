import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from './RoomsContainer';

function Rooms() {
  return (
    <>
       <Hero hero ="roomsHero">
       <Banner title="Our rooms" >
          <Link to='/' className="btn-primary">
            return home
          </Link>
        </Banner>
       </Hero>
       <RoomsContainer/>
    </>
  );
}
 

export default Rooms;
