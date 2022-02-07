import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import aboutImage from '../../';
const About = () => {
    document.title="About";
    // const query = new URLSearchParams(useLocation().search);
    // console.log(query.get('name'));
    // console.log(query.get('surname'));
    useEffect(()=>{
        window.scroll(0,0);
        // console.log(useLocation());
    },[]);
    return (
        <>
            <section className="aboutus" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5 mb-5">
                            <h1 className="text-center" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                                <strong className="purple">About Me</strong>
                            </h1>
                            <blockquote className="blockquote mb-0">
                                <p style={{ textAlign: "justify" }}>
                                    Hi Everyone, I am <span className="purple">Pranay Surve </span>
                                    from <span className="purple"> Mumbai, India.</span>
                                    <br />
                                    Software Engineer who loves to transform ideas into reality using
                                    code.
                                    <br />
                                    Motivated designer and developer with experience creating
                                    custom websites with ReactJs, JavaScript, HTML5, CSS3.Using ReactJs, Javascript, Php, Codeigniter, nodejs, Express js.
                                    <br />
                                    Apart from coding, some other activities that I love to do!
                                </p>
                                <ul className="">
                                    <li className="about-activity">
                                        <ArrowCircleRightIcon /> Playing Games
                                    </li>
                                    <li className="about-activity">
                                        <ArrowCircleRightIcon /> Writing Tech Blogs
                                    </li>
                                    <li className="about-activity">
                                        <ArrowCircleRightIcon /> Travelling
                                    </li>
                                    <li className="about-activity">
                                        <ArrowCircleRightIcon /> Doing Research on Specific Topics
                                    </li>
                                </ul>
                            </blockquote>
                        </div>
                        <div className="col-md-6 mt-5 mb-5">
                            <img src='assests/images/developer_pranay_surve.jpg' className='img-fluid rounded' height="250" />
                        </div>
                        
                    </div>
                </div>
            </section>
            <section style={{paddingBottom:"10%",background:"white",color:'black',fontSize:'35px'}}>
                <div className='container'>
                    <div className='row'>
                    <div className='col-md-12'>
                            <div className='text-center pt-5 pb-5'>
                                <h1>Skills</h1>
                            </div>

                            <nav className="skills-tabs nav nav-tabs" id="nav-tab" role="tablist">
                                {/* <div className="nav nav-tabs" id="nav-tab" role="tablist"> */}
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Technical Skills</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Soft Skills</button>
                                {/* </div> */}
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div>
                                                <p className="lead mb-1 mt-2">Php</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">SQL</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">Node js</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "45%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">MongoDb</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "45%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">HTML5/CSS3/Bootstrap</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div>
                                                <p className="lead mb-1 mt-2">JavaScript</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">React</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">Express js</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "48%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">Codeigniter</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">Git/GitLab</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className='row'>
                                        <div className='col-md-6'>
                                            <div>
                                                <p className="lead mb-1 mt-2">Goal-Oriented</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">Collaboration</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">Positivity</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">Adaptability</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div>
                                                <p className="lead mb-1 mt-2">Problem Solving</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">Empathy</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">Organization</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="lead mb-1 mt-2">Creativity</p>
                                                <div className="progress" >
                                                    <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default About;