export default function Footer({ storeName, year }) {
    return (
        <footer className="site-footer">
            <p>© {year} {storeName} — Base E-commerce React (Módulo 2 IPSS).</p>
        </footer>
    );
}