import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/background.jpg" alt="Personal Image" width={400}  height={400} />
      </div>
      <h1>Hi</h1>
      <p>Something...</p>
    </section>
  );
}
