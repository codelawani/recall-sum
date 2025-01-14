"use client"
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import Image from "next/image";
export default function Samples() {
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);

  const handleButtonClick = async () => {
    if (markdownContent) {
      setMarkdownContent(null);
    } else {
      const response = await fetch("/db/How to Ikigai  Tim Tamashiro  TEDxYYC.md");
      const text = await response.text();
      setMarkdownContent(text);
    }
  };
const isTimestampLink = (href: string | undefined) => {
    return href?.includes("youtube.com") && href.includes("t=");
  };

  return (
    <div>
      <ul className="text-center">
        <button onClick={handleButtonClick}>
          <p className="text-yellow-500 mt-2">How to Ikigai | Tim Tamashiro | TEDxYYC</p>
        </button>
      </ul>
      {markdownContent && (
        <div className="mt-4 border border-gray-300 rounded-md p-5 sum-card">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkHtml]} components={{
              h1: ({...props}) => <h1 className="text-3xl font-bold" {...props} />,
              h2: ({...props}) => <h2 className="text-2xl pt-5 font-bold" {...props} />,
              h3: ({...props}) => <h3 className="text-lg font-bold" {...props} />,
              a: ({...props}) => {
                const { href } = props;
                const className = isTimestampLink(href) ? " text-white opacity-50  italic" : "text-yellow-500 underline";
                return <a className={className} {...props} />;
            },
              img: ({...props}) => {
    const { src } = props;
    const className = src?.startsWith("https://i.ytimg.com") ? "card-banner" : "";
    return src ? <ImageContainer src={src} className={className} /> : null;
  },
  p: ({node, ...props}) => {
  const firstChild = node?.children[0];
  // Check if the node is an Element before accessing tagName
  const hasImg = firstChild && 'tagName' in firstChild && firstChild.tagName === "img";
  return hasImg ? <>{props.children}</> : <p className="mb-2" {...props} />;
},
            ul: ({ ...props }) => <ul className="list-disc" {...props} />,
              li: ({...props}) => <li className="ml-4" {...props} />,

            }}>{markdownContent}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
const ImageContainer = ({ src, className }: { src: string, className: string }) => (
  <div className="relative aspect-video w-full max-w-[400px] mx-auto mt-4">
    <Image
      className={className}
      alt="Summary Thumbnail"
      fill
      src={src}
      sizes="(max-width: 768px) 100vw, 400px"
    />
  </div>
);
