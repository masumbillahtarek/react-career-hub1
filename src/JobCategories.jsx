import { useEffect, useState } from "react";


const JobCategories = () => {
    const[categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <div className="text-center my-5">
                <h2 className="text-4xl font-bold">Job Category List</h2>
                <p className="text-lg my-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
          <div className="flex justify-between">
              {
                categories.map(category=><JobCategory category={category}></JobCategory>)
            }
          </div>
        </div>
    );
};
const JobCategory=({category})=>{
    const{logo,category_name,availability}=category
    return(
       <div className="flex flex-col bg-[#7e8ffe30] p-6 rounded-2xl">
        <img className="w-12" src={logo} alt="" />
        <h2 className="text-xl font-bold my-3">{category_name}</h2>
        <h3>{availability}</h3>
       </div> 
    )
}
export default JobCategories;