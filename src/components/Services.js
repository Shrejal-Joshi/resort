import React ,{ Component } from 'react';
import Title from './Title';
// import {Link} from 'react-router-dom';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component
{
    state ={
        services:[
               {
                icon:<FaBeer/>,
                title: "Free Beer",
                info: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print"

               },
               {
                icon:<FaCocktail/>,
                title: "Free Cocktails",
                info: "Lorem ipsum, or lipsum as it is sometimes known,is dummy text used in laying out print, "
                
               },
               {
                icon:<FaHiking/>,
                title: "Free Hiking",
                info: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, "
                
               },
               {
                icon:<FaShuttleVan/>,
                title: "Free Shuttle",
                info: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,"
                
               }
        ]
    }
    render()
    {
        return (
            <section className="services">
               
                <Title title='services'/>
                <div className="services-center">
                    {this.state.services.map((item,index) =>
                       {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                       }
                        
                        )}
                </div>

            </section>
        )
    }
}