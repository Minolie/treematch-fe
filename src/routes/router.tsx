import { Route, Routes } from "react-router-dom";

import ROUTE from "./routes";

import Home from "../components/base/home";
import Quiz from "../components/quiz/quiz-view/quiz";

const Router = () => (
  <Routes>
    <Route path={ROUTE.HOME} element={<Home />}></Route>
    <Route path={ROUTE.QUESTIONNAIRE} element={<Quiz />}></Route>
  </Routes>
);

export default Router;
