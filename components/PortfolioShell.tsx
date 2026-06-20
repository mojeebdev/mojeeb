import Sidebar from "@/components/Sidebar";
import type { Tab } from "@/lib/site";

export default function PortfolioShell({
  activeTab,
  children,
}: {
  activeTab: Tab;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar activeTab={activeTab} />
      <main
        id="main-content"
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "48px 48px 80px",
        }}
      >
        {children}
      </main>
    </div>
  );
}