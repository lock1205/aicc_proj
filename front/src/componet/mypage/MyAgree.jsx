import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetUserTasksData } from '../../redux/slice/apiSlice';
import ItemBar from '../public/ItemBar';
import '../../design/MyPage.css';
import { Link } from 'react-router-dom';
import DetailAgree from '../public/DetailAgree';

const MyAgree = () => {
  const [loading, setLoading] = useState(false);

  const authData = useSelector((state) => state.auth.authData);

  const dispatch = useDispatch();

  const getUserAgrData = useSelector((state) => state.api.fetchGetUserTasks);

  const isOpen = useSelector((state) => state.modal.isOpen);

  useEffect(() => {
    if (!authData.user_key) {
      return;
    }

    const fetchGetAgrees = async () => {
      try {
        //setLoading(true); 로딩컴포넌트 추가해야함
        await dispatch(fetchGetUserTasksData(authData.user_key)).unwrap();
      } catch (error) {
        console.error('Failed to fetch items:', error);
      } finally {
        //setLoading(false); 로딩컴포넌트 추가해야함
      }
    };
    fetchGetAgrees();
  }, [dispatch, authData.user_key]);

  return (
    <div className="bg">
      <NavBar />
      <div className="Mp_container">
        {isOpen && <DetailAgree />}
        <div className="af_top">
          <h1>내 제안서 목록</h1>
        </div>
        <div className="af_middle">
          <div className="text">
            <div>
              {getUserAgrData?.map((item, idx) => (
                <ItemBar key={idx} task={item} /> //모달을 사용하기 위해 반드시 task란 이름으로 넘겨야 한다. 모달 슬라이스 task와 이름을 동일하게 맞춰야 한다.
              ))}
            </div>
            <div></div>
          </div>

          <div className="af_bottom">
            <p>
              <Link to={'/'}>
                <button>메인페이지</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAgree;
