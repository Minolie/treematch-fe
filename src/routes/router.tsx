import { Route, Routes } from 'react-router-dom';

import ROUTE from './routes';

import SignIn from '../components/auth/sign-in';
import Home from '../components/base/home';
import Quiz from '../components/quiz/quiz-view/quiz';

const Router = () => (
    <Routes>
        <Route path={ROUTE.HOME} element={<Home/>}></Route>
        <Route path={ROUTE.SIGNIN} element={<SignIn/>}></Route>
        <Route path={ROUTE.QUESTIONNAIRE} element={<Quiz/>}></Route>
        {/* <Route path={ROUTE.QUESTIONNAIRE} element={<Quiz/>}/></Route> */}
    </Routes>
);

export default Router;