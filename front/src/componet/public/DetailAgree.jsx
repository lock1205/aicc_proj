import React, { useEffect, useState } from 'react';
import '../../design/DetailAgree.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slice/modalSlice';
import { IoMdClose } from 'react-icons/io';
import { features } from '../../ai_info/data';
import { toast } from 'react-toastify';
import {
  fetchDeleteItemData,
  fetchGetTasksData,
  fetchGetUserTasksData,
  fetchUpdateAgreeTasksData,
  fetchUpdateStatusCommentTasksData,
  fetchUpdateStatusTasksData,
} from '../../redux/slice/apiSlice';
const DetailAgree = ({ props }) => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModal());
  };
  const authData = useSelector((state) => state.auth.authData);
  const { modalType, task } = useSelector((state) => state.modal);

  const [status, setStatus] = useState({ status: '', arg_num: '' });

  const [proposal, setproposal] = useState({
    status: '',
    comment: '',
    arg_num: '',
  });

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
  const handleCompleteSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus({ status: '완료', arg_num: task.arg_num });
      await dispatch(fetchUpdateStatusTasksData(status)).unwrap();
      toast.success('협의서가 완료되었습니다.');
      onClose();
      await dispatch(fetchGetTasksData()).unwrap();
    } catch (error) {
      console.error('Error adding task: ', error);
      toast.error('협의서 수정이 실패했습니다.');
    }
  };
  const handleprocessingSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus({ status: '진행중', arg_num: task.arg_num });
      await dispatch(fetchUpdateStatusTasksData(status)).unwrap();
      toast.success('협의서가 완료되었습니다.');
      onClose();
      await dispatch(fetchGetTasksData()).unwrap();
    } catch (error) {
      console.error('Error adding task: ', error);
      toast.error('협의서 수정이 실패했습니다.');
    }
  };
  const handleProposalSubmit = async (e) => {
    e.preventDefault();

    try {
      setproposal({
        status: '재협의',
        comment: task.comment,
        arg_num: task.arg_num,
      });
      await dispatch(fetchUpdateStatusCommentTasksData(proposal)).unwrap();
      toast.success('협의서를 제안하였습니다.');
      onClose();
      await dispatch(fetchGetTasksData()).unwrap();
    } catch (error) {
      console.error('Error adding task: ', error);
      toast.error('협의서 수정이 실패했습니다.');
    }
  };
  const deleteItem = async () => {
    const confirm = window.confirm('협의서를 삭제하시겠습니까?');

    if (!confirm) return;

    try {
      await dispatch(fetchDeleteItemData(task.arg_num)).unwrap();
      toast.success('협의서가이 삭제되었습니다.');
      await dispatch(fetchGetUserTasksData(authData.user_key)).unwrap();
    } catch (error) {
      toast.error('협의서 삭제에 실패했습니다.');
      console.error(error);
    }
  };
  return (
    <div className="DA_modal-overlay">
      <div className="DA_modal-content">
        <div className="DA_modal-header">
          <div>
            협의서 상세내용
            <IoMdClose onClick={onClose} />
          </div>
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
              {...(authData.email === 'admin@admin'
                ? { readOnly: true }
                : formData.status === '진행중' || formData.status === '완료'
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
              {...(authData.email === 'admin@admin'
                ? { readOnly: true }
                : formData.status === '진행중' || formData.status === '완료'
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
              {...(authData.email === 'admin@admin'
                ? { readOnly: true }
                : formData.status === '진행중' || formData.status === '완료'
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
              {...(authData.email === 'admin@admin'
                ? { readOnly: true }
                : formData.status === '진행중' || formData.status === '완료'
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
              {...(authData.email === 'admin@admin'
                ? { readOnly: true }
                : formData.status === '진행중' || formData.status === '완료'
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
              {...(authData.email === 'admin@admin'
                ? { readOnly: true }
                : formData.status === '진행중' || formData.status === '완료'
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
              {...(authData.email === 'admin@admin'
                ? { readOnly: true }
                : formData.status === '진행중' || formData.status === '완료'
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
              {...(authData.email === 'admin@admin'
                ? { readOnly: true }
                : formData.status === '진행중' || formData.status === '완료'
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
                {...(authData.email === 'admin@admin'
                  ? { disabled: true }
                  : formData.status === '진행중' || formData.status === '완료'
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
                {...(authData.email === 'admin@admin'
                  ? { disabled: true }
                  : formData.status === '진행중' || formData.status === '완료'
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
                {...(authData.email === 'admin@admin'
                  ? { disabled: true }
                  : formData.status === '진행중' || formData.status === '완료'
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
                {...(authData.email === 'admin@admin'
                  ? { disabled: true }
                  : formData.status === '진행중' || formData.status === '완료'
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
              {...(authData.email !== 'admin@admin' && { readOnly: true })}
            ></textarea>
          </div>
          {(authData.email === 'admin@admin' && formData.status === '신규') ||
          (authData.email === 'admin@admin' && formData.status === '재협의') ? (
            <div className="DA_modal-footer">
              <button type="submit" onClick={handleProposalSubmit}>
                제안
              </button>
              <button type="submit" onClick={handleprocessingSubmit}>
                진행
              </button>
              <button type="submit" onClick={onClose}>
                닫기
              </button>
            </div>
          ) : authData.email === 'admin@admin' &&
            formData.status === '진행중' ? (
            <div className="DA_modal-footer">
              <button type="submit" onClick={handleCompleteSubmit}>
                완료
              </button>
              <button type="submit" onClick={onClose}>
                닫기
              </button>
            </div>
          ) : (authData.email !== 'admin@admin' &&
              formData.status === '신규') ||
            (authData.email !== 'admin@admin' &&
              formData.status === '재협의') ? (
            <div className="DA_modal-footer">
              <button type="submit" onClick={handleSubmit}>
                수정
              </button>
              <button type="submit" onClick={deleteItem}>
                삭제
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
