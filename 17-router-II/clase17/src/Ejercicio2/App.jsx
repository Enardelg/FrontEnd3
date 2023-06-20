import { useRoutes } from 'react-router-dom'
import GameDetail from './routes/games/GameDetail'
import Index from './routes/index'

const App = () => {
    // estas son rutas anidadas, por eso uso useRoutes + {router}
    // y no createBrowserRouter + <RouterProvider>
    // para ver ese ejemplo, mirar MainLayout (es mas complejo)
    const router = useRoutes([
        { path: '/', element: <Index /> },
        { path: '/games/:id', element: <GameDetail /> },
        { path: '*', element: <div> 404 Not Found</div> },
    ])

    return (
        <>
            {router}
        </>
    )
}

export default App