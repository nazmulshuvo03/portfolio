"use client";

import { useState, useEffect } from "react";

interface LoveButtonProps {
  slug: string;
  initialCount?: number;
}

export default function LoveButton({
  slug,
  initialCount = 0,
}: LoveButtonProps) {
  const [likeCount, setLikeCount] = useState(initialCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check if user already liked this article
  useEffect(() => {
    const liked = localStorage.getItem(`liked_${slug}`);
    if (liked === "true") {
      setIsLiked(true);
    }

    // Fetch current like count
    fetchLikeCount();
  }, [slug]);

  const fetchLikeCount = async () => {
    try {
      const response = await fetch(`/api/likes/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setLikeCount(data.likeCount || 0);
      }
    } catch (error) {
      console.error("Failed to fetch like count:", error);
    }
  };

  const handleLike = async () => {
    if (isLiked || isLoading) return;

    setIsLoading(true);
    setIsAnimating(true);

    // Optimistic UI update
    setLikeCount((prev) => prev + 1);
    setIsLiked(true);
    localStorage.setItem(`liked_${slug}`, "true");

    try {
      const response = await fetch(`/api/likes/${slug}`, {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        setLikeCount(data.likeCount);
      } else {
        // Revert on error
        setLikeCount((prev) => prev - 1);
        setIsLiked(false);
        localStorage.removeItem(`liked_${slug}`);
      }
    } catch (error) {
      console.error("Failed to like:", error);
      // Revert on error
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
      localStorage.removeItem(`liked_${slug}`);
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <div className="love-button-container">
      <button
        onClick={handleLike}
        disabled={isLiked || isLoading}
        className={`love-button ${isLiked ? "liked" : ""} ${
          isAnimating ? "animating" : ""
        }`}
        aria-label={isLiked ? "Already loved" : "Love this article"}
      >
        <svg
          className="heart-icon"
          viewBox="0 0 24 24"
          fill={isLiked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span className="like-count">{likeCount}</span>
      </button>
      {isAnimating && (
        <div className="love-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`}>
              ❤
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
