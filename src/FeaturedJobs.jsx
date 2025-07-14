import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([])
    const[all,setAll]=useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center my-8">
                <h3 className="text-4xl font-bold mb-5">Featured Jobs</h3>
                <p className="text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
           <div className="grid grid-cols-2 gap-11 my-8">
            {
                jobs.slice(0,all).map(job=><FeaturedJob job={job}></FeaturedJob>)
            }
           </div>
           <div className={` flex justify-center ${all<jobs.length?'':'hidden'}`}>
            <button onClick={()=>setAll(jobs.length)} className="bg-cyan-500 text-white px-4 py-2 rounded-2xl">See All Jobs</button>
           </div>
        </div>
   
    );
};

const FeaturedJob=({job})=>{
    console.log(job)
 const{id,logo,job_title,company_name,location,job_type,salary,remote_or_onsite}=job
   
    return(
        <div className=" flex flex-col gap-4 bg-[#100f0f09] p-6 rounded-2xl">
         <div >
            <img className="w-48 h-20 mb-4" src={logo} alt="" />
            <h3 className="text-3xl font-bold mb-4">{job_title}</h3>
            <p className="text-xl">{company_name}</p>
         </div>
         <div className="flex gap-8">
            <button className="text-xl text-cyan-500 bg-white border-2 border-cyan-500 rounded-2xl px-4 py-2 mr-4">{remote_or_onsite}</button>
            <button className="text-xl text-cyan-500 bg-white border-2 border-cyan-500 rounded-2xl px-4 py-2 ml-4">{job_type}</button>
         </div>
         <div className="flex gap-12 items-center">
            <div className="flex gap-4 items-center"><img className="w-[20px] h-[20px]" src="../assets/images/location.png" alt="" /><p>{location}</p></div>
            <div className="flex gap-4 items-center"><img className="w-[20px] h-[20px]" src="../assets/images/salary.png" alt="" /><p>{salary}</p></div>
         </div>
         <div>
          <Link to={`/job/${id}`}>  <button className="bg-cyan-500 text-white px-4 py-2 rounded-2xl">View Details</button></Link>
         </div>
        </div>
    )    
}  
export default FeaturedJobs;
   {/* 
       const[phone,email,address]=job.contact_information
       educational_requirements,experiences
       job_description,job_responsibility,,
    */}