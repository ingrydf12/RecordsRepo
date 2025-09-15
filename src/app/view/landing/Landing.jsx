import SplitTextComp from "@/app/bits/splitText";
import styles from "../../page.module.css";
import HeaderHome from "@/app/components/LandingHeader";
import CardGenreLanding from "@/app/components/CardGenreLanding";

const Landing = () => {
  const genresMusicExample = [
    { genre: "Indie", imageUrl: "" },
    { genre: "Post-Hardcore", imageUrl: "" },
    { genre: "MPB", imageUrl: "" },
    { genre: "Rock", imageUrl: "" },
    { genre: "Lofi", imageUrl: "" },
  ];

  const middleIndex = Math.floor(genresMusicExample.length / 2);
  const ANGLE_STEP = 12;
  const ARC_HEIGHT = 40;

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

        <div className={styles.cardsWrapper}>
          {genresMusicExample.map((g, i) => {
            const offset = i - middleIndex;
            const maxOffset = middleIndex || 1;
            const normalizedOffset = offset / maxOffset;

            const angle = offset * (ANGLE_STEP * 1.5);
            const translateX = normalizedOffset - (offset * 5);
            const translateY = Math.cos(normalizedOffset * Math.PI / 2) * ARC_HEIGHT;

            return (
              <CardGenreLanding
                key={i}
                genre={g.genre}
                imageUrl={g.imageUrl}
                style={{
                  transform: `translateX(${translateX}px) translateY(${-translateY}px) rotate(${angle}deg)`,
                }}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Landing;