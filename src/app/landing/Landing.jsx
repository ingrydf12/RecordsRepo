"use client";
import { useEffect, useState, useRef } from "react";
import SplitTextComp from "@/app/bits/SplitText";
import styles from "../page.module.css";
import HeaderHome from "@/app/components/LandingHeader";
import CardGenreLanding from "@/app/components/CardGenreLanding";

const Landing = () => {
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  
  // @docs Mockado, será alterado depois
  const genresMusicExample = [
    { genre: "Indie", imageUrl: "https://i.pinimg.com/736x/7e/0d/05/7e0d05c77d98141ad1de2b698200bdc7.jpg" },
    { genre: "Post-Hardcore", imageUrl: "https://i.pinimg.com/736x/68/ca/53/68ca536408fadc9f59f7ea92b07ab4fb.jpg" },
    { genre: "MPB", imageUrl: "https://i.pinimg.com/736x/ab/8b/40/ab8b40a0177062fe690835cc6a3ba6e6.jpg" },
    { genre: "Rock", imageUrl: "https://i.pinimg.com/736x/94/8a/34/948a349384f5256bf2a2dd9bfb69a852.jpg" },
    { genre: "Lofi", imageUrl: "https://i.pinimg.com/736x/28/3f/53/283f53baf40b017b29f1b91ecfb745a5.jpg" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile || !carouselRef.current) return;

    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const speed = 1.2;

    const loop = () => {
      scrollAmount += speed;
      if (scrollAmount >= carousel.scrollWidth / 2) scrollAmount = 0;
      carousel.scrollLeft = scrollAmount;
      requestAnimationFrame(loop);
    };
    loop();
  }, [isMobile]);

  const middleIndex = Math.floor(genresMusicExample.length / 2);
  const ANGLE_STEP = 12;
  const ARC_HEIGHT = 40;

  return (
    <div className={styles.page}>
      <HeaderHome />
      <main className={styles.main}>
        <SplitTextComp
          text="Explore diversos gêneros musicais brasileiros"
          className={styles.title}
          delay={50}
          duration={0.3}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.3}
          rootMargin="-100px"
          textAlign="center"
        />

        {isMobile ? (
          <div className={styles.carouselWrapper} ref={carouselRef}>
            <div className={styles.carouselInner}>
              {genresMusicExample.map((g, i) => (
                <CardGenreLanding
                  key={i}
                  genre={g.genre}
                  imageUrl={g.imageUrl}
                  className="card-genre-container"
                />
              ))}
              {genresMusicExample.map((g, i) => (
                <CardGenreLanding
                  key={"dup-" + i}
                  genre={g.genre}
                  imageUrl={g.imageUrl}
                  className="card-genre-container"
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.cardsWrapper}>
            {genresMusicExample.map((g, i) => {
              const offset = i - middleIndex;
              const normalizedOffset = offset / (middleIndex || 1);
              const angle = offset * ANGLE_STEP;
              const translateX = normalizedOffset * 25;
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
        )}
      </main>
    </div>
  );
};

export default Landing;