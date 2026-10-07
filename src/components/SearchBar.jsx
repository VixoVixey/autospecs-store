export default function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <div className="search-container">
            <input 
            type="text"
            placeholder="Buscar componentes técnicos o categorías..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
            aria-label="Buscar productos"
            />
        </div>
    );
}