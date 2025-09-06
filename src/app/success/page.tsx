"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const [timer, setTimer] = useState<number>(10);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router.push("http://localhost:3000");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <main className="flex h-[100dvh] items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Muchas gracias por tu compra!
        </h1>
        <p className="text-gray-600">
          Tu pago fue procesado con éxito. En breve recibirás un correo con los
          detalles de tu pedido.
        </p>
        <small className="text-black flex gap-1 justify-center mt-4">
          Se redireccionará en{" "}
          <span className="font-bold w-[20px] text-center">{timer}</span>
        </small>
      </div>
    </main>
  );
}
