import "./_group.css";
import Navbar from "./_target/Navbar";

export function Reference() {
  return (
    <div className="svHeaderPreview">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
      />
      <Navbar />
      <main className="svHeaderPage" aria-label="Header preview content" />
    </div>
  );
}
