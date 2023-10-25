import styles from '@/app/page.module.css'  //css module
import Image from "next/image"
import Link from "next/link"
import zLogo from '../../../public/zlogo.png'

//경로 @가 src임


export default function Home() {
  // next에서는 a태그 대신 Link태그를 사용한다
  //서버 컴포넌트는 next.js 서버에서 돈다 리액트18버전에서 추가된 기능 비동기로 컴포넌트를 만들수있음 
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt='logo'/>
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        
        <Link href="/i/flow/signup" className={styles.signup}>계속 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>로그인</Link>
      </div>
    </>
  )
}
