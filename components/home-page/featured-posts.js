import { PostsGrid } from "../posts";
import classes from "./featured-posts.module.css";

export default function FeaturedPostsPage(props) {
  const featuredPosts = props.posts.filter((post) => post.isFeatured);
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={featuredPosts} />
    </section>
  );
}
