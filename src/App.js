import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from './layouts/Layout';
import Mypage from "./pages/employee/Mypage";
import Organization from "./pages/employee/Organization";
import AppliedCertidocs from "./pages/certiDoc/AppliedCertidocs";
import ApplyCertiDoc from "./pages/certiDoc/ApplyCertiDoc";
import MyCertiDoc from "./pages/certiDoc/MyCertiDoc";
import BoardMain from "./pages/board/BoardMain";
import EmployeeAttendance from "./pages/attendance/EmployeeAttendance";
import AppliedLeaveList from "./pages/attendance/AppliedLeaveList";
import SubjectList from "./pages/lecture/admin/SubjectList";
import StudentAttendanceForAdmin from "./pages/lecture/admin/StudentAttendanceForAdmin";
import RegistLectureForAdmin from "./pages/lecture/admin/RegistLectureForAdmin";
import EmployeeManagement from "./pages/academic/EmployeeManagement";
import StudentManagement from "./pages/academic/StudentManagement";
import AcademicSchedule from "./pages/schedule/AcademicSchedule";
import RegistLectureForProf from "./pages/lecture/professor/RegistLectureForProf";
import StudentAttendanceForProf from "./pages/lecture/professor/StudentAttendanceForProf";
import MainPageLayout from "./layouts/MainPageLayout";
import MyCalender from "./components/main/MyCalender";
import AcademicCalender from "./components/main/AcademicCalender";
import BoardList from './components/lists/BoardList';
import BoardDetail from './pages/board/BoardDetail';
import BoardRegist from './pages/board/BoardRegist';
import BoardModify from './pages/board/BoardModify';
import BoardLayout from './layouts/BoardLayout';


function App() {
  return (
    <>
    <Toaster
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          border: '2px solid #ffd7d7',
          padding: '20px',
          color: '#343434',
          fontWeight: 'bold'
        },
      }}
    />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route element={ <MainPageLayout/> }>
              <Route index element={ <MyCalender/> }/>
              <Route element={ <AcademicCalender/> }/>
            </Route>
            
            <Route path="board" element={ <BoardLayout/> }>
              <Route index element={ <Navigate to="/board/main" replace/> }/>
              <Route path="main" element={ <BoardMain/> }/>
              <Route path="detail" element={ <BoardDetail/> }/>
              <Route path="modify" element={ <BoardModify/> }/>
              <Route path="regist" element={ <BoardRegist/> }/>
            </Route>

            <Route path="mypage" element={ <Mypage/> }/>

            <Route path="organization" element={ <Organization/> }/>

            <Route path="certi-doc-applied" element={ <AppliedCertidocs/> }/>
            <Route path="certi-doc-apply" element={ <ApplyCertiDoc/> }/>
            <Route path="certi-doc-mine" element={ <MyCertiDoc/> }/>

            <Route path="attendance-employee" element={ <EmployeeAttendance/> }/>
            <Route path="leave-doc-applied" element={ <AppliedLeaveList/> }/>

            <Route path="subject" element={ <SubjectList/> }/>

            <Route path="lecture-student-admin" element={ <StudentAttendanceForAdmin/> }/>
            <Route path="lecture-regist-admin" element={ <RegistLectureForAdmin/> }/>
            <Route path="lecture-student-prof" element={<StudentAttendanceForProf/>  }/>
            <Route path="lecture-regist-prof" element={ <RegistLectureForProf/> }/>

            <Route path="management-employee" element={ <EmployeeManagement/> }/>
            <Route path="management-student" element={ <StudentManagement/> }/>

            <Route path="schedule-academic" element={ <AcademicSchedule/> }/>
            
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
