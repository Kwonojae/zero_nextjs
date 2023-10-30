import Post from "../_component/Post";
import PostForm from "./_component/PostFrom";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import styles from "./home.module.css";
//()소괄호는 주소창에 적용안되는 그룹 폴더

export default function Home() {
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
