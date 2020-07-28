import React, { Component } from 'react';
import "./7.css"
import "./1.css"
import ten from "./images/10.jpg"
import thirteen from "./images/13.jpg"
import twelve from "./images/24.jpg"
import twonine from "./images/29.jpg"
import seventeen from "./images/17.jpg"
import one from "./images/1.jpg"
import logo from "./images/logo.png"
import eleven from "./images/11.jpg" 
class Main extends Component {
    render() {
        return (
            <div>
             <div className="row">
    <section className="wavep container">
        {/* <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
            <a href="#about">About</a>
            <a href="#team">Volunteers</a>
            <a href="#events">Events</a>
            <a href="#wings">Wings</a>
            <a href="./loader4.html">Team</a>
            <a href="./loader1.html">Picture gallery</a>
          </div>
          
          <span id="navig" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
          
          <script>
          function openNav() {
            $("#mySidenav").css({"width" :"250px"});
          }
          
          function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
          }
          </script>
           */}
        <div className="wave col-lg-12 col-md-12 col-sm-12 col-sm-12 col-xs-12"></div>
    </section>
</div>


    {/* <!-- Virasat --> */}
    {/* <!-- <div className="row">
    <div className="virasat col-lg-12 col-sm-12 col-xs-12 col-md-12">
    <div className="zoom">
   <img src="./images/1.jpg" id="piczoom"/>
    </div>
    </div>
    </div>
    -->

         <!-- description --> */}
         <br/><br/>
         <div className="row" id="about">
           
            <div className="col-lg-12 col-sm-12 col-md-12 description" >
                
            <h1>ABOUT SPICMACAY, NIT Durgapur Chapter</h1>
                <div className="circle">

                </div>
                <p>SPIC MACAY (Society for the Promotion of Indian classNameical Music And Culture Amongst Youth) is a non-political, nationwide, voluntary movement founded in 1977 
                    by Dr Kiran Seth, Professor-Emeritus at IIT-Delhi who was awarded the ‘Padma Shri’ for his contribution to the arts in 2009.
                   SPICMACAY’s intention is to enrich the quality of formal education by increasing awareness about different aspects of Indian heritage 
                   and inspiring the young mind to imbibe the values embedded in it. It seeks to inspire youth through experiencing the mysticism embodied
                   in the rich and heterogeneous cultural tapestry of Indian and World Heritage, with a hope that the beauty, grace, values and wisdom 
                   embodied in these arts will influence their way of life and thinking and inspire one to become a better human being.
                   For this, the most accomplished artistes of the country render programmes of Indian classNameical music and dance, folk, poetry, 
                   theatre, traditional paintings, crafts & yog primarily in schools and colleges.
                   In 2011, SPIC MACAY was awarded the Rajiv Gandhi Sadbhavana award in recognition of its contribution to youth development.</p>
            
            
            </div>
            </div>

       <br/><br/>

        {/* <!-- Events -->
     <!-- Enter pictures of events here --> */}
     <div className="row">
          <h1 className="events" style={{color:"black !important", marginLeft:"20px"}}id="events">EVENTS</h1>
     <div className="contain" >
    <div className="card">
        <div className="imgcard">
           <img className="images" src={one}/>
        </div>
           <div className="detail">
               <h2 className="titl">VIRASAT</h2>
               <p className="info">VIRASAT is the official cultural extravaganza organized by SPIC MACAY NIT Durgapur Chapter.
                The perfect blend of gorgeous grace with sonorous tune swirls in the flavour of Indian culture
                and tradition. Esteemed artists of the likes of Pt Viswa Mohan Bhatt(Grammy Award
                Winner), Dr. N. Rajam, Pt. Ajoy Chakraborty etc. have been show stealers in the recent past. So
                what are you waiting for? Fasten your seatbelts and get ready to soak in India's rich heritage at
                its finest.</p>
                    <button onclick=""><a href="./loader2.html">READ MORE</a></button>
           </div> 
    </div>
    <div className="card">
            <div className="imgcard">
               <img className="images" src={twonine}/>
            </div>
               <div className="detail">
                   <h2 className="titl">UTTRAYAN</h2>
                   <p className="info">Uttarayan is the annual kite festival of SPIC MACAY NIT Durgapur Chapter. It is celebrated every
                    year in the day of Makar Sankranti. The fierce battle of kites and the energetic dance moves
                    creates a vibrant environment . Everyone delves into the madness of this colourful festival and
                    enjoys every bit of time.</p>
                        <button onclick=""><a href="https://m.facebook.com/story.php?story_fbid=2868811669881868&id=840463576050031">READ MORE</a></button>
               </div> 
            
        </div>
        <div className="card">
                <div className="imgcard">
                   <img className="images" src={seventeen}/>
                </div>
                   <div className="detail">
                       <h2 className="titl">ANUBHAV</h2>
                       <p className="info">" Creativity is intelligence having fun." With this mantra, SPIC MACAY NIT Durgapur Chapter and
                        BMEP join hands every year to organise its annual art workshop, Anubhav. This one of a kind art
                        workshop focuses to bring the colourful flare of creativity among the underprivileged children
                        of Durgapur. With a plethora of colourful art, craft and intricate origami, it is truly a magnificent
                        opportunity for the children to explore the depths of their imagination and unleash its vibrancy</p>
                            <button onclick=""><a href="https://x.facebook.com/pg/spicmacaynitd/posts/?ref=page_internal&mt_nav=0">READ MORE</a></button>
                   </div> 
            
            </div>
                        
</div>        

</div>
   {/* <!-- <div className="row">
    <div className="gallery col-lg-12 col-sm-12 col-xs-12 col-md-12"/>
        
            <ul className="list">
                <li className="item1"><div className="bg"></div></li>
                <li className="item2"><div className="bg"></div></li>
                <li className="item3"><div className="bg"></div></li>
                <li className="item4"><div className="bg"></div></li>
                <li className="item5"><div className="bg"></div></li>
                
                <li className="item6"><div className="bg"></div></li>
                <li className="item7"><div className="bg"></div></li>
                <li className="item8"><div className="bg"></div></li>
                <li className="item9"><div className="bg"></div></li>
                <li className="item10"><div className="bg"></div></li>

                <li className="item11"><div className="bg"></div></li>
                <li className="item12"><div className="bg"></div></li>
                <li className="item13"><div className="bg"></div></li>
                <li className="item14"><div className="bg"></div></li>
                <li className="item15"><div className="bg"></div></li>
            
                
                <li className="item16"><div className="bg"></div></li>
                <li className="item17"><div className="bg"></div></li>
                <li className="item18"><div className="bg"></div></li>
                <li className="item19"><div className="bg"></div></li>
            </ul>
        
            </div>
        </div> --> */}
{/* 
<!-- TEAM --> */}

{/* 
<div className="row">
<h1 className="events" id="team">VOLUNTEERS</h1>
<div className="swiper-container row">
    <div className="swiper-wrapper">
      <div className="swiper-slide" ></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/aritra.jpg"/></div><div className="names"><h3>Aritra Karmakar</h3><br><br/><span>President</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/tiyasha.jpg"/></div><div className="names"><h3>Tiasha Biswa</h3><br/><span>Vice President</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/abhisek.jpg"/></div><div className="names"><h3>Abhishek Agrawal</h3><br/><span>Treasurer</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/anisha.jpg"/></div><div className="names"><h3>Anisha Saha</h3><br/><span>Treasurer</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/rishi.jpg"/></div><div className="names"><h3>Rajdeep Golder</h3><br/><span>Secretary</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/subhronil.jpg"/></div><div className="names"><h3>Subhronil Kundu</h3><br/><span>Music Wing Head</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/anirban.jpg"/></div><div className="names"><h3>Anirban Banik</h3><br/><span>Music Wing Head</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/shewta.jpg"/></div><div className="names"><h3>Shweta Sharma</h3><br/><span>Music Wing Head</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/laxmi.jpg"/></div><div className="names"><h3>Lakshmi</h3><br/><span>Dance Wing Head</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/medha.jpg"/></div><div className="names"><h3>Medha Majumdar</h3><br/><span>Dance Wing & Sponsorship Head</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/meghla.jpg"/></div><div className="names"><h3>Meghla Maji</h3><br/><span>Sponsorship Head</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/ishani.jpg"/></div><div className="names"><h3>Ishani Nag</h3><br/><span>Art Wing Head</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/nitika.jpg"/></div><div className="names"><h3>Nitika Mondal</h3><br/><span>Art Wing Head</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/bidipta.jpg"/></div><div className="names"><h3>Bidipta Ghosh</h3><br/><span>Art Wing Head</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/sambit.jpg"/></div><div className="names"><h3>Sambit Biswas</h3><br/><span>IT Wing Head</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/kaniska.jpg"/></div><div className="names"><h3>Kumar Kaniska</h3><br/><span>IT Wing Head</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/shubhamitra.jpg"/></div><div className="names"><h3>Subhamitra Dutta</h3><br/><span>Executive Fest Coordinator</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/poulomee.jpg"/></div><div className="names"><h3>Poulomee Roy</h3><br/><span>Executive Fest Coordinator</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/sahil.jpg"/></div><div className="names"><h3>Sahil Ghosh</h3><br/><span>Executive Fest Coordinator</span></div></div>
      <div className="swiper-slide" ><div className="imgbox"><img src="./images/4th/ADITI.jpg"/></div><div className="names"><h3>Aditi Mandal</h3><br/><span>Executive Fest Coordinator</span></div></div>
    </div>
    <div className="swiper-pagination"></div>
<script src="https://unpkg.com/swiper/js/swiper.js"></script>
<script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
    <script>
        var swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
          },
          pagination: {
            el: '.swiper-pagination',
          },
        });
      </script>   
 </div> */}
 {/* <div className="row">
     <p className="teamer">
 <a href="./team.html" id="teamer">MEET THE OTHER MEMBERS</a>   
</p>
</div> */}
 <br/><br/>


{/* 
 <!-- wings --> */}
 <div className="row">
     <div  className="container">
 <div className="cardcontainer">
 <div className="cardbox">
     <div className="imgpic">
         <img src={twelve}/>
     </div>
     <div className="content">
         <div>
             <h2>MUSIC WING</h2>
             <p>This wings creates melody.</p>
         </div>
     </div>
 </div>

 <div className="cardbox">
    <div className="imgpic">
        <img src={ten}/>
    </div>
    <div className="content">
        <div>
            <h2>DANCE WING</h2>
            <p>This wing stuns everyone with their moves.</p>
        </div>
    </div>
</div>

<div className="cardbox">
    <div className="imgpic">
        <img src={eleven}/>
    </div>
    <div className="content">
        <div>
            <h2>ART WING</h2>
            <p>This wings adds color to the world.</p>
        </div>
    </div>
</div>

<div className="cardbox">
    <div className="imgpic">
        <img src={thirteen}/>
    </div>
    <div className="content">
        <div>
            <h2>IT WING</h2>
            <p>This wings handles the technical stuff.</p>
        </div>
    </div>
</div>
</div>
</div>
</div>
 <br/><br/>
 {/* <!-- footer --> */}
 <footer id="contact">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4 col-12">
                <div className="footer_box">
                    <div className="footer_header">
                        <div className="footer_logo">
                            <img src={logo} alt="evento"/>
                        </div>
                    </div>
                    <div className="footer_box_body">
                        <p>
                            <div className="address">
                            <p style={{fontSize:"25px", fontFamily: "'Abril Fatface', cursive"}}>Address</p> <br/>
                            <p style={{fontSize:"16px"}}>National Institute of Technology Durgapur <br/> राष्ट्रीय प्रौद्योगिकी संस्थान दुर्गापुर </p>
                            <p style={{fontSize:"14px"}}>(An Institute of National Importance under Government of India, <br/>Ministry of Human Resource Development)
                            <br/>Mahatma Gandhi Avenue, Durgapur 713209, West Bengal, INDIA</p>
                        </div>
                        <div className="address" style={{paddingTop: "10px"}}>
                            <p style={{fontSize:"25px", fontFamily:" Abril Fatface, cursive"}}>Email</p>
                            <p><i className="fa fa-envelope">&nbsp;<a href="mailto:spicmacay.nitd@gmail.com" style={{fontSize: "18px"}}> spicmacay.nitd@gmail.com </a></i></p>
                        </div>
                        </p>
                        <ul className="footer_social">
                            <li>
                                <a href="https://www.facebook.com/spicmacaynitd/"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCJP84NlZI4fTP20cHPLo7Lw/featured"><i className="fa fa-youtube"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/spic.macay_nitd"><i className="fa fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12">
                <div className="footer_box">
                    <div className="footer_header">
                        <div className="footer_logo">
                            <img src={logo} alt="evento"/>
                        </div>
                    </div>
                    <div className="footer_box_body">
                        <p>
                            <p style={{fontSize:"16px"}}><b><i>President: </i></b>Akshat Jain</p>
                            <p><i className="fa fa-phone">&nbsp;<a href="tel:+8759579260"> +91 8759579260</a></i><br/><i className="fa fa-envelope">&nbsp;<a href="mailto:aritra240@gmail.com">  aritra240@gmail.com</a></i></p>
                            <p></p>
                            <p style={{fontSize:"16px"}}><b><i>Vice President: </i></b>Sohom Mukherjee</p>
                            <p><i className="fa fa-phone"><a href="tel:+8240442405">&nbsp; +91 8240442405</a></i><br/><i className="fa fa-envelope">&nbsp;<a href="mailto:tiasha.biswas@gmail.com"> tiasha.biswas@gmail.com</a></i></p>
                            <p></p>
                            <p style={{fontSize:"16px"}}><b><i>Secretary : </i></b>Sankalp Choubey</p>
                            <p><i className="fa fa-phone"><a href="tel:+9903862798">&nbsp; +91 9903862798</a></i><br/><i className="fa fa-envelope">&nbsp;<a href="mailto:rajdeepgolder@gmail.com">rajdeepgolder@gmail.com</a></i></p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <div className="footer_box">
                    <div className="footer_header">
                        <h4 className="footer_title">
                            locate us
                        </h4>
                    </div>
                    <div className="footer_box_body">
                        <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.577948545365!2d87.29095021453448!3d23.547677702408144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f772081cede5e9%3A0x33fb9ccb243dfa5!2sNational+Institute+of+Technology!5e0!3m2!1sen!2sin!4v1541686389902" height="300px" style={{border:"0"}} allowfullscreen></iframe></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<div className="copyright_footer">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 col-12">
                <p></p>
            </div>
            <div className="col-12 col-md-6 ">
                <ul className="footer_menu">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#events">Events</a>
                    </li>
                    <li>
                        <a href="#team">Team Members</a>
                    </li>
                    <li>
                        <a href="#wings">Wings</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>      
            </div>
        );
    }
}

export default Main;  