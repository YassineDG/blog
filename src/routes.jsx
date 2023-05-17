
import {useRoutes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'

export default function Routes() {
    const router = useRoutes([
        {
            path:"/",
            element:<Home/>,
        },
        {
            path:"/Contact",
            element:<Contact/>,
        },
    ])
    return router
    




}
