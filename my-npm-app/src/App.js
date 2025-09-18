import React, { useState } from "react";

export default function App() {
  const [images, setImages] = useState([
    { id: 1, title: "Eejmplo de un perro id:1", url: "https://picsum.photos/id/237/200/300"},
    { id: 10, title: "nevado id:2", url: "https://picsum.photos/seed/picsum/200/300" },
    { id: 100, title: "Imagen random", url: "https://picsum.photos/200/300" },
  ]);

  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [search, setSearch] = useState("");

  
  // Filtrar imágenes por título
  const filteredImages = images.filter((img) =>
    img.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Galeria de imagenes  </h2>
      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="busca por el titulo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px", display: "block" }}
      />

      {/* Lista de imágenes */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {filteredImages.map((img) => (
          <div key={img.id} style={{ textAlign: "center" }}>
            <img src={img.url} alt={img.title} style={{ borderRadius: "8px" }} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


