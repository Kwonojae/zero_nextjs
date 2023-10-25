

//RootLayout -> Home Layout => Home page
// layout.tsx template.tsx 차이점 페이지가 바뀔때 페이지가 랜더링 되게하고싶으면 template.tsx 안되게 하고싶으면 layout.tsx 

import { ReactNode } from "react";

//template사용할때 페이지가 바뀔때 기록을 해야할때 
export default async function HomeLayout({children}: {children:ReactNode}) {
    return (
        <div>
            홈 레이아웃
            {children}</div>
    )
}