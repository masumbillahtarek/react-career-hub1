import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "./LocalStorage";

const JobDetails = () => {
    const jobs=useLoaderData();
    const{id}=useParams();
    const makeInt=parseInt(id);
    const job=jobs.find(job=>job.id===makeInt);
    console.log(id,job)

    const{educational_requirements,experiences,job_description,job_responsibility,salary,job_title}=job
     const{phone,email,address}=job.contact_information
     const handleApplyJob=()=>{
      saveJobApplication(makeInt)
      toast('You have Applied SuccessFully')
     }
    return (
      <div className="flex justify-between gap-8 my-12 items-center">
        <div className="flex flex-col gap-2">
            <h3><span className="text-xl font-bold">Job Description :</span>{job_description}</h3>
              <h3><span className="text-xl font-bold">Job Responsibility :</span>{job_responsibility}</h3>
              <h3 className="text-xl font-bold">Educational Requirements :</h3>
              <p >{educational_requirements}</p>
              <h3 className="text-xl font-bold">Experience : </h3>
              <p>{experiences}</p>
        </div>
        <div className="w-full">
          <div className="bg-[#1eb1f00a] p-4 rounded-2xl my-4 flex flex-col gap-2">
             <h3 className="text-2xl font-bold">Job Details</h3> 
           <p><span className="text-xl font-bold">Salary : </span>{salary}</p>
           <p><span className="text-xl font-bold">Job Title : </span>{job_title}</p>
           <h3 className="text-2xl font-bold">Contact Information </h3>
           <p><span className="text-xl font-bold">Phone : </span>{phone}</p>
            <p><span className="text-xl font-bold">Email : </span>{email}</p>
             <p><span className="text-xl font-bold">Address : </span>{address}</p>
          </div>
          <button onClick={handleApplyJob} className="w-full rounded-2xl bg-cyan-500 text-white py-2">Apply Now</button>
        </div>
          <ToastContainer />
        </div>
    );
};

export default JobDetails;
{/*
     
*/}