export default function Header({ storeName, slogan }) {
    return (
        <header className="site-header">
            <div className="header-content">
                <div className="logo-container">
                    <span className="logo-icon">⚙️</span>
                    <h1>{storeName}</h1>
                </div>
                <p className="slogan">{slogan}</p>
            </div>
        </header>
    );
}