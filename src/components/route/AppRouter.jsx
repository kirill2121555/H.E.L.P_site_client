import Error from './../Error/error'
import React from 'react'
import { Route , Routes} from 'react-router-dom';
import { useContext } from 'react'
import { Context } from '../..'
import { authRoutes, publicRoutes } from './route'
import { observer } from 'mobx-react-lite'





const AppRouter= observer(()=>{
const{user}=useContext(Context)
   

return(
        <Routes> 
            {(user.isAuth) && authRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element} exact/>
                )}

            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element} exact/>
            )}




        <Route
                            path="*"
                            element={<Error to="/Error" />}
                        />
        </Routes>

    )})



export default AppRouter