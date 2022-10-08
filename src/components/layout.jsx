import {
    Link,
    Outlet
} from "react-router-dom";
import nasaLogo from "../assets/nasa-logo.png"

const Layout = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className={"main-container"}>
                <Outlet/>
            </div>
            <Footer></Footer>
        </>
    )
}


export default Layout;