import { PostContent } from "@/components/posts/post-details";
import { getPostData } from "@/util/posts-util";
import { getAllPosts } from "@/util/posts-util";

export default function SelectedPost(props) {
  return <PostContent details={props.postDetails} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const fileName = params.slug;
  const data = getPostData(fileName);

  return {
    props: {
      postDetails: data,
    },
  };
}

export function getStaticPaths() {
  const posts = getAllPosts();
  const slugs = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths: slugs,
    fallback: false,
  };
}

// export function getServerSideProps(context) {
//   const { params } = context;
//   const fileName = params.slug;

//   const postDetail = getPostData(fileName);

//   return {
//     props: {
//       post: postDetail,
//     },
//   };
// }
