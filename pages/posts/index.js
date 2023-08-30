import { AllPosts } from "@/components/posts";
import { getAllPosts } from "@/util/posts-util";

export default function PostsPage(props) {
  return <AllPosts allPosts={props.posts}/>;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 30,
  };
}
