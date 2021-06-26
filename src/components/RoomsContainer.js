import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {withRoomConsumer} from '../Context';
import Loading from './Loading';

const RoomsContainer = ({context})=>
{
    const {loading , sortedRooms, rooms} = context;
    if(loading)
               {
                   return <Loading/>;
               }
                return (
                    <>
                       
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList  rooms={sortedRooms}/>
                    </>
                );
}


// const RoomsContainer= ()=>
// {
    
//     return(
 
//         <>
//         <RoomConsumer>
//         {
//             (value) =>
//             {
//                const {loading, sortedRooms, rooms} = value;
//                if(loading)
//                {
//                    return <Loading/>;
//                }
//                 return (
//                     <div>
//                         Hello From Rooms RoomsContainer
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList  rooms={sortedRooms}/>
//                     </div>
//                 );
//             }
//         }

//         </RoomConsumer>
          
//         </>
//     );
// }

export default withRoomConsumer( RoomsContainer);