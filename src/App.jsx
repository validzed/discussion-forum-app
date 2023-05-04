import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { path } from './utils';
import { asyncPreloadProcess } from './states/isPreload/action';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';

function App() {
  const firstRun = React.useRef(true);
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (firstRun.current) {
      dispatch(asyncPreloadProcess());
      firstRun.current = false;
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const onChangeTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <Routes>
        <Route path={`${path.LOGIN_PAGE}*`} element={<LoginPage />} />
        <Route path={path.REGISTER_PAGE} element={<RegisterPage />} />
      </Routes>
    );
  }

  return (
    <>
      <header>
        <Navigation authUser={authUser} />
      </header>
      <main>
        <Routes>
          <Route path={path.HOME_PAGE} element={<HomePage />} />
          <Route path={path.ADD_THREAD_PAGE} element={<AddPage />} />
          <Route path={path.THREAD_DETAIL} element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
