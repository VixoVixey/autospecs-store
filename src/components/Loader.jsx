export default function Loader({ message = "Cargando Productos..."}) {
    return (
        <div className="state-container">
            <div className="spinner"></div>
            <p className="state-text">{message}</p>
        </div>
    );
}