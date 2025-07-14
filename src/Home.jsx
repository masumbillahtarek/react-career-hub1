import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"


const Home = () => {
    return (
        <div>
           <div className="mx-24 my-12">
             <Header></Header>
           
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;