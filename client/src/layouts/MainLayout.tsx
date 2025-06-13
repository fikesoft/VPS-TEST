// src/layouts/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

// adjust this path to wherever jsrepo dropped Aurora
import Aurora from "../blocks/Backgrounds/Aurora/Aurora";

const MainLayout: React.FC = () => {
  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* 1) Aurora itself, fixed full-screen */}
      <Aurora
        colorStops={[
          "#2C1250", // almost–black purple
          "#4F228D", // mid-purple
          "#693B93", // brighter magenta-purple
          "#251C31", // anchor back to very dark
        ]}
        blend={0.7}
        amplitude={1}
        speed={1}
      />

      {/* 2) Your actual page content, positioned above Aurora */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <header>
          <h1>My Site</h1>
        </header>

        <main style={{ flex: 1 }}>
          <Outlet />
        </main>

        <footer>{/* footer if you have one */}</footer>
      </div>
    </div>
  );
};

export default MainLayout;
