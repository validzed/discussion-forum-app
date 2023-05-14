import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import ThreadList from '../components/ThreadList';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((state) => state);

  const firstRun = React.useRef(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (firstRun.current) {
      dispatch(asyncPopulateUsersAndThreads());
      firstRun.current = false;
    }
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    creator: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="w-full h-screen bg-white  dark:bg-gray-900">
      <ThreadList threads={threadList} />
    </section>
  );
}

export default HomePage;
