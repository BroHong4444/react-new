import HomePage from './pages/HomePage';
import Header from "./components/header/Header";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CoursePage from './pages/CoursePage';
import CategoryPage from './pages/CategoryPage';
import NewsPage from './pages/NewsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/course" element={<CoursePage/>} />
            <Route path="/category" element={<CategoryPage/>} />
            <Route path="/it-news" element={<NewsPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path='*' element={< NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
