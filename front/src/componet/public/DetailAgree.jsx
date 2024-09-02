import React, { useEffect, useState } from 'react';
import '../../design/DetailAgree.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slice/modalSlice';
import { features } from '../../ai_info/data';
import { toast } from 'react-toastify';
import {
  fetchGetUserTasksData,
  fetchUpdateAgreeTasksData,
} from '../../redux/slice/apiSlice';
const DetailAgree = () => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModal());
  };
  const authData = useSelector((state) => state.auth.authData);
  const { modalType, task } = useSelector((state) => state.modal);

  const [formData, setFormData] = useState({
    arg_num: '',
    company_name: '',
    level: '',
    master_name: '',
    master_tel: '',
    end_date: '',
    sum_money: '',
    ai_data: '',
    ai_media: '',
    ai_lang: '',
    title: '',
    status: '',
    description: '',
    ai_image: '',
    comment: '',
  });
  useEffect(() => {
    setFormData({
      title: task.title || '',
      description: task.description || '',
      end_date: task.end_date || '',
      sum_money: task.sum_money || '',
      ai_data: task.ai_data || '',
      ai_media: task.ai_media || '',
      ai_lang: task.ai_lang || '',
      company_name: task.company_name || '',
      arg_num: task.arg_num || '',
      level: task.level || '',
      master_name: task.master_name || '',
      master_tel: task.master_tel || '',
      ai_image: task.ai_image || '',
      status: task.status || '',
      comment: task.comment || '',
    });
  }, [modalType, task]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const testSubmit = (e) => {
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(fetchUpdateAgreeTasksData(formData)).unwrap();
      toast.success('협의서가 수정되었습니다.');
      onClose();
      await dispatch(fetchGetUserTasksData(authData.user_key)).unwrap();
    } catch (error) {
      console.error('Error adding task: ', error);
      toast.error('협의서 수정이 실패했습니다.');
    }
  };
  return (
    <div className="DA_modal-overlay">
      <div className="DA_modal-content">
        <div className="DA_modal-header">
          <div>협의서 상세내용</div>
        </div>
        <form className="DA_modal-body">
          <div className="title">
            <p>제목 :</p>
            <input
              className=""
              type="text"
              name="title"
              onChange={handleChange}
              value={formData.title}
              id=""
              required
              {...(authData.email == 'admin@amin'
                ? { readOnly: true }
                : formData.status == '진행중' || formData.status == '완료'
                ? { readOnly: true }
                : { readOnly: false })}
            ></input>
          </div>

          <div className="decription">
            <p>요구사항 :</p>
            <textarea
              className=""
              name="description"
              id=""
              onChange={handleChange}
              value={formData.description}
              required
              {...(authData.email == 'admin@amin'
                ? { readOnly: true }
                : formData.status == '진행중' || formData.status == '완료'
                ? { readOnly: true }
                : { readOnly: false })}
            ></textarea>
          </div>

          <div className="company_name">
            <p>회사명 :</p>
            <input
              className=""
              name="company_name"
              id=""
              onChange={handleChange}
              value={formData.company_name}
              required
              {...(authData.email == 'admin@amin'
                ? { readOnly: true }
                : formData.status == '진행중' || formData.status == '완료'
                ? { readOnly: true }
                : { readOnly: false })}
            ></input>
          </div>
          <div className="level">
            <p>직책 :</p>
            <input
              className=""
              name="level"
              id=""
              onChange={handleChange}
              value={formData.level}
              required
              {...(authData.email == 'admin@amin'
                ? { readOnly: true }
                : formData.status == '진행중' || formData.status == '완료'
                ? { readOnly: true }
                : { readOnly: false })}
            ></input>
          </div>
          <div className="master_name">
            <p>총괄자명 :</p>
            <input
              className=""
              name="master_name"
              id=""
              onChange={handleChange}
              value={formData.master_name}
              required
              {...(authData.email == 'admin@amin'
                ? { readOnly: true }
                : formData.status == '진행중' || formData.status == '완료'
                ? { readOnly: true }
                : { readOnly: false })}
            ></input>
          </div>
          <div className="master_tel">
            <p>연락처 :</p>
            <input
              className=""
              name="master_tel"
              id=""
              onChange={handleChange}
              value={formData.master_tel}
              required
              {...(authData.email == 'admin@amin'
                ? { readOnly: true }
                : formData.status == '진행중' || formData.status == '완료'
                ? { readOnly: true }
                : { readOnly: false })}
            ></input>
          </div>
          <div className="end_date">
            <p>희망마감기한 :</p>
            <input
              className=""
              name="end_date"
              id=""
              onChange={handleChange}
              value={formData.end_date}
              required
              {...(authData.email == 'admin@amin'
                ? { readOnly: true }
                : formData.status == '진행중' || formData.status == '완료'
                ? { readOnly: true }
                : { readOnly: false })}
            ></input>
          </div>
          <div className="sum_money">
            <p>예상예산 :</p>
            <input
              className=""
              name="sum_money"
              id=""
              onChange={handleChange}
              value={formData.sum_money}
              required
              {...(authData.email == 'admin@amin'
                ? { readOnly: true }
                : formData.status == '진행중' || formData.status == '완료'
                ? { readOnly: true }
                : { readOnly: false })}
            ></input>
          </div>
          <div className="DA_need_tech">
            <div className="ai_data">
              <p>AI데이터기술 :</p>
              <select
                name="ai_data"
                class="select"
                {...(authData.email == 'admin@amin'
                  ? { disabled: true }
                  : formData.status == '진행중' || formData.status == '완료'
                  ? { disabled: true }
                  : { disabled: false })}
              >
                <option key={''}>선택하세요</option>
                {features.map(
                  (option, idx) =>
                    option.Major === 'AI_Data' && (
                      <option key={idx}>{option.title}</option>
                    )
                )}
              </select>
            </div>
            <div className="ai_media">
              <p>AI미디어기술 :</p>
              <select
                name="ai_media"
                class="select"
                {...(authData.email == 'admin@amin'
                  ? { disabled: true }
                  : formData.status == '진행중' || formData.status == '완료'
                  ? { disabled: true }
                  : { disabled: false })}
              >
                <option key={''}>선택하세요</option>
                {features.map(
                  (option, idx) =>
                    option.Major === 'AI_Media' && (
                      <option key={idx}>{option.title}</option>
                    )
                )}
              </select>
            </div>
            <div className="ai_image">
              <p>AI이미지기술 :</p>
              <select
                name="ai_image"
                class="select"
                {...(authData.email == 'admin@amin'
                  ? { disabled: true }
                  : formData.status == '진행중' || formData.status == '완료'
                  ? { disabled: true }
                  : { disabled: false })}
              >
                <option key={''}>선택하세요</option>
                {features.map(
                  (option, idx) =>
                    option.Major === 'AI_Image' && (
                      <option key={idx}>{option.title}</option>
                    )
                )}
              </select>
            </div>
            <div className="ai_lang">
              <p>AI생성을 위한 프로그래밍 언어 :</p>
              <select
                name="ai_lang"
                class="select"
                {...(authData.email == 'admin@amin'
                  ? { disabled: true }
                  : formData.status == '진행중' || formData.status == '완료'
                  ? { disabled: true }
                  : { disabled: false })}
              >
                <option key={''}>선택하세요</option>
                {features.map(
                  (option, idx) =>
                    option.Major === 'AI_Lang' && (
                      <option key={idx}>{option.title}</option>
                    )
                )}
              </select>
            </div>
          </div>

          <div>
            <p>코멘트 : 관리자 작성 </p>
            <textarea
              className=""
              name="comment"
              id=""
              {...(authData.email != 'admin@amin' && { readOnly: true })}
            ></textarea>
          </div>
          {(authData.email === 'admin@amin' && formData.status === '신규') ||
          (authData.email === 'admin@amin' && formData.status === '재협의') ? (
            <div className="DA_modal-footer">
              <input type="submit" onClick={handleSubmit}>
                제안
              </input>
              <button type="submit" onClick={testSubmit}>
                진행
              </button>
            </div>
          ) : authData.email === 'admin@amin' && formData.status === '진행' ? (
            <div className="DA_modal-footer">
              <button type="submit" onClick={handleSubmit}>
                완료
              </button>
              <button type="submit" onClick={onClose}>
                닫기
              </button>
            </div>
          ) : (authData.email !== 'admin@amin' && formData.status === '신규') ||
            (authData.email !== 'admin@amin' &&
              formData.status === '재협의') ? (
            <div className="DA_modal-footer">
              <button type="submit" onClick={handleSubmit}>
                수정
              </button>
              <button type="submit" onClick={onClose}>
                닫기
              </button>
            </div>
          ) : (
            <div className="DA_modal-footer">
              <button type="submit" onClick={onClose}>
                닫기
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DetailAgree;
