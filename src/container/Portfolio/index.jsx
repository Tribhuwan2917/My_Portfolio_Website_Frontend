import React, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeader";
import image1 from '../../imageses/image3.jpg';
import image3 from '../../imageses/datastructure.webp';
import './styles.scss';
import {Link} from 'react-router-dom';
const portfolioData = [
   {
      id: 2,
      name: 'DEVELOPMENT',
      image: image1,
      link: 'https://github.com/Tribhuwan2917?tab=repositories'
   },
   {
      id: 3,
      name: 'C.P.',
      image: image3,
      link: 'https://leetcode.com/Tribhuwan_1729/'
   }
]
const filterData = [
   {
      filterId: 1,
      label: 'All'
   },
   {
      filterId: 2,
      label: 'Development'
   },
   {
      filterId: 3,
      label: 'DSA'
   }

]
const Portfolio = () => {
   const [filteredvalue, setFilteredValue] = useState(1);
   const [hoveredValue, setHoveredValue] = useState(null);
 
   function handleFilter(currentId) {
     setFilteredValue(currentId);
   }
 
   function handleHover(index) {
     setHoveredValue(index);
   }
 
   console.log("====================================");
   console.log(hoveredValue);
   console.log("====================================");
 
   const filteredItems =
     filteredvalue === 1
       ? portfolioData
       : portfolioData.filter((item) => item.id === filteredvalue);
 
   console.log(filteredItems);
 
   return (
     <section id="portfolio" className="portfolio">
       <PageHeaderContent
         headerText="My Portfolio"
         icon={<BsInfoCircleFill size={40} />}
       />
       <div className="portfolio__content">
         <ul className="portfolio__content__filter">
           {filterData.map((item) => (
             <li
               className={item.filterId === filteredvalue ? "active" : ""}
               onClick={() => handleFilter(item.filterId)}
               key={item.filterId}
             >
               {item.label}
             </li>
           ))}
         </ul>
         <div className="portfolio__content__cards">
           {filteredItems.map((item, index) => (
             <div
               className="portfolio__content__cards__item"
               key={`cardItem${item.name.trim()}`}
               onMouseEnter={() => handleHover(index)}
               onMouseLeave={() => handleHover(null)}
             >
               <div className="portfolio__content__cards__item__img-wrapper">
                 <a>
                   <img alt="dummy data" src={item.image} />
                 </a>
               </div>
               <div className="overlay">
                 {index === hoveredValue && (
                   <div className="mylink">
                     <p>{item.name}</p>
                     {/* <button onClick={()=>handleLink(item.link)} >Visit</button> */}
                     <Link className="myLink_inner"  to={item.link}>Click</Link>
                   </div>
                 )}
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 export default Portfolio;