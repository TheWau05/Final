"use client";

import { useEffect, useState } from "react";

export default function Bienvenido() {
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");

  useEffect(() => {
    const nombreGuardado = localStorage.getItem("nombre");
    const numeroGuardado = localStorage.getItem("numero");

    if (nombreGuardado && numeroGuardado) {
      setNombre(nombreGuardado);
      setNumero(numeroGuardado);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#A97458] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-6 text-center">
        <h1 className="text-2xl font-bold text-[#5B3920]">
          ¡Hola, {nombre}!
        </h1>
        <p className="text-lg text-[#5B3920]">
          Gracias por ser parte de Café Aurora.
        </p>
        <p className="text-md text-[#5B3920] font-semibold">
          Membresía: {numero}
        </p>
      </div>
    </div>
  );
}
