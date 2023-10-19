import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from "react-simple-animate";
import './styles.scss';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { DiJavascript, DiReact } from 'react-icons/di';
import { } from 'react-icons/'
const persnalDetails = [
    {
        label: "Name :-",
        value: "Tribhuwan Pal"
    },
    {
        label: "Address :-",
        value: "Jaunpur,   (U.P.)"
    },
    {
        label: "Email :-",
        value: "electronics8499@gmail.com"
    },
    {
        label: "Contact No :-",
        value: "6307979643"
    }
]
const jobSummary = "I have been working as Software Developer in Infosys from past 11 months.";
const About = () => {
    return (<section id="about" className="about">
        <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={25}></BsInfoCircleFill>} ></PageHeaderContent>
        <div className="about_content">

            <div className="about_content_personalWrapper"><Animate
                >
                <h3> Front End Developer</h3>
                <p className="jobsummary">{jobSummary} </p>
            </Animate>
                <Animate>
                    <h3 className="personalInformationHeaderText"> Personal Information</h3>
                    <ul>
                        {
                            persnalDetails.map((item, key) => {
                                return (<li key={key}>
                                    <span className="title">
                                        {item.label}
                                    </span>
                                    <span className="value">
                                        {item.value}
                                    </span>
                                </li>)
                            })
                        }


                    </ul>
                </Animate></div>
            <div className="about_content_serviceWrapper">
                <div className="about_content_serviceWrapper_innerContent">

                    <div><DiJavascript size={30} color="var(--yellow-theme-main-color)"></DiJavascript></div>

                    <div><FaDatabase size={30} color="var(--yellow-theme-main-color)"></FaDatabase></div>
                    <div> <FaJava size={30} color="var(--yellow-theme-main-color)"></FaJava></div>
                    <div><DiReact size={30} color="var(--yellow-theme-main-color)"></DiReact></div>
                </div>

            </div>

        </div>
    </section>);
}
export default About;