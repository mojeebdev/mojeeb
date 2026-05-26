"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import BuildsTab from "@/components/BuildsTab";
import AboutTab from "@/components/AboutTab";
import ExperienceTab from "@/components/ExperienceTab";
import BlogTab from "@/components/BlogTab";
import AITab from "@/components/AITab";
import ContactTab from "@/components/ContactTab";

export type Tab = "builds" | "about" | "experience" | "blog" | "ai" | "contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("builds");

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    const content = document.getElementById("main-content");
    if (content) content.scrollTop = 0;
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      <main
        id="main-content"
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "48px 48px 80px",
        }}
      >
        {activeTab === "builds"     && <BuildsTab />}
        {activeTab === "about"      && <AboutTab />}
        {activeTab === "experience" && <ExperienceTab />}
        {activeTab === "blog"       && <BlogTab />}
        {activeTab === "ai"         && <AITab />}
        {activeTab === "contact"    && <ContactTab />}
      </main>
    </div>
  );
}
