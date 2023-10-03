import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import AuthContext from '../../contexts/auth-provider'

const Protecter = () => {

    const { auth } = useContext( AuthContext )
    const location = useLocation()

    return (
        auth?.user
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default Protecter