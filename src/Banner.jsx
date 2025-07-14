

const Banner = () => {
    return (
        <div className="flex justify-between items-center my-4">
           <div >
            <h2 className="text-4xl font-bold">One Step Closer To Your Dream Job</h2>
            <p className="text-xl my-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-2xl">Get Started</button>
           </div>
           <div>
            <img src='../assets/images/user.png' alt="" />
            </div> 
        </div>
    );
};

export default Banner;