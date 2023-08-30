import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostData(fileName) {
  const postSlug = fileName.replace(/\.md$/, ""); //removes file extension

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath);

  //matter function recieves a string (in this case, the content we read from md file is a string)
  //and returns an object with two props: 1. meta data 2. content as string
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postsFiles = fs.readdirSync(postsDirectory);

  const allPosts = postsFiles.map((file) => {
    return getPostData(file);
  });
  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts() {
  const featuredPosts = getAllPosts().filter((post) => post.isFeatured);
  return featuredPosts;
}
