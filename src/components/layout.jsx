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

const NavigationBar = () => {
    return (
        <header>
            <nav className={"navbar navbar-expand-sm border-bottom mb-3"}>
                <img src={nasaLogo} alt={"Nasa logo."} style={{width: "3%", height: "3%"}}/>
                <div className={"navbar-collapse collapse d-sm-inline-flex justify-content-between"}>
                    <ul className={"navbar-nav flex-grow-1"}>
                        <Link className={"nav-link text-light"} to={'/'}>Home</Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
}


export default Layout;