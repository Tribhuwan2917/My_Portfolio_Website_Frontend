import React from "react";
import {GrResume} from 'react-icons/gr';
import PageHeaderContent from "../../components/pageHeader";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { data } from "./utli";
import 'react-vertical-timeline-component/style.min.css';
import './styles.scss';
import {MdWork} from 'react-icons/md';
import resume from '../../imageses/myresume.pdf'
const Resume = () => {
   return (<section id="resume" className="resume">
      <PageHeaderContent headerText="My Resume" icon={<GrResume className="GrResume"size={25}></GrResume>} ></PageHeaderContent>
      <div className="timeline">
         <div className="timeline_experience">
            <h3 className="timeline_experience_header-text">Experience</h3>
            <VerticalTimeline layout={'1-column'} color="var(--yellow-theme-main-color)">
               {
                  data.experience.map((item, i) => {
                     return (<VerticalTimelineElement key={i} className="timeline_experience_vertical-timeline-element"
                     contentStyle={{background:'none',color:'var(--yellow-theme-sub-text-color)',border:"1.5px solid var(--yellow-theme-main-color)"}}
            
                     icon={<MdWork></MdWork>}
                     iconStyle={{background: '#181818',
                     color:'var(--yellow-theme-main-color)'}}

                     >
                        <div className="timeline_experience_vertical-timeline-element-title-wrapper">
                           <h3>
                              {item.title}
                           </h3>
                           <h4>{item.subTitle}</h4>
                           <p className="timeline_experience_vertical-timeline-element-description">{item.description}</p>

                        </div>
                        
                     </VerticalTimelineElement>)
                  })
               }
                {/**this is education */}
                
            </VerticalTimeline>

         </div>
         <div className="timeline_education"><h3 className="timeline_education_header-text">Education</h3>
         <VerticalTimeline layout={'1-column'} lineColor="var(--yellow-theme-main-color)">
         {
            
                  data.education.map((item, i) => {
                     return (<VerticalTimelineElement key={i} className="timeline_experience_vertical-timeline-element" contentStyle={{background:'none',color:'var(--yellow-theme-sub-text-color)',border:"1.5px solid var(--yellow-theme-main-color)"}}   icon={<MdWork></MdWork>}
                     iconStyle={{background: '#181818',
                     color:'var(--yellow-theme-main-color)'}}
                     >
                        <div className="timeline_experience_vertical-timeline-element-title-wrapper">
                           <h3>
                              {item.title}
                           </h3>
                           <h4>{item.subTitle}</h4>
                           <p>{item.description}</p>
                           <p>{item.date}</p>

                        </div>
                        
                     </VerticalTimelineElement>)
                  })
               }
               </VerticalTimeline>
         </div>
         <div className="timeline_awards"><h3 className="timeline_awards_header-text">HONORS & AWARDS</h3>
         <VerticalTimeline layout={'1-column'} lineColor="var(--yellow-theme-main-color)">
         {
                  data.AWARDS.map((item, i) => {
                     return (<VerticalTimelineElement key={i} className="timeline_experience_vertical-timeline-element" contentStyle={{background:'none',color:'var(--yellow-theme-sub-text-color)',border:"1.5px solid var(--yellow-theme-main-color)"}}   icon={<MdWork></MdWork>}
                     iconStyle={{background: '#181818',
                     color:'var(--yellow-theme-main-color)'}}>
                        <div className="timeline_experience_vertical-timeline-element-title-wrapper">
                           <h3>
                              {item.title}
                           </h3>
                           <h4>{item.subTitle}</h4>
                           <p>{item.description}</p>
                           <p>{item.issued_by}</p>

                        </div>
                        
                     </VerticalTimelineElement>)
                  })
               }</VerticalTimeline>
               </div>
               <div className="resume_myresume">
      <a
        href={resume}
        download="tribhuwanresume"
        target="_blank"
        rel="noreferrer"
      >
        <button className="resume_myresume_button">Download Resume</button>
      </a>
    </div>
      </div>
   </section>);
}
export default Resume;