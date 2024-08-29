import React from 'react';
import { Link } from 'react-router-dom';

const ContentsPage = () => {
  return (
    <div className="MP_category">
      <div className="MP_contents">
        <div className="MP_contents_tech">
          <Link to={'/techInfo'}>
            <h1>TECHNOLOGY</h1>
            <h3>AICO가 보유한 AI 기술 한 눈에 확인해보세요.</h3>
            <span>
              우리 AICO에서는 워크로드 생성,모델 학습,리소스 관리,워크로드 관리
              등 다양한 기술을 활용하여 맞춤 AI 솔루션을 제작할 수 있습니다.
            </span>
          </Link>
        </div>
        <div className="MP_contents_packge">
          <Link to={'/recommend'}>
            <h1>RECOMMEND</h1>
            <h3>AICO에서 가장 인기 좋은 패키지를 한 눈에 확인해보세요. </h3>
            <span>
              가장 많은 의뢰를 받은 AI 솔루션 패키지로 구성 되어있어, 원하시는
              패키지를 찾아 바로 주문할 수 있습니다.
            </span>
          </Link>
        </div>

        <div className="MP_contents_agree">
          <Link to={'/colabo'}>
            <h1>AGREEMENT</h1>
            <h2>협의서를 작성하여 견적 및 상담 받아보세요. </h2>
            <span>
              고효율 솔루션과 신뢰도 높은 파트너십을 갖춘 AICO와
              협업으로,이전과는 다른 인공지능 개발·운영을 경험하실 수 있습니다.
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentsPage;
