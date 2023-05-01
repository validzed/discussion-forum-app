/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function App() {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

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

  return (
    <div className="dark:bg-slate-800 bg-white">
      <header>
        <img className="h-20 w-auto" src="./icons/logo.svg" alt="Logo" />
        <p className="text-2xl dark:text-white">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="bg-sky-900 text-white mt-3" type="button" onClick={onChangeTheme}>
          Change Theme
        </button>
      </header>
      <main>
        <h2 className="mt-3 text-3xl text-slate-900 dark:text-slate-100">Title Discussion</h2>
        <p className="text-xl font-light text-slate-900 dark:text-slate-100">
          Tailwind CSS is a utility-first CSS framework for rapid UI development created by Adam
          Wathan, Jonathan Reinink, David Hemphill and Steve Schoger.
        </p>
      </main>
    </div>
  );
}

export default App;
