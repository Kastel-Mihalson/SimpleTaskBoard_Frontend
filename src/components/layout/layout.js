import { Outlet } from "react-router-dom"
import './layout.css'

const Layout = () => {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default Layout