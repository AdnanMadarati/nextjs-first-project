import classes from "./all-posts.module.css";
import { PostsGrid } from "./posts-grid";

export const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.allPosts} />
    </section>
  );
};
