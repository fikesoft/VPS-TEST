// src/layouts/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

// adjust this path to wherever jsrepo dropped Aurora
import Aurora from "../blocks/Backgrounds/Aurora/Aurora";
import Header from "../sections/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="container mt-4 mb-4 position-relative min-vh-100 overflow-hidden">
      <Aurora
        colorStops={[
          "#2C1250", // almost–black purple
          "#4F228D", // mid-purple
          "#693B93", // brighter magenta-purple
          "#251C31", // anchor back to very dark
        ]}
        blend={0.2}
        amplitude={1}
        speed={1}
      />

      {/* 2) Your actual page content, positioned above Aurora */}
      <div className="d-flex flex-column position-relative z-2 min-vh-100">
        <Header />

        <main style={{ flex: 1 }}>
          <Outlet />
        </main>

        <footer></footer>
      </div>
    </div>
  );
};

export default MainLayout;
