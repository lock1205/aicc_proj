import React from 'react';
import '../design/agreeFinsh.css';

const AgreeFinish = () => {
  return (
    <div className="bg">
      <div className="af_container">
        <div className="af_top">
          <h1>AICO</h1>
        </div>
        <div className="af_middle">
          <div className="finishIcon">
            <img
              width="70"
              height="70"
              src="https://img.icons8.com/nolan/100/1A6DFF/C822FF/check-file.png"
              alt="check-file"
            />
          </div>
          <h1>협의서 제출 완료</h1>
          <div className="text">
            <div>홍길동님(아이디)의 협의서가</div>
            <div>성공적으로 제출되었습니다.</div>
          </div>
          <div className="af_bottom">
            <div className="text">
              <span>제출된 협의서 내역 확인 및 수정은 </span>
              <span>마이페이지 - 협의서 수정</span>
              <span>에서 가능합니다.</span>
            </div>
            <p>
              <button>마이페이지</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreeFinish;
