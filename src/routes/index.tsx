import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { PrivateRouter } from './PrivateRoute'
import { PublicRouter } from './PublicRoutes'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* CORREÇÃO: antes estava <PrivateRouter>{<Home/>}</PrivateRouter>
                    As chaves {} em volta de <Home/> são desnecessárias.
                    JSX já é uma expressão — você só usa {} quando quer
                    "escapar" para JavaScript (ex: {variavel}, {1 + 1}).
                    Como <Home/> já é JSX puro, passamos direto. */}
                <Route path='/home' element={<PrivateRouter><Home /></PrivateRouter>} />
                <Route element={<PublicRouter />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/registro' element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
