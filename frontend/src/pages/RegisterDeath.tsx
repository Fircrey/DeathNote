import { useState } from "react";
import "../styless/RegisterDeath.css";

interface PersonResponse {
  id: number;
  full_name: string;
  image_url: string;
}

export function RegisterDeath() {
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPerson = async (fullName: string, imageUrl: string): Promise<number> => {
    const [firstName, ...lastParts] = fullName.trim().split(" ");
    const lastName = lastParts.join(" ");

    if (!firstName || !lastName || !imageUrl.trim()) {
      throw new Error("Nombre completo y URL de imagen son requeridos");
    }

    const response = await fetch("http://localhost:8000/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        image_url: imageUrl,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Error al crear la persona");
    }

    const data: PersonResponse = await response.json();
    return data.id;
  };

  const killPerson = async (personId: number, description: string): Promise<void> => {
    const response = await fetch(`http://localhost:8000/kills/${personId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ description }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Error al registrar la muerte");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (!fullName.trim() || !imageUrl.trim()) {
        throw new Error("El nombre completo y la URL de imagen son obligatorios");
      }

      const personId = await createPerson(fullName, imageUrl);
      await killPerson(personId, description.trim());

      alert("Persona registrada y muerte registrada con éxito");

      // Resetear formulario
      setFullName("");
      setDescription("");
      setImageUrl("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error desconocido";
      setError(message);
      console.error("Error en handleSubmit:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="death-form" onSubmit={handleSubmit}>
      <h2>Registrar Muerte</h2>

      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label>Nombre completo</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          placeholder="Ej: Light Yagami"
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label>Descripción de la muerte</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ej: Murió mientras comía papas frente al televisor"
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label>URL de la imagen del rostro</label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="https://tuservidor.com/imagen.jpg"
          required
          disabled={isSubmitting}
        />
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Procesando..." : "Registrar en la Death Note"}
      </button>
    </form>
  );
}
