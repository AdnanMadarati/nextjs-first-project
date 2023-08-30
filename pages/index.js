import FeaturedPostsPage from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/util/posts-util";


export default function HomePage(props) {
  return (
    <>
      <Hero />
      <FeaturedPostsPage posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 30
  }
}