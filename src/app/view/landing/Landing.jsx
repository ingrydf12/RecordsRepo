import SplitTextComp from "@/app/bits/splitText";
import styles from "../../page.module.css";
import HeaderHome from "@/app/components/LandingHeader";

const Landing = () => {
  return (
    <div className={styles.page}>
      <HeaderHome />
      <main className={styles.main}>
        <SplitTextComp
          text="Explore diversos gêneros musicais e brasileiros"
          className={styles.title}
          delay={50}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </main>
    </div>
  );
};

export default Landing;
