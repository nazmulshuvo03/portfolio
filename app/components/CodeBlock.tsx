"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="my-6 group">
      {/* Controls outside the box, right aligned */}
      <div className="flex items-center justify-end gap-2 mb-1.5 px-1">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-400 hover:text-white transition-colors rounded hover:bg-white/10"
          title="Copy code"
        >
          {isCopied ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Box */}
      <div
        className="rounded-md overflow-hidden border border-[var(--border-color)]"
        style={{ backgroundColor: "#111" }}
      >
        <SyntaxHighlighter
          style={vscDarkPlus as any}
          language={language}
          PreTag="div"
          customStyle={{
            margin: 0,
            padding: "20px",
            backgroundColor: "transparent",
            fontSize: "0.9rem",
            lineHeight: "1.5",
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
