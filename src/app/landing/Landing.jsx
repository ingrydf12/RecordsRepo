import SplitTextComp from "@/app/bits/splitText";
import styles from "../page.module.css";
import HeaderHome from "@/app/components/LandingHeader";
import CardGenreLanding from "@/app/components/CardGenreLanding";

const Landing = () => {
  // @docs Mockado, será alterado depois
  const genresMusicExample = [
    { genre: "Indie", imageUrl: "https://i.pinimg.com/736x/7e/0d/05/7e0d05c77d98141ad1de2b698200bdc7.jpg" },
    { genre: "Post-Hardcore", imageUrl: "https://i.pinimg.com/736x/68/ca/53/68ca536408fadc9f59f7ea92b07ab4fb.jpg" },
    { genre: "MPB", imageUrl: "https://i.pinimg.com/736x/ab/8b/40/ab8b40a0177062fe690835cc6a3ba6e6.jpg" },
    { genre: "Rock", imageUrl: "https://i.pinimg.com/736x/94/8a/34/948a349384f5256bf2a2dd9bfb69a852.jpg" },
    { genre: "Lofi", imageUrl: "https://i.pinimg.com/736x/28/3f/53/283f53baf40b017b29f1b91ecfb745a5.jpg" },
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
          threshold={0.2}
          rootMargin="-100px"
          textAlign="center"
        />

        <div className={styles.cardsWrapper}>
          {genresMusicExample.map((g, i) => {
            const offset = i - middleIndex;
            const maxOffset = middleIndex || 1;
            const normalizedOffset = offset / maxOffset;

            const angle = offset * ANGLE_STEP;
            const translateX = normalizedOffset + 25;
            const translateY =
              Math.cos((normalizedOffset * Math.PI) / 2) * ARC_HEIGHT;
            const scale = 1 - Math.abs(normalizedOffset) * 0.05;
            const zIndex = 100 - Math.abs(offset);

            return (
              <CardGenreLanding
                key={i}
                genre={g.genre}
                imageUrl={g.imageUrl}
                className="card-genre-container"
                style={{
                  transform: `translateX(${translateX}px) translateY(${-translateY}px) rotate(${angle}deg) scale(${scale})`,
                  zIndex,
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
