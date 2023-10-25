"use client" 
import styles from '@/app/page.module.css'  //css module
import Image from "next/image"
import Link from "next/link"
import zLogo from '../../../../public/zlogo.png'
import { redirect,useRouter } from 'next/navigation';

// import { redirect } from "next/navigation";
// export default function Login() {
//     //서버쪽에서 리다이렉트하는법
//     //login폴더의 page.tsx로 리다이렉트된다 
//     //여기서 리다이렉트 되는것은 서버에서 되는것이다
//     redirect('/i/flow/login')
//      return null;
// }

 //클라이언트에서 리다이렉트하는법

export default function Login() {
    const router = useRouter();
    router.replace('/i/flow/login');
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
    );
}

// router.push
//푸시는 바로전으로 간다 하지만 여기서 문제는 login에서 리다이렉트 되기때문에 다시 flow/login으로 돌아온다 무한반복
// localhost:3000/login -> localhost:3000/i/flow/login

//두개의 차이점 뒤로가기했을때 다르다 

//router.replace
//로그인 보다 더 전으로 감
//localhost:3000 -> localhost:3000/i/flow/login