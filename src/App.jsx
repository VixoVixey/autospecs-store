import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import initialProducts from "./data/products.json";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = initialProducts.filter((product) => {
    const term = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  });

  return (
    <div className="app-layout">
      <Header
        storeName="AutoSpecs Motorsport Parts"
        slogan="Componentes de alto rendimiento y fichas técnicas automotrices"
      />

      <main className="main-content">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {selectedProduct && (
          <aside className="alert-selected">
            <p>
              Componente Seleccionado: <strong>{selectedProduct.name}</strong> (${selectedProduct.price.toLocaleString("es-CL")})
            </p>
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>✕</button>
          </aside>
        )}

        <ProductList
          products={filteredProducts}
          onSelectProduct={setSelectedProduct}
        />
      </main>

      <Footer storeName="AutoSpecs Motorsport" year={2026} />
    </div>
  );
}

export default App;