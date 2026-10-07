export default function Footer({ storeName = "AutoSpecs Store", year = 2026 }) {
  return (
    <footer className="site-footer">
      <p>© {year} {storeName} — Evaluación 2: Consumo de APIs en React.</p>
    </footer>
  );
}