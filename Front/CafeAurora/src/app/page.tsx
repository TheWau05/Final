"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:4001/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, contraseña }),
      });

      const data = await res.json();

      if (res.ok) {
        // Guardar datos en localStorage para la siguiente página
        localStorage.setItem("nombre", data.Nombre);
        localStorage.setItem("numero", String(data.Numero_U));
        router.push("/bienvenido");
      } else {
        setError(data.message || "Acceso denegado");
      }
    } catch (error) {
      console.error(error);
      setError("Error en el servidor");
    }
  };

  return (
    <div className="min-h-screen bg-[#A97458] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center text-black">Iniciar Sesión</h1>
        
        <input
          type="text"
          placeholder="Usuario"
          className="border p-2 rounded text-black"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="border p-2 rounded text-black"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        
        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        <button
          onClick={handleSubmit}
          className="bg-[#5B3920] hover:bg-[#3E2616] text-white p-2 rounded font-semibold"
        >
          Listo
        </button>
      </div>
    </div>
  );
}
