import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Layout from "../../components/Layouts/Layout"
import withAuth from "../../hoc/withAuth"
import { checkAuthStatus } from "../../redux/slices/authSlice"

const DashBoard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkAuthStatus())
    }, [])
    
    return (
        <Layout>
            <p>This is Protected Page</p>
        </Layout>
    )
}

export default withAuth(DashBoard)