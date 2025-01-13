"use client"
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
export default function Samples() {
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);

  const handleButtonClick = async () => {
const response = await fetch("db/How to Ikigai  Tim Tamashiro  TEDxYYC.md");    const text = await response.text();
    setMarkdownContent(text);
  };
const isTimestampLink = (href: string | undefined) => {
    // Adjust the pattern to match your timestamp links
    return href?.includes("youtube.com") && href.includes("t=");
  };

  return (
    <div>
      <ul>
        <button onClick={handleButtonClick}>
          <p className="text-yellow-500 mt-2">How to Ikigai | Tim Tamashiro | TEDxYYC</p>
        </button>
      </ul>
      {markdownContent && (
        <div className="mt-4 border border-gray-300 rounded-md p-5 ">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkHtml]} components={{
              h1: ({node, ...props}) => <h1 className="text-2xl font-bold" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-xl pt-5 font-bold" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-lg font-bold" {...props} />,
              a: ({node, ...props}) => {
                const { href } = props;
                const className = isTimestampLink(href) ? " text-white opacity-50  italic" : "text-yellow-500 underline";
                return <a className={className} {...props} />;
            },
            ul: ({ node, ...props }) => <ul className="list-disc" {...props} />,
              li: ({node, ...props}) => <li className="ml-4" {...props} />,
              p: ({node, ...props}) => <p className="mb-2" {...props} />,
            }}>{markdownContent}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
