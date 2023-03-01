import React from 'react'
import LoginPage from '../../pages/auth/LoginPage'
import TrainerDashboard from '../../pages/trainerPages/TrainerDashboard';
import TrainerStudents from '../../pages/trainerPages/TrainerStudents';
import TrainerBookings from '../../pages/trainerPages/TrainerBookings';
import TrainerVideos from '../../pages/trainerPages/TrainerVideos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const TrainerRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/trainer/login' element={<LoginPage access="Admin"/>} />
      <Route path = '/trainer/trainer-dashboard' element = {<TrainerDashboard/>}/>
      <Route path = '/trainer/trainer-students' element = {<TrainerStudents/>}/>
      <Route path = '/trainer/trainer-bookings' element = {<TrainerBookings/>}/>
      <Route path = '/trainer/trainer-videos' element = {<TrainerVideos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default TrainerRoutes
