export default function Header({ title = "AutoSpecs Store", subtitle }) {
    return (
        <header className="site-header">
            <div className="header-container">
                <div className="brand">
                    <span className="brand-icon">⚡</span>
                    <h1>{title}</h1>
                </div>
                {subtitle && <p className="header-subtitle">{subtitle}</p>}
            </div>
        </header>
    );
}