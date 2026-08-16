import { useState } from "react";

function App() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  async function enregistrer(e) {
    e.preventDefault();
    console.log("Nom :", nom, "Prénom :", prenom);
    const url = "http://localhost:8000/users";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nom, prenom }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <form onSubmit={enregistrer} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
      />
      <input
        type="text"
        placeholder="Prénom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
      />
      <button type="submit" style={{ padding: "10px", borderRadius: "6px", border: "none", background: "#333", color: "white", cursor: "pointer" }}>
        Envoyer
      </button>
    </form>
  );
}

export default App;