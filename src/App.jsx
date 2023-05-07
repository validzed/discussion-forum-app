/* eslint-disable no-shadow */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser, asyncSetAuthUser } from './states/authUser/action';
import { asyncPopulateUsersAndThreads } from './states/shared/action';
import { asyncAddThread, asyncNeutralizeThreadVote, asyncUpvoteThread } from './states/threads/action';
import { asyncAddComment, asyncReceiveThreadDetail } from './states/threadDetail/action';

function App() {
  const firstRun = React.useRef(true);
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');
  const {
    authUser = null,
    isPreload = false,
    threads = [],
    users = [],
    threadDetail = [],
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  // Testing
  const user = {
    email: 'admin111@gmail.com',
    password: 'admin111',
  };

  const threadPayload = {
    title: 'Cara cepat kaya',
    body: 'ada 100 cara cepat kaya',
    category: 'finance',
  };

  const threadID = 'thread-08_nUU2fhu1P5nre';

  const komentar = 'test komen 001';
  // End Test

  React.useEffect(() => {
    if (firstRun.current) {
      dispatch(asyncSetAuthUser(user));
      dispatch(asyncPreloadProcess());
      dispatch(asyncPopulateUsersAndThreads());
      dispatch(asyncReceiveThreadDetail(threadID));
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

  const threadList = threads.map((thread) => ({
    ...thread,
    creator: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="dark:bg-slate-800 bg-white">
      {/* {console.log('threads: ', threads)}
      {console.log('users: ', users)}
      {console.log('thread list: ', threadList)}
      {console.log('thread detail:', threadDetail)} */}
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
        <div>
          <button
            className="dark:text-green-300"
            type="button"
            onClick={() => dispatch(asyncAddThread(threadPayload))}
          >
            Tambah Thread
          </button>
        </div>
        <div>
          <button
            className="dark:text-sky-300"
            type="button"
            onClick={() => dispatch(asyncAddComment(threadID, komentar))}
          >
            Tambah Comment
          </button>
        </div>
        <div>
          <button
            className="dark:text-red-500"
            type="button"
            onClick={() => dispatch(asyncUpvoteThread(threadID))}
          >
            Like Thread
          </button>
        </div>
        <div>
          <button
            className="dark:text-red-500"
            type="button"
            onClick={() => dispatch(asyncNeutralizeThreadVote(threadID))}
          >
            Neutralize Thread Vote
          </button>
        </div>
        <div>
          <button
            className="dark:text-yellow-300"
            type="button"
            onClick={() => dispatch(asyncUnsetAuthUser())}
          >
            Log out
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
