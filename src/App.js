import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact';
// import Blogs from "./components/Blogs/Blogs";
import Navbar from './components/Navbar';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import Getintouch from "./components/Getintouch";
import PageNotFound from "./components/PageNotFound";
const App = ()=>{
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // custom scroll 
  // window.onscroll = ()=>{
  //   if(document.documentElement.scrollTop > 400 || document.body.ScrollTop > 400){
  //     document.getElementById('scrollArrow').style.display='block';
  //   }else{
  //     document.getElementById('scrollArrow').style.display='none';
  //   }
  // }
  // const gototop = (e)=>{
  //   // alert(1)
  //   window.scrollTo(0,0);
  //   // document.body.ScrollTop = 0;
  //   // document.documentElement.ScrollTop = 0;
  // }
  // custom scroll ends

  return(
    <BrowserRouter>
    { load?(
       <div id={load ? "preloader" : "preloader-none"}>
       <Loader
         type="Plane"
         color="#343e47"
         height={100}
         width={100}
       />
     </div> ) : (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/contact' component={Contact} />
        <Route component={PageNotFound} />
        {/* <Route exact path='/blogs' component={Blogs} /> */}
      </Switch>
      {/* <Contact /> */}
    </React.Fragment>)
    }
    <Getintouch />
    <ScrollToTop smooth />
    {/* <div className="scroll-top-custom" id="scrollArrow" onClick={gototop}>
      Goto Top
    </div> */}
    </BrowserRouter>
  )
}
export default App