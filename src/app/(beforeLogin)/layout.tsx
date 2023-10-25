import React, { ReactNode } from "react";
import styles from '@/app/page.module.css'
//변수 매개변수 리턴값에 타입을 부여한다 TS

type Props = {children:ReactNode, modal:ReactNode};
// 패러랠 모달 패러랠 라우트 같은 폴더 안에있는 2개의 페이지를 동시에 보여준다 
// 패러랠 라우트 @modal 안에 page.tsx 
export default function Layout({children, modal}: Props ) {
    return (
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    )
}