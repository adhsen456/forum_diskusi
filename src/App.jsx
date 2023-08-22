import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { unsetAuthUser } from './states/authUser/action';
import { isPreloadProcess } from './states/isPreload/action';
import HeroPage from './routes/HeroPage';
import Navigation from './components/Navigation';
import RegisterPage from './routes/RegisterPage';
import LoginPage from './routes/LoginPage';
import DashboardPage from './routes/DashboardPage';
import './style/style.css';
import AddThreadPage from './routes/AddThreadPage';
import DetailPage from './routes/DetailPage';
import LeaderboardPage from './routes/LeaderboardPage';
import Loading from './components/Loading';

function App() {
  const isPreload = useSelector((states) => states.isPreload);
  const authUser = useSelector((states) => states.authUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => dispatch(unsetAuthUser());

  if (isPreload) return null;

  if (authUser === null) {
    return (
      <main>
        <Loading />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    );
  }

  return (
    <>
      <header>
        <Loading />
        <Navigation authUser={authUser} signOut={onSignOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/new" element={<AddThreadPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
