import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error(`Error en el servidor: HTTP ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.products || []);
    } catch (err) {
      setError(err.message || "Error al conectar con la API de productos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-layout">
      <Header
        title="AutoSpecs Store"
        subtitle="Catálogo de productos dinámico"
      />

      <main className="main-content">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {loading && <Loader message="Obteniendo productos desde DummyJSON..." />}

        {error && !loading && (
          <ErrorMessage message={error} onRetry={fetchProducts} />
        )}

        {!loading && !error && (
          <ProductList products={filteredProducts} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;