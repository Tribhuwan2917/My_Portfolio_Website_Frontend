import React from "react";
import {GiSkills} from 'react-icons/gi';
import PageHeaderContent from "../../components/pageHeader";
import { SkillsData } from "./util";
import { Animate,AnimateKeyframes } from "react-simple-animate";
import {Line} from 'rc-progress';
import './styles.scss';
const Skills = () => {
   return (<section id="skills" className="skills">
      <PageHeaderContent headerText="My Skills" icon={<GiSkills size={25}></GiSkills>} ></PageHeaderContent>
      <div className="skills_content-wrapper">
         {
            SkillsData.map((item, key) => {
               return (<div className="skills_content-wrapper_inner-content" key={key}>
                  <Animate>
                     <h3 className="skills_content-wrapper_inner-content_cotegory-text">{item.label}</h3>
                     <div className="skills_content-wrapper_inner-content_progress-container">
                        {
                           item.data.map((skillItem, j) => {
                              return (
                                 <AnimateKeyframes play duration={1} keyframes={["opacity : 1", "opacity : 0"]}
                                    iterationCount="1" >
                                    <div className="progressbar-wrapper" key={j}>
                                       <p>{skillItem.skillName}</p>
                                      
                                       <Line percent={skillItem.percentage} strokeWidth={"2"} strokeColor="var(--yellow-theme-main-color)" trailWidth={"2"}
                                       strokeLinecap="square"></Line>
                                       
                                    </div>

                                 </AnimateKeyframes>
                              )
                           })
                        }
                     </div>

                  </Animate>
               </div>)
            })
         }

      </div>

   </section>);
}
export default Skills;