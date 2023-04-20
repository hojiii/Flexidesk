import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Welcome from '../pages/Welcome/Welcome';
import Login from '../pages/user/Login';
import SignUpAdmin from '../pages/user/SignUpAdmin';
import SignUpUser from '../pages/user/SignUpUser';
import AdminSpace from '../pages/space/AdminSpace';
import Space from '../pages/space/Space';
import ReservationDetail from '../pages/Reservation/ReservationDetail';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import Calendar from '../pages/Reservation/Calendar';
import SchedulesCalendar from '../pages/Schedules/SchedulesCalendar';
import SchedulesDetail from '../pages/Schedules/SchedulesDetail';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpAdmin />} />
        <Route path="/signupuser" element={<SignUpUser />} />
        <Route path="/calender/:id" element={<Calendar />} />
        <Route
          path="/schedulescalendar/:userId"
          element={<SchedulesCalendar />}
        />
        <Route path="/scheduledetail/:userId" element={<SchedulesDetail />} />
        <Route path="/detail/:userId" element={<ReservationDetail />} />
        <Route path="/adminspace" element={<AdminSpace />} />
        <Route path="/space" element={<Space />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
