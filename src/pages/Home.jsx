import { Link } from "react-router-dom";
import Titulo from "../components/Titulo";

export default function Home() {
    return (
      <div className="flex flex-wrap place-items-center justify-center h-screen py-8 font-montserrat">
        <div class={`
        overflow-hidden 
        shadow-2xl 
        rounded-lg
        p-8
        w-auto
        `}>
          <div class = "justify-center">
            <h1 class = "text-blue-500 px-5 py-2 text-2xl text-center mb-8" >Aplicação de Cadastro feito com React JS e uma API PHP e MySQL</h1>
            <h1 class = "text-1xl text-gray-700 text-center">Solução de CRUD (Create, Read, Update, Delete) baseada em React JS e API PHP/MySQL. <br /> Esse sistema, permite cadastrar, visualizar, atualizar e excluir  dados do seu banco de  dados <br />de forma rápida  e eficiente, tudo com uma  interface intuitiva e amigável.</h1>
          </div>
          <div class="flex justify-center gap-6 mt-10">
            <Link to = "/Register">
              <button class="bg-blue-600 hover:bg-blue-500 text-white hover:text-white font-bold py-2 px-4 rounded">
                Cadastro
              </button>            
            </Link>
            <Link to = "/List">
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Lista de Médicos
              </button>
            </Link>
            

          </div>
      </div>
      </div>

    )
  }
  