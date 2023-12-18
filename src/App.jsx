import React from 'react';
import './App.css';
import img from './Assets/img-1.jpeg';
import img1 from './Assets/img-3.jpeg';
import img2 from './Assets/img-5.jpeg';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa6";



function App() {
  return (
    <div className="testimonials">
      <div className="inner">
        <h1 className='text'>What Our Clients Say's... </h1>
        <div className="border"></div>
        <div className="row">
          <div className="col">
            <div className="testimonial">
              <img src={img} alt="" />
              <div className="name"> Emma <FaCommentDots /></div>
              <div className="star">
              <IoStar /> 
              <IoStar /> 
              <IoStar />
              <IoStar />
              <IoStar />
              </div>
              <p> <BiSolidQuoteAltLeft /> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). <BiSolidQuoteAltRight /></p>
            </div>

          </div>

          <div className="col">
            <div className="testimonial">
              <img src={img1} alt="" />
              <div className="name">John <FaCommentDots /></div>
              <div className="star">
              <IoStar /> 
              <IoStar /> 
              <IoStar />
              <IoStar />
              
              </div>
              <p><BiSolidQuoteAltLeft /> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). <BiSolidQuoteAltRight /></p>
            </div>
            </div>
            <div className="col">
            <div className="testimonial">
              <img src={img2} alt="" />
              <div className="name">Myth <FaCommentDots /></div>
              <div className="star">
              <IoStar /> 
              <IoStar /> 
              <IoStar />
             
              
              </div>
              <p><BiSolidQuoteAltLeft /> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). <BiSolidQuoteAltRight /></p>
            </div>

          </div>

      

         

        
        </div>

      </div>
     
    </div>
  );
}

export default App;
