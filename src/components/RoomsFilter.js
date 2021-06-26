import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from './Title';

const getUnique = (items,value)=>
{
    return [...new Set(items.map(item => item[value]))]
}

const RoomsFilter= ({rooms})=>
{
    const context = useContext(RoomContext);
    console.log(context);
    const {
        handleChange, type, capacity, price, maxPrice , minPrice,
        minSize, maxSize, breakfast, pets
    }= context;

    let types = getUnique(rooms, 'type');

    types = ['all',...types];
    
    types = types.map((item,index) =>
    {
        return <option value ={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms,'capacity');
    people = people.map((item,index) =>
    {
        return <option key={index} value={item}>
            {item}
        </option>
    })

    return(

     
           <section className="filter-container">
               <Title title = "search rooms"/>

               <form className="filter-form">
                   <div className="form-group">
                       <label htmlFor="type">
                            Room Type
                       </label>

                       <select name = "type" id="type" value = {type}
                            className="form-control"
                            onChange={handleChange}
                            >
                               {types} 

                            </select>

                   </div>

                   <div className="form-group">
                       <label htmlFor="capacity">
                            Guests 
                       </label>

                       <select name = "capacity" id="capacity" value = {capacity}
                            className="form-control"
                            onChange={handleChange}
                            >
                               {people} 

                            </select>

                   </div>
               
                        {/* price  */}
                    <div className = "form-group">
                        <label htmlFor ="price"> room price ${price}</label>
                        <input type = "range" name ="price" min={minPrice}
                            max={maxPrice} id="price" value={price}
                            onChange={handleChange} className="form=comtrol"
                        />
                    </div>

                    {/* size */}
                    <div className="form-group">
                        <label htmlFor="size" >room list</label>
                        <div className="size-inputs">
                            <input type="number" name ="minSize" id="size"
                                value={minSize} onChange={handleChange}
                                    className="size-input"/>
                       
                            <input type="number" name ="maxSize" id="size"
                                value={maxSize} onChange={handleChange}
                                    className="size-input"/>
                        </div>
                        
                    </div>

                    <div className="form-group">
                        <div className="single-extra">
                            <input name="breakfast"  type ="checkbox"
                                id="breakfast" checked={breakfast}
                                onChange={handleChange}
                            />
                            <label htmlFor="breakfast">
                                breakfast
                            </label>

                        </div>
                        <div className="single-extra">
                            <input name="pets"  type ="checkbox"
                                id="pets" checked={pets}
                                onChange={handleChange}
                            />
                            <label htmlFor="pets">
                                pets
                            </label>

                        </div>


                    </div>
               
               </form>

           </section>
           
       
    );
}

export default RoomsFilter;