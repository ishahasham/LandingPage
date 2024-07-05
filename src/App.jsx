import React from 'react'
import './App.css';
import logo from './assets/logo.png'
import p1 from './assets/p1.png'
import p2 from './assets/p2.png'
import p3 from './assets/p3.jpg'
import p4 from './assets/p4.jpg'
import p5 from './assets/p5.png'
import p6 from './assets/p6.jpg'
import p7 from './assets/p7.jpg'
import p8 from './assets/p8.png'
import p9 from './assets/p9.png'
import p10 from './assets/p10.png'
import p11 from './assets/p11.jpg'
import p12 from './assets/p12.png'
import p13 from './assets/p13.png'
import p14 from './assets/p14.png'
import p15 from './assets/p15.png'
import p16 from './assets/p16.png'
import p17 from './assets/p17.png'
import p18 from './assets/p18.png'
import p19 from './assets/p19.png'
import vector from './assets/vector.svg'
import vector2 from './assets/vector2.svg'
import vector3 from './assets/vector3.svg'
import vector4 from './assets/vector4.svg'
import vector5 from './assets/vector5.svg'
import vector6 from './assets/vector6.svg'
import vector7 from './assets/vector7.svg'
import headinglogo from './assets/headinglogo.png'
import Card from './Card/Card';
import { Button } from './Button/Button';

