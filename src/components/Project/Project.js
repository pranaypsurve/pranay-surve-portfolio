import projects from './projects';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import React from 'react'; 
const Project = () => {
    // console.log('projects');
    document.title="Projects";
    return (
        <section className="mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <h1 className="text-center">My Recent Works</h1>
                    </div>
                    {
                        projects.map((item)=>{
                            return <div className="col-md-4 mt-5" key={item+Math.random(1,6)}>
                            <div className="card project-card-view" style={{width: "18rem"}}>
                                <img src={item.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title text-center" style={{fontWeight:'bold'}}>{item.name}</h5>
                                        <p className="text-center">
                                        Technology: {item.technology}
                                        </p>
                                        <p className="card-text" style={{textAlign: "justify"}}>{item.desc}</p>
                                        <div className="text-center"><a href={item.webLink} target='_blank' rel="noreferrer" className="btn btn-primary"><OpenInNewIcon /> Visit Project</a></div>
                                    </div>
                            </div>
                        </div>;
                        })
                    }
                    
                </div>
            </div>
        </section>
    );
}
export default Project;