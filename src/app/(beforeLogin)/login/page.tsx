import { redirect } from "next/navigation";

export default function Login() {
    //login폴더의 page.tsx로 리다이렉트된다 
    redirect('/i/flow/login')
}