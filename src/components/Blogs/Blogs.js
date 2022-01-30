import React , {useState,useEffect} from 'react'; 
const Blogs = () => {
    const [loadBlogs, setloadBlogs] = useState(true);
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setloadBlogs(false);
         },1300);
         return ()=>clearTimeout(timer);
    },[]);
    return (
        <section className="mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <h1 className="text-center">My Blogs</h1>
                    </div>
                    <div className="col-md-12 mt-5">
                        <div className="text-center text-break">
                            {loadBlogs?(<h1>Loading <span className="spinner-border text-secondary" role="status" aria-hidden="true"></span></h1>):(<h1>Page is Under Scheduled maintenance</h1>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Blogs;