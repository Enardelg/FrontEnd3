import { useRoutes } from 'react-router-dom'
import Index from './routes/Index'
import PostDetail from './routes/posts/PostDetail'


function App() {
    const router = useRoutes([
        { path: '/', element: <Index/>},
        { path: '/posts/:id', element: <PostDetail/>},
        { path: '*', element: <h2>404 Not Found</h2>}
    ])

    return (
        <>
        {router}
        </>
    )
}

export default App