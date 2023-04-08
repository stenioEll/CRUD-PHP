import { Link } from "react-router-dom";
import Titulo from "../components/Titulo";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Register() {

  const navigate = useNavigate()
  const [inputs, setInputs] = useState({}) //definindo o estado e a função

  const handleChange = (event) => { //atualiza o estado do formulário.
    const name = event.target.name; //recupera o nome do input que disparou o evento onChange
    const value = event.target.value; //recupera o valor digitado pelo usuário no input.
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => { 
    event.preventDefault();

    axios.post('http://localhost:80/api/user/save', inputs).then(function (response) {
      console.log(response.data);
      navigate('/')
    });
    console.log(inputs);
  }
  
  return (
    <div class="flex flex-wrap place-items-center justify-center h-screen py-8 font-montserrat">
      <div class={`
        overflow-hidden 
        shadow-2xl 
        rounded-lg
        p-8 
        `}>
          <Titulo titulo="Cadastro"/>
          <form class="w-full max-w-lg" onSubmit={handleSubmit}>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nome">
                  Nome
                </label>
                <input  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nome" name="nome" type="text" onChange={handleChange} placeholder="Digite seu nome"/>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="crm">
                  CRM
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="crm" name="crm" type="text" onChange={handleChange} placeholder="12455"/>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="CRM">
                  Telefone
                </label>
                <input class=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="telefone" name="telefone" type="text" onChange={handleChange} placeholder="123456"/>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Especialidade1">
                  Especialidade 1
                </label>
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="especialidade1" onChange={handleChange} id="especialidade1" placeholder="Especialidade">
                    <option>Angiologia</option>
                    <option>Buco Maxilo</option>
                    <option>Cardiologia Clínica</option>
                    <option>Cirurgia Cabeça e Pescoço</option>
                    <option>Cirurgia Cardíaca</option>
                    <option>Cirurgia Cabeça/Pescoço</option>
                    <option>Cirurgia de Torax</option>
                    <option>Cirurgia Plástica</option>
                    <option>Cirurgia Torácida</option>
                    <option>Cirurgia Vascular</option>
                    <option>Cirurgia Médica</option>
                  </select>
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Especialidade2">
                  Especialidade 2
                </label>
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="especialidade2" onChange={handleChange} id="especialidade2" placeholder="Especialidade">
                    <option>Angiologia</option>
                    <option>Buco Maxilo</option>
                    <option>Cardiologia Clínica</option>
                    <option>Cirurgia Cabeça e Pescoço</option>
                    <option>Cirurgia Cardíaca</option>
                    <option>Cirurgia Cabeça/Pescoço</option>
                    <option>Cirurgia de Torax</option>
                    <option>Cirurgia Plástica</option>
                    <option>Cirurgia Torácida</option>
                    <option>Cirurgia Vascular</option>
                    <option>Cirurgia Médica</option>
                  </select>
              </div>
              
            </div>

              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    CEP
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cep" name="cep" type="text" onChange={handleChange} placeholder="90210"/>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="estado">
                    Estado
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="estado" name="estado"  type="text" onChange={handleChange} placeholder="Paraíba"/>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Cidade">
                    Cidade
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cidade" name="cidade" type="text" onChange={handleChange} placeholder="João Pessoa"/>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Rua">
                    Rua
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nome" name="rua" type="text" onChange={handleChange} placeholder="Rua"/>
                </div>
            </div>

            <div class="justify-center flex">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cadastrar
              </button>
            </div>

          </form>
      </div>
    </div>
  )
}
