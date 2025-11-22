"use client";

import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const lightModeStyles = {
    backgroundColor: "#f5f5f5",
    borderColor: isHovering ? "#FFB81C" : "#d0d0d0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const darkModeStyles = {
    backgroundColor: "#3a3a3a",
    borderColor: isHovering ? "#888888" : "#555555",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  };

  const buttonStyles = {
    ...{
      width: "44px",
      height: "44px",
      border: "1px solid",
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 200ms ease-in-out",
      transform: isHovering ? "scale(1.05)" : "scale(1)",
    },
    ...(theme === "light" ? lightModeStyles : darkModeStyles),
  };

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={buttonStyles}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      suppressHydrationWarning
    >
      {theme === "light" ? (
        // Moon icon for light mode (to switch to dark)
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "all 200ms ease-in-out" }}
        >
          {/* Simple crescent moon */}
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        // Sun icon for dark mode (to switch to light)
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFB81C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "all 200ms ease-in-out" }}
        >
          {/* Simple sun with rays */}
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggleButton;
