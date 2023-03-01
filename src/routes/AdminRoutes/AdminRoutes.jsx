import React from 'react'
import LoginPage from '../../pages/auth/LoginPage'
import AdminDashboard from '../../pages/adminPages/AdminDashboard';
import AdminStudents from '../../pages/adminPages/AdminStudents';
import AdminTrainers from '../../pages/adminPages/AdminTrainers';
import AdminCourses from '../../pages/adminPages/AdminCourses';
import AdminBookings from '../../pages/adminPages/AdminBookings';
import AdminBanners from '../../pages/adminPages/AdminBanners';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const AdminRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/admin/login' element={<LoginPage access="Admin"/>} />
      <Route path = '/admin/admin-dashboard' element = {<AdminDashboard/>}/>
      <Route path = '/admin/admin-students' element = {<AdminStudents/>}/>
      <Route path = '/admin/admin-trainers' element = {<AdminTrainers/>}/>
      <Route path = '/admin/admin-courses' element = {<AdminCourses/>}/>
      <Route path = '/admin/admin-bookings' element = {<AdminBookings/>}/>
      <Route path = '/admin/admin-banners' element = {<AdminBanners/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AdminRoutes
