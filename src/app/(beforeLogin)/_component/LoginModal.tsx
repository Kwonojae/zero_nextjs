'use client'
//서버 컴포넌트에서는 훅을 사용못해서 클라이언트 컴포넌트로 바꿔줘야된다 

//주소창에안뜸
//(afterLogin) :그룹폴더는 레이아웃 
//@modal: 패러랠라우터 한화면에 두개의 페이지를 보여주는거
//_compoent :프라이빗 폴더 폴더 정리용 공통파일
//클라이언트 컴포넌트는 서버컨포넌트를 임포트 하면 안됨 
//서버 컨포넌트는 클라이언트 컨포넌트를 임포트할수있음
import styles from '@/app/(beforeLogin)/_component/login.module.css'
import { useState } from 'react';


export default function LoginModal() {
    // 패러랠 모달 패러랠 라우트 같은 폴더 안에있는 2개의 페이지를 동시에 보여준다\
    //(.):경로 i폴더명 패러랠 라우트  인터셉트 라우팅
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = () => {};
    const onClickClose = () => {};
    const onChangeId = () => {};
    const onChangePassword = () => {}

    return (
        <>
        <div className={styles.modalBackground}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <button className={styles.closeButton} onClick={onClickClose}>
                <svg width={24} viewBox="0 0 24 24" aria-hidden="true"
                     className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
                  <g>
                    <path
                      d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                  </g>
                </svg>
              </button>
              <div>로그인하세요.</div>
            </div>
            <form onSubmit={onSubmit}>
              <div className={styles.modalBody}>
                <div className={styles.inputDiv}>
                  <label className={styles.inputLabel} htmlFor="id">아이디</label>
                  <input id="id" className={styles.input} value={id} onChange={onChangeId} type="text" placeholder=""/>
                </div>
                <div className={styles.inputDiv}>
                  <label className={styles.inputLabel} htmlFor="password">비밀번호</label>
                  <input id="password" className={styles.input} value={password} onChange={onChangePassword} type="password" placeholder=""/>
                </div>
              </div>
              <div className={styles.message}>{message}</div>
              <div className={styles.modalFooter}>
                <button className={styles.actionButton} disabled={!id && !password}>로그인하기</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}