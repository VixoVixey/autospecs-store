export default function ErrorMessage({ message, onRetry }) {
    return (
        <div className="state-container error-box">
            <span className="error-icon">⚠️</span>
            <p className="error-text">{message}</p>
            {onRetry && (
                <button className="retry-button" onClick={onRetry}>
                    Reintentar Conexión
                </button>
            )}
        </div>
    );
}