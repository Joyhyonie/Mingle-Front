import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import StudentDetailCss from '../../css/StudentDetail.module.css';
import CommonCSS from '../../css/common/Common.module.css';
import { callStudentDetailAPI } from "../../apis/AcademicAPICalls";

function StudentDetail({ setForm }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { stdCode } = useParams();
  const data = useSelector((state) => state.StudentReducer);
  const [modifyMode, setModifyMode] = useState(false);

  useEffect(() => {
    dispatch(callStudentDetailAPI({ stdCode }));
  }
  , [
    dispatch, stdCode
  ]);

  /* 수정모드 변경 이벤트 */
  const onClickModifyHandler = () => {
    setModifyMode(true);
    setForm({ ...data });
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className={StudentDetailCss.studentContainer}>
      <div className={StudentDetailCss.studentClass}>
        <div className={StudentDetailCss.studentHeader}>
          <p className={CommonCSS.pageDirection}>학사관리 ▸ 학생 ▸ 조회</p>
          <img
            className={StudentDetailCss.studentImageAfter}
            alt="preview"
            src={data.stdProfile}
          />
          <div className={StudentDetailCss.buttonContainer}>
            <button
              onClick={onClickModifyHandler}
              className={StudentDetailCss.studentModifyBtn}
            >
              수정
            </button>
            <button
              onClick={() => navigate(-1)}
              className={StudentDetailCss.StudentCancelBtn}
            >
              취소
            </button>
          </div>

        </div>
        <div className={StudentDetailCss.StudentRegistInformation}>
          <div className={StudentDetailCss.StudentRegistFormFirst}>
            이름
            <input
              type="text"
              name="stdName"
              className={StudentDetailCss.StudentRegistName}
              value={data.stdName}
              readOnly
            />
            영문명
            <input
              type="text"
              name="stdNameEn"
              className={StudentDetailCss.StudentRegistNameEn}
              value={data.stdNameEn}
              readOnly
            />
            학년
            <input
              type="number"
              name="stdLevel"
              className={StudentDetailCss.StudentRegistLevel}
              value={data.stdLevel}
              readOnly
            />
            학과
            <input
              type="text"
              name="deptCode"
              className={StudentDetailCss.StudentRegistDeptCode}
              value={data.stdLevel}
              readOnly
            />
          </div>
          <div className={StudentDetailCss.StudentRegistFormSecond}>
            이메일
            <input
              type="text"
              name="stdEmail"
              className={StudentDetailCss.StudentRegistEmail}
              value={data.stdEmail}
              readOnly
            />
            비밀번호
            <input
              type="text"
              name="stdPwd"
              className={StudentDetailCss.StudentRegistPwd}
              value={data.stdPwd}
              readOnly
            />
          </div>
          <div className={StudentDetailCss.StudentRegistFormThird}>
            휴대전화
            <input
              type="tel"
              name="stdPhone"
              className={StudentDetailCss.StudentRegistPhone}
              value={data.stdPhone}
              readOnly
            />
            상태
            <input className={StudentDetailCss.StudentRegistStatus}
              name="stdStatus"
              value={data.stdStatus}
              readOnly
            />
            주민등록번호
            <input
              type="text"
              name="stdSsn"
              className={StudentDetailCss.StudentRegistSsd}
              value={data.stdSsn}
              readOnly
            />
          </div>

          <div className={StudentDetailCss.StudentRegistFormFourth}>
            주소
            <input
              type="text"
              name="stdAddress"
              className={StudentDetailCss.StudentRegistAddress}
              value={data.stdAddress}
              readOnly
            />
          </div>
          <div>
            <input
              type="text"
              name="stdAddressDetail"
              className={StudentDetailCss.StudentRegistAddressDetail}
              readOnly
            />
          </div>
          <div className={StudentDetailCss.StudentRegistFormFifth}>
            입학일
            <input
              type="date"
              name="stdEntDate"
              className={StudentDetailCss.StudentRegistEntDate}
              value={data.stdEntDate}
              readOnly
            />
            휴학일
            <input
              type="date"
              name="stdAbDate"
              className={StudentDetailCss.StudentRegistAbDate}
              value={data.stdAbDate}
              readOnly
            />
            <div>
              자퇴일
              <input
                type="date"
                name="stdDropDate"
                className={StudentDetailCss.StudentRegistDropDate}
                value={data.stdDropDate}
                readOnly
              />
              졸업일
              <input
                type="date"
                name="stdLeaveDate"
                className={StudentDetailCss.StudentRegistLeaveDate}
                value={data.stdLeaveDate}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDetail;
