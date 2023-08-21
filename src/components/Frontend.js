import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Frontend = ({navPath}) =>{
    return (
        <div>
            <Header  navPath={navPath}/>
            <Outlet/>
            <Footer/>
       </div>
    );

}


export default Frontend;

