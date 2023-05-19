/* 행정직원의 '교직원 관리' */
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { callStudentsAPI } from '../../apis/AcademicAPICalls';
import { useDispatch, useSelector } from 'react-redux';
// import EmployeeInsertModal from "../../components/modal/EmployeeInsertModal";
import SearchAndListLayout from '../../layouts/SearchAndListLayout';
import SearchBarCss from '../../css/common/SearchBar.module.css';
import StudentListCss from '../../css/StudentList.module.css';
import CommonCSS from '../../css/common/Common.module.css';
import PagingBar from '../../components/common/PagingBar';
import { useNavigate } from "react-router-dom";

const options = [
  { value: "stdCode", name: "학번" },
  { value: "stdName", name: "학생명" },
  { value: "deptCode", name: "학과명" },
];

const pageInfo = { startPage: 1, endPage: 10, currentPage: 1, maxPage: 10 }

function StudentManagement() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, pageInfo } = useSelector((state) => state.StudentReducer);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState({});

  // const [isEmployeeUpdateModalOpen, setIsEmployeeUpdateModalOpen] = useState(false);
  // const [isEmployeeInsertModalOpen, setIsEmployeeInsertModalOpen] = useState(false);

  // 아 헷갈려!!! 
  // isEmployeeInsertModalOpen 추가
  useEffect(
    () => {
      dispatch(callStudentsAPI({ currentPage }))
    },
    [currentPage]
  );

  // onClickStudentInsert
  const onClickStudentInsert = () => {
    navigate("/regist-student");
  }

  // // onClickTableTr => 테이블 행 클릭시 교직원 상세 조회 및 수정 페이지로 라우팅
  // const onClickTableTr = (student) => {
  //   setIsEmployeeUpdateModalOpen(true);
  // }

  const handleSelectAll = () => {
    const newCheckboxes = Object.keys(checkboxes).reduce((prev, curr) => {
      return { ...prev, [curr]: !selectAll };
    }, {});

    setCheckboxes(newCheckboxes);
    setSelectAll(!selectAll);
  };



  return (
    <motion.div
      className={StudentListCss.studentList}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.5 }}
    >

      <motion.button
        whileHover={{ scale: 1.05 }}
        className={StudentListCss.studentRegistButton}
        onClick={ onClickStudentInsert }
      >
        등록
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className={StudentListCss.studentDeleteButton}
      >
        삭제
      </motion.button>

      <p className={CommonCSS.pageDirection}>학사관리 ▸ 학생</p>


      <div className={SearchBarCss.basic}>
        <SearchAndListLayout options={options}></SearchAndListLayout>
      </div>
      <table className={StudentListCss.studentTable}>
        <colgroup>
          <col width="5%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
          <col width="20%" />
          <col width="15%" />
          <col width="15%" />
          <col width="10%" />
        </colgroup>
        <thead>
          <tr className={StudentListCss.studentTr}>
            <th>
              <input type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              ></input>
            </th>
            <th>학번</th>
            <th>이름</th>
            <th>학과</th>
            <th>이메일</th>
            <th>휴대전화</th>
            <th>입학일</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((student) => (
              <tr
              key={student.stdCode}
              >
                <td><input type="checkbox" value={student.stdCode} /></td>
                <td>{student.stdCode}</td>
                <td>{student.stdName}</td>
                <td>{student.department.deptName}</td>
                <td>{student.stdEmail}</td>
                <td>{student.stdPhone}</td>
                <td>{new Date(student.stdEntDate).toISOString().split('T')[0]}</td>
                <td>{student.stdStatus}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        {pageInfo && <PagingBar pageInfo={pageInfo} setCurrentPage={setCurrentPage} />}
      </div>

    </motion.div>
  );
};

export default StudentManagement;