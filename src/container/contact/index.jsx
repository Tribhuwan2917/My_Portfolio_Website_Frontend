import React from "react";
//import PageHeaderContent from "../../components/pageHeaderContent";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { useState,useRef,useEffect} from "react";
import emailjs from '@emailjs/browser';
import "./styles.scss";

const Contact = () => {
  const form=useRef();
  const[userData,setUserData]=useState({
    userName:'',
    userEmail:'',
    userMessage:'',
    userSubject:''
  })
  const[isUserValidData,setIsUserValidData]=useState({
    isUserNameValid:true,
    isUserEmailValid:true,
    isUserSubjectValid:true,
    isUserMessageValid:true,
  })
  const[errorMessage,setErrorMessage]=useState({
    userNameErrorMessage:'',
    userEmailErrorMessage:'',
    userSubjectErrorMessage:'',
    userMessageErrorMessage:''
  })
  const[isValid,setIsValid]=useState(false)
  const handleChange=(event)=>{
     const name=event.target.name;
     const value=event.target.value;
     console.log(name+"________________"+value)
     validator(name,value);
     setUserData({...userData,[name]:value}) 
     console.log(userData) 
  } 
  useEffect(()=>{
    if(isUserValidData.isUserEmailValid&&isUserValidData.isUserEmailValid&&isUserValidData.isUserMessageValid&&isUserValidData.isUserSubjectValid)
    {
      setIsValid(true)
    }
    else
    {
      setIsValid(false)
    }
  },[isUserValidData])
  // useEffect(() => { 
  //   for( let key in userData)
  //   {
  //     validator(key,userData[key])
  //   }
  //      },[userData]); 
  const validator=(name,value)=>{
    switch(name)
    {
      case "userName":
        {
          // console.log(name+">>>>>>>>>>>>>>>>>>"+value)
          let regux=/[A-Z][a-z]*[ ]+[A-Z][a-z]*/;
          if(regux.test(value))
          {
            // console.log("userName Validated successfully")
            setErrorMessage({...errorMessage,userNameErrorMessage:''})
            setIsUserValidData({...isUserValidData,isUserNameValid:true})
          }else{
            // console.log(name+">>>>>>>>>>>>>>>>>>"+value)
            // console.log("userName is still in valid")
            setErrorMessage({...errorMessage,userNameErrorMessage:"Name Is Invalid Enter Name like first name then space and then last name  "})
            setIsUserValidData({...isUserValidData,isUserNameValid:false})
          }
        }
        break;
        case "userEmail":
          {
            console.log("it has called_________________________________________")
            let regux=/[A-Za-z0-9]+(@gmail.com)/;
          if(regux.test(value))
          {
            setErrorMessage({...errorMessage,userEmailErrorMessage:''})
            setIsUserValidData({...isUserValidData,isUserEmailValid:true})
          }else{
            setErrorMessage({...errorMessage,userEmailErrorMessage:"Enter the valid Email Id"})
            setIsUserValidData({...isUserValidData,isUserEmailValid:false})
          }

          }
          break;
          case "userMessage":
          {
           
          if(value.length>=10)
          {
            setErrorMessage({...errorMessage,userMessageErrorMessage:''})
            setIsUserValidData({...isUserValidData,isUserMessageValid:true})
          }else{
            setErrorMessage({...errorMessage,userMessageErrorMessage:" Email Message Must Have At least 10 Character"})
            setIsUserValidData({...isUserValidData,isUserMessageValid:false})
          }
        
        }
        break;
        case "userSubject":
          {
            let regux=/[A-Za-z0-9]+/
           
          if(regux.exec(value)&&value.length>=10)
          {
            setErrorMessage({...errorMessage,userSubjectErrorMessage:''})
            setIsUserValidData({...isUserValidData,isUserSubjectValid:true})
          }else{
            setErrorMessage({...errorMessage,userSubjectErrorMessage:"Email Subject  Must Have At least 10 Character"})
            setIsUserValidData({...isUserValidData,isUserSubjectValid:false})
          }
       
        }
        break;

    }
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("you data has been submitted successfully");
    emailjs.sendForm('service_3ttzqvq', 'template_jwz063k', form.current, 'm4CMMrF57hrEfSv79')
              .then((result) => {
                alert("Thank You! Your Message successfully send I will respond you after some time");

                  console.log(result.text);
              }, (error) => {
                alert("Oops! something went wrong")

                  console.log(error.text);
              });
              event.target.reset();
    // console.log("this is our user Data")
    // console.log(userData);
    // console.log("this is our error message")
    // console.log(errorMessage)
    // console.log("this is validation message")
    // console.log(isUserValidData)
    // console.log("all filed validation status")
    // console.log(String(isValid))
  }
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
         
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
        >
          <form ref={form} onSubmit={handleSubmit} className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="userName"
                  className="inputName"
                  value={userData.userName}
                  onChange={handleChange}
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              {isUserValidData.isUserNameValid?null:<span style={{color:'red',fontSize:'2rem'}} className="alert alert-danger">
  <strong>{errorMessage.userNameErrorMessage}</strong>
</span>}
              <div>
                <input
                  required
                  name="userEmail"
                  className="inputEmail"
                  value={userData.userEmail}
                  onChange={handleChange}
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              {isUserValidData.isUserEmailValid?null:<span style={{color:'red',fontSize:'2rem'}} className="alert alert-danger">
  <strong>{errorMessage.userEmailErrorMessage}</strong>
</span>}
              <div>
                <input
                  required
                  name="userSubject"
                  className="inputEmail"
                  value={userData.userSubject}
                  onChange={handleChange}
                  type={"text"}
                />
                <label htmlFor="userSubject" className="emailLabel">
                 Email Subject 
                </label>
              </div>
              {isUserValidData.isUserSubjectValid?null:<span style={{color:'red',fontSize:'2rem'}} className="alert alert-danger">
  <strong>{errorMessage.userSubjectErrorMessage}</strong>
</span>}


              <div>
                <textarea
                  required
                  name="userMessage"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                  value={userData.userMessage}
                  onChange={handleChange}

                />
                <label htmlFor="description" className="descriptionLabel">
                  Message 
                </label>
              </div>
              {isUserValidData.isUserMessageValid?null:<span style={{color:'red',fontSize:'2rem'}} className="alert alert-danger">
  <strong>{errorMessage.userMessageErrorMessage}</strong>
</span>}
              
            </div>
            <button disabled={!isValid} type="submit">Send Email</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;