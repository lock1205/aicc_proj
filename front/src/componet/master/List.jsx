import React from 'react';
import '../../design/AgreeMasterList.css';

const List = ({ data }) => {
  return (
    <div className="masterList">
      {data.length > 0 ? ( // 필터링된 데이터가 있을 경우
        data.map(
          (
            item,
            index // 각 데이터를 리스트 아이템으로 렌더링
          ) => (
            <div key={index} className="M-listItem">
              {' '}
              {/* 데이터의 고유 인덱스를 key로 설정 */}
              <span>{item.STATUS}</span> {/* 진행 상태 표시 */}
              <span>{item.TITLE}</span> {/* 타이틀 표시 */}
              <span>{item.COMPANY_NAME}</span> {/* 회사 이름 표시 */}
              <span>{item.END_DATE}</span> {/* 마감 일자 표시 */}
            </div>
          )
        )
      ) : (
        <p className="M-listNone">No results found.</p> // 필터링된 데이터가 없을 경우 메시지 표시
      )}
    </div>
  );
};

export default List;
