import React from "react"
import {Outlet} from "react-router-dom"


const Layout = () => {
    return(
        <div>
            <header style={{background: "lightgray", padding:16, fontSize:24}}>
                Header 헤더
            </header>

            <Outlet/>
        </div>
    )


}
export default Layout;
