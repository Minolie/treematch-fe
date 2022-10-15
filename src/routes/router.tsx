import { Route, Routes } from 'react-router-dom';

import SignIn from '../components/Auth/SignIn';
import ROUTE from './routes';

const Router = () => (
    <Routes>
        <Route path={ROUTE.SIGNIN} element={<SignIn/>}></Route>
    </Routes>
);

export default Router;