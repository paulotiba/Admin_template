import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao() {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function submeter() {
    if (modo === "login") {
      console.log("login");
    } else {
      console.log("cadastrar");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="hidden md:w-1/2 md:block ">
        <img
          src="https://source.unsplash.com/random"
          alt="imagem da tela de autenticação"
          className="object-cover w-full h-screen"
        />
      </div>

      <div className="w-full m-10 md:w-1/2 ">
        <h1
          className={`
            text-3xl font-bold mb-5
            `}
        >
          {modo === "login"
            ? "Entre com sua Conta"
            : "Cadastre-se na Plataforma"}
        </h1>
        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />
        <button
          onClick={submeter}
          className={`
            w-full bg-indigo-500 hover:bg-indigo-400 text-white
            rounded-lg px-4 py-3 mt-6
            `}
        >
          {modo === "login" ? "Entar" : "Cadastar"}
        </button>
        <hr className="my-6 border-gray-300" />
        <button
          onClick={submeter}
          className={`
            w-full bg-red-500 hover:bg-red-400 text-white
            rounded-lg px-4 py-3 
            `}
        >
          Entrar Com Google
        </button>
        {modo === "login" ? (
          <p className="mt-8">
            Novo Por Aqui?
            <a
              onClick={() => setModo("cadastro")}
              className={`text-blue-500
                hover:text-blue-700 font-semibold cursor-pointer`}
            >
              Crie Uma Conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já Faz Parte da nossa Comunidade?
            <a
              onClick={() => setModo("login")}
              className={`text-blue-500
            hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {" "}
              Entre Com Suas Crendeciais.
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
