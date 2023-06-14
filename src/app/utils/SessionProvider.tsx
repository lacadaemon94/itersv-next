"use client";
import React, { useState, useEffect } from "react";

export const SessionContext = React.createContext({
  isLightTheme: false,
  toggleTheme: () => {},
});

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => setIsLightTheme(!isLightTheme);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsLightTheme(!prefersDarkMode);
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme) {
      setIsLightTheme(storedTheme === "light");
    }
  }, []);

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.dataset.theme = isLightTheme ? "light" : "dark";
    rootElement.style.setProperty(
      "color-scheme",
      isLightTheme ? "light" : "dark"
    );
    window.localStorage.setItem("theme", isLightTheme ? "light" : "dark");
  }, [isLightTheme]);

  return (
    <SessionContext.Provider value={{ isLightTheme, toggleTheme }}>
      {children}
    </SessionContext.Provider>
  );
}
