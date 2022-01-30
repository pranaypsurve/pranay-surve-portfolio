import { useState , useEffect } from 'react';
const Resume = ()=>{
    const [fetchResume,setStateRume] = useState(true);
    document.title="Resume";
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setStateRume(false);
         },1300);
         return ()=>clearTimeout(timer);
    },[]);
    return (
        <>
        <section className="" style={{height:"50vh"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className="text-center text-break">
                            {fetchResume?(<h1>Loading <span className="spinner-border text-secondary" role="status" aria-hidden="true"></span></h1>):(<h1>Network Problem Detected,try after some time</h1>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Resume;