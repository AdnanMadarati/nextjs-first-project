import Image from "next/image";
import classes from "./post-content.module.css";
import { PostHeader } from "./post-header";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const PostContent = (props) => {
  const { details } = props;
  const imagePath = `/images/posts/${details.image}`;

  const customComponents = {
    // img(image) {
    //   const path = `/images/posts/${image.src}`;
    //   return <Image src={path} alt={image.alt} width={600} height={300} />;
    // },

    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p> {paragraph.children} </p>;
    },

    code(code) {
      const { className, children } = code;
      const lang = className.split("-")[1]; // className = language-js, we just need the second part
      return (  
        <SyntaxHighlighter
          style={atomDark}
          language={lang}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={details.title} image={imagePath} />
      {/* Markdown accepts components prop so we can tell it, how some element should be rendered */}
      <ReactMarkdown components={customComponents}>
        {details.content}
      </ReactMarkdown>
    </article>
  );
};
