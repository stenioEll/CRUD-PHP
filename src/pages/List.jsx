import { Link } from "react-router-dom";
import Titulo from "../components/Titulo";
import { useEffect, useState } from "react";
import axios from "axios";


export default function List() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  function getUsers() {
    axios.get('http://localhost:80/api/users/').then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost:80/api/user/${id}/delete`).then(function(response){
        console.log(response.data);
        getUsers();
    });
}
    
  
  return (
    <div class="flex flex-wrap place-items-center justify-center h-screen py-8 font-montserrat">
      <div class={`
        overflow-hidden 
        shadow-2xl 
        rounded-lg
        p-8
        
        `}>
          <Titulo titulo="Médicos Cadastrados"/>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-white-50 dark:bg-white dark:text-white-400 whitespace-nowrap">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              id
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Nome
                          </th>
                          <th scope="col" class="px-6 py-3">
                              CRM
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Telefone
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Especialidade 1
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Especialidade 2
                          </th>
                          <th scope="col" class="px-6 py-3">
                              CEP
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Estado
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Cidade
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Rua
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Atualizar
                          </th>

                          <th scope="col" class="px-6 py-3">
                              <span class="sr-only">Edit</span>
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      {users.map((user, key)=>
                        <tr key = {key} class="bg-white text-gray-600 border-b 0  hover:bg-gray-200 dark:hover:bg-gray-100">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                {user.id}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                {user.nome}
                            </th>
                            <td class="px-6 py-4">
                                {user.crm}
                            </td>
                            <td class="px-6 py-4">
                                {user.telefone}
                            </td>
                            <td class="px-6 py-4">
                                {user.especialidade1}
                            </td>
                            <td class="px-6 py-4">
                                {user.especialidade2}
                            </td>
                            <td class="px-6 py-4">
                                {user.cep}
                            </td>
                            <td class="px-6 py-4">
                                {user.estado}
                            </td>
                            <td class="px-6 py-4">
                                {user.cidade}
                            </td>
                            <td class="px-6 py-4">
                                {user.rua}
                            </td>
                            <td class="px-6 py-4 text-right">
                                <Link to={`/${user.id}/edit`} class=" mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline ">
                                    Edit
                                </Link>
                                
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => deleteUser(user.id)}>Deletar</a>
                            </td>
                        </tr>
                      
                      )}
                      
                  </tbody>
              </table>
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
