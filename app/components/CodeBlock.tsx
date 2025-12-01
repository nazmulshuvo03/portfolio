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
    <div style={{ margin: "24px 0" }}>
      {/* Header Bar with Controls */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          backgroundColor: "#1e2230",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          borderLeft: "1px solid #3d4254",
          borderRight: "1px solid #3d4254",
          borderTop: "1px solid #3d4254",
          borderBottom: "1px solid #2d3142",
          minHeight: "48px",
        }}
      >
        {/* Left side: macOS dots + Language Label */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* macOS Window Buttons Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#ff5f56",
                boxShadow:
                  "0 0 12px rgba(255, 95, 86, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
                border: "0.5px solid rgba(0, 0, 0, 0.2)",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#ffbd2e",
                boxShadow:
                  "0 0 12px rgba(255, 189, 46, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
                border: "0.5px solid rgba(0, 0, 0, 0.2)",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#27c93f",
                boxShadow:
                  "0 0 12px rgba(39, 201, 63, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
                border: "0.5px solid rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>

          {/* Divider */}
          <div
            style={{
              width: "1px",
              height: "20px",
              backgroundColor: "#4a5066",
              marginLeft: "4px",
              marginRight: "4px",
            }}
          />

          {/* Language Label */}
          <span
            style={{
              fontSize: "0.875rem",
              fontFamily: "monospace",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#9ca3ff",
              letterSpacing: "0.12em",
              textShadow: "0 0 8px rgba(156, 163, 255, 0.4)",
              userSelect: "none",
            }}
          >
            {language}
          </span>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            padding: "6px 12px",
            fontSize: "0.75rem",
            fontWeight: "600",
            color: isCopied ? "#10b981" : "#e5e7eb",
            backgroundColor: isCopied
              ? "rgba(16, 185, 129, 0.15)"
              : "rgba(255, 255, 255, 0.05)",
            border: isCopied
              ? "1px solid rgba(16, 185, 129, 0.5)"
              : "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "6px",
            boxShadow: isCopied ? "0 0 20px rgba(16, 185, 129, 0.3)" : "none",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            if (!isCopied) {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.transform = "scale(1.05)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isCopied) {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.95)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = isCopied
              ? "scale(1)"
              : "scale(1.05)";
          }}
          title={isCopied ? "Copied!" : "Copy code to clipboard"}
          aria-label={isCopied ? "Code copied" : "Copy code"}
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
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Copied!</span>
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
        style={{
          backgroundColor: "#0d1117",
          borderLeft: "1px solid #2d3142",
          borderRight: "1px solid #2d3142",
          borderBottom: "1px solid #2d3142",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
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
            lineHeight: "1.6",
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