function App() {
 return (
    <>
{/* navbar */}
  <nav className="navbar navbar-expand-lg fixed-top bg-white ">
  <div className="container-fluid ">
    <a className="navbar-brand " href="#"><img src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ps-5 ms-5  " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ps-5 ms-5 m-1 grid gap-3" >
      <li className="nav-item dropdown ">
          <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Home One</a></li>
            <li><a className="dropdown-item" href="#">Home Two</a></li>
            <li><a className="dropdown-item" href="#">Home Three</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">About</a></li>
            <li><a className="dropdown-item" href="#">Instructor</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Login</a></li>
            <li><a className="dropdown-item" href="#">Signup</a></li>
            <li><a className="dropdown-item" href="#">Events</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link  active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Course</a></li>
            <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
            <li><a className="dropdown-item" href="#">Course List</a></li>
            <li><a className="dropdown-item" href="#">Course Single</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle  active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Blog</a></li>
            <li><a className="dropdown-item" href="#">Blog Single</a></li>
      
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search course" aria-label="Search"/>
        <button className="btn " type="submit">
        <img src={vector5} alt="" /></button>
      </form>
    </div>
  </div>
  </nav> 

  <br />

  {/* carousel */}
  <div id="carouselExample" class="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={p4} className="d-block w-100 " alt="..."/>
      <div className='carouselImageText'>
      <h3 className='carouselh3'>Great Quality Cocial Life </h3>
      <h1 className='carouselText '>Discover the world of<br />possible University</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img src={p7} className="d-block w-100" alt="..."/>
      <div className='carouselImageText'>
      <h3 className='carouselh3'>Great Quality Cocial Life </h3>
      <h1 className='carouselText '>Discover the world of<br />possible University</h1>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br /><br /><br />

{/* card */}
    <h2 className="cardh2">Academices <br /> <img src={headinglogo} alt="" /></h2><br />
    <Card imgSrc={p2} title="Learn More" desc="Lets Talk about Science"/>
    <Card imgSrc={p8} title="Learn More" desc="Innovative Courses"/>
    <Card imgSrc={p9} title="Learn More" desc="Cloud Storage"/>
    <Card imgSrc={p13} title="Learn More" desc="Online Eduction"/>
<br /><br />

{/* introduction topic */}
  <div className='intro'>
    <div>
      <img src={p15} alt="" />
    </div>
    <div className='introdiv'>
      <h1 className='introText' >Welcome to <br />
      Echooling LMS Platform</h1> <br />
      <p className='introPara'>
      Education is both the act of teaching knowledge to others and <br />
      the act of receiving knowledge from someone else.
      </p>
      <a href="..">Have questions? Get Free Guide</a> <hr />
        <p className='introPara'>Education also refers to the knowledge received through schooling instruction <br />
        and to the institution of teaching as a whole. The main purpose of education <br />
        is the integral development of a person.</p>
        <br /><br />
        <div className='btnDiv1'>
        <Button btnText='Read more'/>
        </div>
    </div>
  </div>
  <br /><br />
  {/* Campus life */}
    <div className='campuslife'>
      <div className='campusH'>
      <h2 className="cardh2">Campus Life <br /> <img src={headinglogo} alt="" /></h2>
      </div>
      <div className='campusDiv'>
        <div className='campusD'>
          <div>
            <h6 className='campush5'>Do More, Stress Less</h6>
            <p>Why I say old chap that is spiffing he legged <br />
            it in my flat easy peasy.</p>
          </div>
          <hr />
          <div>
            <h6 className='campush5'>Do More, Stress Less</h6>
            <p>Why I say old chap that is spiffing he legged <br />
            it in my flat easy peasy.</p>
          </div>
          <hr />
          <div>
            <h6 className='campush5'>Do More, Stress Less</h6>
            <p>Why I say old chap that is spiffing he legged <br />
            it in my flat easy peasy.</p>
          </div>
        </div>
        <div>
          <img src={p14} alt="" />
          <img src={p18} className='img18' alt="" />
        </div>
      </div><br /><br />
      <div className='btnDiv2'>
        <Button btnText='More about Campus Life  '/>
        </div>
        <br />
    </div>
  <br /><br />

  {/* Popular Courses */}
  <div>
  <div className='campusH'>
      <h2 className="cardh2">Popular Courses <br /> <img src={headinglogo} alt="" /></h2>
      </div>
    <div className='pop1'>
    <Card imgSrc={p1} title="UX Design" desc=" Dave conservatoire is the Entirely free online"/>
    <Card imgSrc={p5} title="UX Design" desc="Strategy law and Organization foundation"/>
    <Card imgSrc={p10} title="UX Design" desc="Python for Data Science & Machine Learning"/>
    <Card imgSrc={p12} title="UX Design" desc="The complete web develop Ment bootcamp."/>
    <div className='btnDiv3'>
        <Button btnText='More about Campus Life  '/>
        </div>
        <br />
    </div><br />
    <div className='pop2'>
      <div>
        <h2>Successfully <br />
          Trained</h2>
          <h1>1478</h1>
          <h6>ENROLLED LEARNER</h6>
  
      </div><hr />
      <div>
        <h2>Successfully <br />
          Trained</h2>
          <h1>1731</h1>
          <h6>ENROLLED LEARNER</h6>
      </div><hr />
      <div>
        <h2>Successfully <br />
          Trained</h2>
          <h1>280</h1>
          <h6>ENROLLED LEARNER</h6>
      </div><hr />
      <div>
        <h2>Successfully <br />
          Trained</h2>
          <h1>1045</h1>
          <h6>ENROLLED LEARNER</h6>
      </div>
    </div>
    </div>
<br /><br />
    {/* Upcoming Events */}
    <div className='upcom1'>
    <div className='campusH'>
      <h2 className="cardh2">Upcoming Events <br /> <img src={headinglogo} alt="" /></h2>
      </div>
      <div>
      <Card d1={10} t1="January 2022" title="03:00PM-04:30PM"  desc="A better Alternative to Grading Student Writing"/>
    <Card d1={13} t1="April 2022"  title="03:00PM-04:30PM" desc="12 Things Successful Mompreneurs"/>
    <Card d1={10} t1="August 2022" title="03:00PM-04:30PM" desc="Ethics in AI Live Event Machines Judging"/>
    <Card d1={4} t1="October 2022"  title="03:00PM-04:30PM" desc="The Importance of Intrinsic Motivation."/>
      </div>
    </div><br /><br /><br />

    {/* student saying */}
    <div>
      <div className='pt-5'>
    <h2 className="cardh2 ">What are Student saying <br /> <img src={headinglogo} alt="" /></h2>
    </div>
    <div className='say1'>
      <div>
        <img src={p19} className='w-100 h-100 p-3' alt="" />
      </div>
      <div>
        <b>Justin Case</b><br />
        <p>Student</p><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Laboriosam cumque consequuntur maiores <br /> 
          deleniti porro repellat ducimus magni doloribus rem iusto 
          aliquam, quibusdam fugit quod <br /> consequatur?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
    </div>
    </div>

    <br />
    {/* news and bags */}
    <div className='upcom1'>
    <div className='campusH'>
      <h2 className="cardh2">Echooling News and Bags <br /> <img src={headinglogo} alt="" /></h2>
      </div>
      <div>
      <Card imgSrc={p3} title="Education" desc="Kids future Schools & Corona Prevent to Growth"/>
    <Card imgSrc={p6} title="Education" desc="Echooling future Schools & social Innovation"/>
    <Card imgSrc={p11} title="Education" desc="7 Learning system design tips For better eLearning"/>
    <Card imgSrc={p3} title="Education" desc="Why schools should continue remote study"/><br /><br /><br /><br /><br />
      </div>
    </div>

    {/* footer */}
    <footer className="footer1">
  	 <div className="container1">
  	 	<div className="row1">
  	 		<div className="footer-col1">
  	 			<img src={logo} alt="" />
  	 			<ul>
  	 				<li><a href="#">There are course and event custom
                  post types so you can easily create and
                  manage course, events.
            </a></li><br />
  	 				<li><a href="#">+(402) 762 441 83</a></li>
  	 				<li><a href="#">info@echooling.com</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col1">
  	 			<h4>About Us</h4>
  	 			<ul>
  	 				<li><a href="#">About</a></li>
  	 				<li><a href="#">Courses</a></li>
             <li><a href="#">Events</a></li>
             <li><a href="#">Career</a></li>
             <li><a href="#">Become a Teacher</a></li>
             <li><a href="#">Contact</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col1">
  	 			<h4>Useful Links</h4>
  	 			<ul>
  	 				<li><a href="#">Browse Library</a></li>
  	 				<li><a href="#">Library</a></li>
  	 				<li><a href="#">Partners</a></li>
  	 				<li><a href="#">News and Blog</a></li>
             <li><a href="#">FAQ</a></li>
             <li><a href="#">Tutorials</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col1">
  	 			<h4>Newsletter</h4>
  	 			<div className="emails">
            <p className='text-white'>Get the latest Echooling news <br />
            delivered to you inbox</p>
  	 				<input type="text" placeholder='Enter your email' className='input1' />
            <button className='input2'><img src={vector} alt="" /></button>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </>
  )
}

export default App
