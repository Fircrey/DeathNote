import { useState } from "react";
import "../styless/RegisterDeath.css";

export function RegisterDeath() {
  const [fullName, setFullName] = useState("");
  const [cause, setCause] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !image) {
      alert("Nombre completo y foto son obligatorios.");
      return;
    }

    // Aquí podrías enviar la info al backend
    console.log({ fullName, cause, details, image });
  };

  return (
    <form className="death-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre completo</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          placeholder="Ej: Light Yagami"
        />
      </div>

      <div className="form-group">
        <label>Causa de muerte</label>
        <input
          type="text"
          value={cause}
          onChange={(e) => setCause(e.target.value)}
          placeholder="Ej: Accidente"
        />
      </div>

      <div className="form-group">
        <label>Detalles específicos</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Ej: Mientras veía Youtube a las 8 de la noche"
        />
      </div>

      <div className="photo-section">
        <label>Foto del rostro</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
      </div>

      <button type="submit">Registrar en la Death Note</button>
    </form>
  );
}
