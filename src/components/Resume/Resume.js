import React , { useState , useEffect } from 'react';
// import { AiOutlineDownload } from "react-icons/ai";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document, Page , pdfjs} from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import '../style.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const Resume = ()=>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [fetchResume,setStateRume] = useState(true);
    const [width, setWidth] = useState(1200);
    document.title="Resume";
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setStateRume(false);
         },1300);
         return ()=>clearTimeout(timer);
    },[]);

   

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  window.addEventListener('resize', ()=>{setWidth(window.innerWidth);});

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const nextPage = ()=>{
    setPageNumber(pageNumber+1);
  }
  const prevPage = ()=>{
    setPageNumber(pageNumber - 1);
  }
    return (
        <>
        <section className="">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className="text-center text-break">
                            {fetchResume?(<h1>Loading..<span className="spinner-border text-secondary" role="status" aria-hidden="true"></span></h1>):(<> <Document file="/PHP_Web_Developer_Resume_2022.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber}  scale={width < 1024 ? 0.5 : 1.7} />
                        </Document> 
                            <p style={{paddingTop:'10px',fontSize:'x-large'}} className='text-center'>Page {pageNumber} of {numPages} &nbsp;
                            {
                                (
                                    (numPages) ? (pageNumber < numPages) ? <span style={{cursor:'pointer'}} onClick={nextPage}> <button className='btn btn-success'> Next > </button> </span>  : <span style={{cursor:'pointer'}} onClick={prevPage}> <button className='btn btn-success'> Previous </button> </span> : ''
                                )
                            }
                            </p></>)}
                        </div>
                        <div className='text-center mb-3'>
                        <a href="/PHP_Web_Developer_Resume_2022.pdf" className='btn btn-warning' target="_blank" download="/PHP_Web_Developer_Resume_2022.pdf"><FileDownloadIcon /> Download Resume</a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Resume;