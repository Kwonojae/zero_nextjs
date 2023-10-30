"use client";

import Link from "next/link";
import styles from "./post.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "./ActionButtons";

dayjs.locale("ko");
dayjs.extend(relativeTime);
// npm i day js
//import relativeTime from "dayjs/plugin/relativeTime";
// dayjs.extend(relativeTime);
// fromnow 가져오기  import 'dayjs/locale/ko' 한글 화

export default function Post() {
  const target = {
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/yRsRRjGO.jpg",
    },
    content: "Next.js 제로초 클론코딩",
    createdAt: new Date(),
    Images: [],
  };
  return (
    <article className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postUserSection}>
          <Link href={`/${target.User.id}`} className={styles.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
          </Link>
          <div className={styles.postShade} />
        </div>
        <div className={styles.postBody}>
          <div className={styles.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={styles.postUserName}>
                {target.User.nickname}
              </span>
              &nbsp;
              <span className={styles.postUserId}>@{target.User.id}</span>
              &nbsp; . &nbsp;
            </Link>
            <span className={styles.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          {/* dayjs 몇초 몇분전에 글이 올라왔는지 알려줌 */}
          <div>{target.content}</div>
          <div className={styles.postImageSection}>
            {/* {target.Image.length > 0 && (
              <div className={styles.postImageSection}>
                <img src={target.Images[0]?.link} alt="" />
              </div>
            )} */}
          </div>
          <ActionButtons  />
        </div>
      </div>
    </article>
  );
}
