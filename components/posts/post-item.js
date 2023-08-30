import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

export const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const imagePath = `/images/posts/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={400}
            height={400}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3> {title} </h3>
          <time> {date} </time>
          <p> {excerpt} </p>
        </div>
      </Link>
    </li>
  );
}
