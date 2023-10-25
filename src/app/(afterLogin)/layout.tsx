import { ReactNode } from "react";

//로그인후의 레이아웃
export default function AfterLoginLayout({children}: {children:ReactNode}) {
    return (
        <div>
            애프터로그인
            {children}
        </div>
    )
}