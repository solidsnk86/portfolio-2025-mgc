"use client";

import { useEffect, useState } from "react";
import { showDialog } from "../utils/dialog";
import { Loader } from "lucide-react";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  weight: ["700"],
  subsets: ["latin"],
});

interface ApiMailerResponse {
  success: boolean;
  message: string;
}

export const ContactForm = () => {
  const [namevalue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();

  const stateCleanner = () => {
    setNameValue("");
    setEmailValue("");
    setMessageValue("")
    setIsLoading(false);
  };

  const sendFormData = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    if (!namevalue) {
      setError("* El nombre es requerido");
      setIsLoading(false);
      return;
    }
    if (!emailValue) {
      setError("* El email es requerido");
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch("/api/mailer", {
        method: "POST",
        body: JSON.stringify({ name: namevalue, email: emailValue }),
      });

      const data: ApiMailerResponse = await response.json();
      if (data.success) {
        stateCleanner();
        showDialog({
          content: (
            <div className="p-6 flex flex-col gap-3 items-center justify-center">
              <h3 className="font-semibold text-lg">
                Ey gracias por contactarme!
              </h3>
              {data.message}
            </div>
          ),
        });
      } else {
        setIsLoading(false);
        showDialog({
          content: (
            <div className="p-6 flex flex-col gap-3 items-center justify-center">
              <h3 className="font-semibold text-lg">Hubo un error</h3>
              {data.message}
            </div>
          ),
        });
      }
    } catch (error) {
      setIsLoading(false);
      setError("Hubo un error al enviar el formulario");
      console.log("No se envío el formulario correctamente", error);
    }
  };

  useEffect(() => {
    const textarea = document.querySelector("textarea")!;
    textarea.style.height = "auto"
    textarea.style.height = textarea.scrollHeight + "px"
  }, [messageValue]);

  return (
    <>
      <h3
        id="contact"
        className={`font-semibold text-3xl ${fraunces.className} text-center my-12`}
      >
        Acepto desafíos… ¿cuál es el tuyo?
      </h3>
      <form
        onSubmit={sendFormData}
        className="z-10 flex flex-col justify-center mx-auto gap-3"
      >
        <div>
          <input
            type="text"
            value={namevalue}
            onChange={(e) => {
              setError("");
              setNameValue(e.target.value);
            }}
            className="border border-zinc-300/70 dark:border-zinc-700 rounded p-2"
            placeholder="Nombre"
          />
        </div>
        <div>
          <input
            type="email"
            value={emailValue}
            onChange={(e) => {
              setError("");
              setEmailValue(e.target.value);
            }}
            className="border border-zinc-300/70 dark:border-zinc-700 rounded p-2"
            placeholder="Email"
          />
        </div>
        <div>
          <textarea
            value={messageValue}
            onChange={(e) => {
              setError("");
              setMessageValue(e.target.value);
            }}
            className="border border-zinc-300/70 dark:border-zinc-700 rounded p-2 w-full"
            placeholder="Mensaje"
          />
        </div>
        <button
          type="submit"
          className="border border-zinc-300/70 dark:border-zinc-700 rounded-md p-3 w-full cursor-pointer hover:border-blue-500"
        >
          {isLoading ? (
            <span className="flex justify-center gap-2 mx-auto items-center">
              Enviando
              <Loader size={18} className="animate-spin" />
            </span>
          ) : (
            <span>Enviar</span>
          )}
        </button>
        {error && <small className="text-red-400 ml-1">{error}</small>}
      </form>
    </>
  );
};
