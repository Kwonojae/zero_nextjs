import Link from "next/link";
import styles from "./trend.module.css";

export default function Trend() {
  return (
    <Link href={`/search?q=트랜드`} className={styles.container}>
      <div className={styles.count}>실시간 트랜드</div>
      <div className={styles.title}>제로초</div>
      <div className={styles.count}>1,234 posts</div>
    </Link>
  );
}
