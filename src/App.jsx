import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { asyncPreloadProcess } from './states/isPreload/action';
import LoginPage from './pages/LoginPage';

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
        <Route path="/*" element={<LoginPage />} />
      </Routes>
    );
  }

  return (
    <h1>HomePage</h1>
  );
}

export default App;
