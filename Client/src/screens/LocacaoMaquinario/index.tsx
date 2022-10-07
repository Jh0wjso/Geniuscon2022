import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './styles.css'

export default function LocacaoMaquinario() {
  function handleInfo(arg0: string): void {
    throw new Error('Function not implemented.')
  }

  return (
    <>
      <div className="bg-gray-150 w-full">
        <div className="title-style-1 mb-10">
          <h1>Cadastro De Maquinário</h1>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="w-[100%] md:w-[25%]  mt-5 md:mt-0">
            <div className="flex felx-row">
              <h5 className="text-xl mr-2">Nome do Maquinário</h5>
              <small className="text-red-600 text-xs italic font-bold">
                *Campo Obrigatório
              </small>
            </div>
            <input
              type="text"
              placeholder="Nome Aqui"
              className="w-[90%] h-10"
            />
          </div>
          <div className="w-[100%] md:w-[25%]">
            <div className="flex felx-row  mt-5 md:mt-0">
              <h5 className="text-xl mr-2">Marca</h5>
              <small className="text-red-600 text-xs italic font-bold">
                *Campo Obrigatório
              </small>
            </div>
            <select className="w-[90%] h-10" placeholder="Componente Extra">
              <option value="volvo" className="p-2 bg-white">
                Selecione
              </option>
              <option value="volvo" className="p-2 bg-white">
                John Deere
              </option>
              <option value="saab" className="p-2 bg-white">
                New Holland
              </option>
              <option value="fiat" className="p-2 bg-white">
                Massey Ferguson
              </option>
              <option value="audi" className="p-2 bg-white">
                Valtra
              </option>
              <option value="audi" className="p-2 bg-white">
                Case
              </option>
              <option value="audi" className="p-2 bg-white">
                Agrale
              </option>
            </select>
          </div>
          <div className="w-[100%] md:w-[25%]">
            <div className="flex felx-row mt-5 md:mt-0">
              <h5 className="text-xl mr-2">Combustível</h5>
              <small className="text-red-600 text-xs italic font-bold">
                *Campo Obrigatório
              </small>
            </div>
            <select className="w-[90%]" placeholder="Componente Extra">
              <option value="" className="p-2 bg-white">
                Selecione
              </option>
              <option value="Disel" className="p-2 bg-white">
                Disel
              </option>
              <option value="Bio Disel" className="p-2 bg-white">
                Bio Disel
              </option>
              <option value="Disel S-10" className="p-2 bg-white">
                Disel S-10
              </option>
              <option value="Disel Adtivado" className="p-2 bg-white">
                Disel Adtivado
              </option>
              <option value="Gasolina" className="p-2 bg-white">
                Gasolina
              </option>
              <option value="Gasolina Aditivada" className="p-2 bg-white">
                Gasolina Aditivada
              </option>
              <option value="Etanol" className="p-2 bg-white">
                Etanol
              </option>
              <option value="Gás Natural Veicular" className="p-2 bg-white">
                Gás Natural Veicular
              </option>
            </select>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between items-center w-[100%] mt-5">
            <div className="w-[100%] my-3 md:w-[20%]">
              <div className="flex felx-row">
                <h5 className="text-xl mr-2 ">Descrição</h5>
                <small className="text-red-600 text-xs italic font-bold">
                  *Campo Obrigatório
                </small>
              </div>
            </div>
            <textarea
              className="w-[95%] h-28 p-2 rounded-xl md:w-[75%]"
              placeholder="Descrição Aqui"
            />
          </div>
          <div className="flex flex-col justify-between items-center w-[100%] mt-5">
            <div className="w-[100%] my-3 md:w-[20%]">
              <div className="flex felx-row">
                <h5 className="text-xl mr-2 ">Adicional</h5>
                <small className="text-red-600 text-xs italic font-bold">
                  *Campo Obrigatório
                </small>
              </div>
            </div>
            <textarea
              className="w-[95%] h-28 p-2 rounded-xl md:w-[75%]"
              placeholder="Informação Adicional Aqui"
            />
          </div>
        </div>

        <div className="flex flex-col w-[100%] md:flex-row">
          <div className="w-[100%] flex flex-col my-10 items-center justify-center">
            <div className="flex felx-row">
              <h5 className="text-xl mr-2">Imagem do Maquinário</h5>
              <small className="text-red-600 italic font-bold">
                *Campo Obrigatório
              </small>
            </div>
            <div className="mb-8 bg-white">
              <input type="file" name="file" id="file" className="sr-only" />
              <label
                htmlFor="file"
                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                    Arraste a imagem
                  </span>
                  <span className="mb-2 block text-base font-medium text-[#6B7280]">
                    Ou
                  </span>
                  <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Escolha
                  </span>
                </div>
              </label>
            </div>
          </div>
          <div className="w-[100%] flex flex-col my-10 items-center justify-center">
            <div className="flex felx-row">
              <h5 className="text-xl mr-2">Nota de Revisão</h5>
              <small className="text-red-600 italic font-bold">
                *Campo Obrigatório
              </small>
            </div>
            <div className="mb-8 bg-white">
              <input type="file" name="file" id="file" className="sr-only" />
              <label
                htmlFor="file"
                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                    Arraste a imagem
                  </span>
                  <span className="mb-2 block text-base font-medium text-[#6B7280]">
                    Ou
                  </span>
                  <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Escolha
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="w-[100%] md:w-[25%]  mt-5 md:mt-0">
            <div className="flex felx-row">
              <h5 className="text-xl mr-2">Consumo</h5>
              <small className="text-red-600 text-xs italic font-bold">
                *Campo Obrigatório
              </small>
            </div>
            <input
              type="number"
              placeholder="Nome Aqui"
              className="w-[90%] h-10"
            />
          </div>
          <div className="w-[100%] md:w-[25%]">
            <div className="flex felx-row mt-5 md:mt-0">
              <h5 className="text-xl mr-2">Categoria</h5>
              <small className="text-red-600 text-xs italic font-bold">
                *Campo Obrigatório
              </small>
            </div>
            <select className="w-[90%]" placeholder="Componente Extra">
              <option value="" className="p-2 bg-white">
                Selecione
              </option>
              <option value="Forrageira" className="p-2 bg-white">
                Forrageira
              </option>
              <option value="Bio Disel" className="p-2 bg-white">
                Colheitadeira
              </option>
              <option value="Disel S-10" className="p-2 bg-white">
                Tratores
              </option>
              <option value="Disel Adtivado" className="p-2 bg-white">
                Pulverizadores
              </option>
              <option value="Gasolina" className="p-2 bg-white">
                Grades
              </option>
              <option value="Gasolina Aditivada" className="p-2 bg-white">
                Enfardadoras
              </option>
              <option value="Etanol" className="p-2 bg-white">
                Semeadoras
              </option>
            </select>
          </div>
        </div>

        <div className="bg-white flex items-center flex-col md:mx-44 mt-5 p-3">
          <div className="flex felx-row mt-5 md:mt-0">
            <h5 className="text-xl mr-2">Itens do Maquinário</h5>
            <small className="text-red-600 text-xs italic font-bold">
              *Campo Obrigatório
            </small>
          </div>
          <ul className="detail grid md:grid-cols-3 md:gap-5 md:mb-2 md:">
            <li key="Grade">
              <input id="Grade" type="checkbox" />
              <label htmlFor="Grade">GPS</label>
            </li>
            <li key="Grade">
              <input id="Grade" type="checkbox" />
              <label htmlFor="Grade">Airbag</label>
            </li>
            <li key="Grade">
              <input id="Grade" type="checkbox" />
              <label htmlFor="Grade">Alarme</label>
            </li>
            <li key="Grade">
              <input id="Grade" type="checkbox" />
              <label htmlFor="Grade">Controle de tração</label>
            </li>
            <li key="Grade">
              <input id="Grade" type="checkbox" />
              <label htmlFor="Grade">Rádio</label>
            </li>
            <li key="Grade">
              <input id="Grade" type="checkbox" />
              <label htmlFor="Grade">Tração 4x4</label>
            </li>
            <li key="Grade">
              <input id="Grade" type="checkbox" />
              <label htmlFor="Grade">Colheitadeira Axial</label>
            </li>
            <li key="Grade">
              <input id="Grade" type="checkbox" />
              <label htmlFor="Grade">Direção hidraulica</label>
            </li>
            <li key="Grade">
              <input id="Grade" type="checkbox" />
              <label htmlFor="Grade">Comando Hidráulico</label>
            </li>
            <li key="Grade">
              <input id="Grade" type="checkbox" />
              <label htmlFor="Grade">Peso traseiro</label>
            </li>
            <li key="Grade">
              <input id="Grade" type="checkbox" />
              <label htmlFor="Grade">Peso dianteiro</label>
            </li>
            <li key="Grade">
              <input id="Grade" type="checkbox" />
              <label htmlFor="Grade">Comando duplo</label>
            </li>
          </ul>
        </div>
        <div className="bg-white flex items-center flex-col md:mx-44 mt-5 p-3 mb-20">
          <span className="flex flex-col justify-center items-center">
            <label className="flex gap-2 font-bold ml-5">
              Disponibilidade de Transporte{' '}
              <HiOutlineExclamationCircle
                className="text-blue-700"
                onClick={() => handleInfo('operador')}
                size={25}
              />
            </label>
            <span className="flex gap-1 ml-7">
              <input id="sim" type="checkbox" checked disabled />
              <label htmlFor="sim">Sim</label>
            </span>
            <span className="flex gap-1 ml-7">
              <input id="nao" type="checkbox" disabled />
              <label htmlFor="nao">Não</label>
            </span>
          </span>
          <span className="flex flex-col justify-center items-center">
            <label className="flex gap-2 font-bold">
              Operador{' '}
              <HiOutlineExclamationCircle
                className="text-blue-700"
                onClick={() => handleInfo('operador')}
                size={25}
              />
            </label>
            <span className="flex gap-1 ml-7">
              <input id="sim" type="checkbox" disabled />
              <label htmlFor="sim">Sim</label>
            </span>
            <span className="flex gap-1 ml-7">
              <input id="nao" type="checkbox" checked disabled />
              <label htmlFor="nao">Não</label>
            </span>
          </span>
          <span className="flex flex-col p-2 items-center justify-between md:flex-row">
            <span className="flex gap-1 mr-3">
              <input id="termos-seguradora" type="checkbox" />
              <label htmlFor="termos-seguradora" className="select-none">
                Concordar com os termos da{' '}
                <Link
                  to="termos-seguradora"
                  className="text-blue-600 underline"
                >
                  seguradora
                </Link>
                *
              </label>
            </span>
            <span className="flex gap-1 items-center">
              <input id="termos-contratual" type="checkbox" />
              <label htmlFor="termos-contratual" className="select-none">
                Concordar com os termos{' '}
                <Link className="text-blue-600 underline" to="termos-contrato">
                  contratual
                </Link>
                *
              </label>
            </span>
          </span>
          <div className="flex justify-end w-[100%]">
            <button className="w-36 items-center flex justify-center h-12">
              <p className="text-center mx-0 my-0">Enviar Formulário</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
