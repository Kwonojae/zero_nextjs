import React, { ReactNode } from "react";
import styles from '@/app/page.module.css'
//변수 매개변수 리턴값에 타입을 부여한다 TS

type Props = {children:ReactNode, modal:ReactNode};
// 패러랠 모달 패러랠 라우트 같은 폴더 안에있는 2개의 페이지를 동시에 보여준다 
// 패러랠 라우트 @modal 안에 page.tsx 
//모달 1개 이상일때 @modal2를 만들어서 사용한다 .
export default function Layout({children, modal}: Props ) {
    return (
        //인터셉트 라우팅 : 로고 페이지에서 뒤에 페이지 그대로두고 모달창이 나옴 
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    )
}

//주소가 localhost3000 일 때는 children -> page.tsx,가되고 modal은 -> @modal/default.tsx가 된다
//주소가 localhost3000/i/flow/login 일때는 children -> i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx된다