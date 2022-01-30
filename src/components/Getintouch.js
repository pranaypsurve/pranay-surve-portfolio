import React , {useState,useEffect} from 'react'; 
const Getintouch = () => {
    // console.log('projects');
    // document.title="Blogs";
    const [loadBlogs, setloadBlogs] = useState(true);
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setloadBlogs(false);
         },1300);
         return ()=>clearTimeout(timer);
    },[]);
    return (
        <section className="pt-5 pb-5" style={{background:"azure"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">Get In Touch</h1>
                    </div>
                    <div className="col-md-12 mt-5">
                        <div className="text-center text-break">
                            <h4>
                            I'm currently looking for full-time Software Engineering or React js opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at,<a  href="mailto:pranaysurve51@gmail.com">pranaysurve51@gmail.com</a>.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Getintouch;