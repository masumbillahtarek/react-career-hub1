import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "./LocalStorage";


const AppliedJobs = () => {
    const jobs=useLoaderData()
    const[appliedJobs,setAppliedJobs]=useState([])
    const[displayJobs,setDisplayJobs]=useState([])
    const handleJobsFilter=(filter)=>{
        if(filter==='all'){
            setDisplayJobs(appliedJobs)
        }else if(filter==='remote'){
const remoteJobs=appliedJobs.filter(job=>job.remote_or_onsite==='Remote')
setDisplayJobs(remoteJobs)
        }else if(filter==='onsite'){
const onsiteJobs=appliedJobs.filter(job=>job.remote_or_onsite==='Onsite')
setDisplayJobs(onsiteJobs)
        }
    }
    useEffect(()=>{
        const storedJobIds=getStoredJobApplication()
        if(jobs.length>0){
           // const jobsApplied=jobs.filter(job=>storedJobIds.includes(job.id))
           // console.log(jobsApplied)
           const jobsApplied=[]
           for(const id of storedJobIds){
            const job=jobs.find(job=>job.id===id)
            if(job){
                jobsApplied.push(job)
            }
           }
           setAppliedJobs(jobsApplied)
           setDisplayJobs(jobsApplied)
           // console.log(jobsApplied)
        }
    },[jobs])
    return (
        <div>
            <h2>Applied Jobs : {appliedJobs.length}</h2>
<details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleJobsFilter('all')}><a>All</a></li>
    <li onClick={()=>handleJobsFilter('remote')}><a>Remote</a></li>
    <li onClick={()=>handleJobsFilter('onsite')}><a>Onsite</a></li>
  </ul>
</details>
<div>
                {
                    displayJobs.map(appliedJob=><AppliedJob appliedJob={appliedJob}></AppliedJob>)
                }
            </div>
            {/*<div>
                {
                    appliedJobs.map(appliedJob=><AppliedJob appliedJob={appliedJob}></AppliedJob>)
                }
            </div>*/}
        </div>
    );
};
const AppliedJob=({appliedJob})=>{
const{logo,job_title,company_name,location,job_type,salary,remote_or_onsite}=appliedJob
    return(
        <div className="flex gap-8 items-center my-4">
            <div className="bg-[#6a686815] py-[67px] px-6 rounded-2xl">  <img className="w-48  h-20 mb-4" src={logo} alt="" /></div>
            <div className=" flex flex-col gap-4  p-6 rounded-2xl w-full">
         <div >
          
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
         
        </div>
        </div>
    )
}
export default AppliedJobs;