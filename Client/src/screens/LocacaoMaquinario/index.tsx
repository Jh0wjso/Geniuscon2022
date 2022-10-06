import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './styles.css'

export default function LocacaoMaquinario() {
  function handleInfo(arg0: string): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div className="grid items-center justify-center bg-white">
      <input type="text" className="w-72" placeholder="Nome Maquinário" />
      <div className="w-full p-1 bg-gray-150">
        <div className="ml-2 flex justify-center items-center flex-col">
          <h1 className="">Selecione a Marca</h1>
          <div className="flex flex-col items-start gap-2 m-4  ">
            <div className="flex items-center flex-col gap-2">
              <div className="flex items-center gap-2">
                <select className="w-[100%]" placeholder="Componente Extra">
                  <option value="volvo" className="text-center p-2 bg-white">
                    Selecione
                  </option>
                  <option value="volvo" className="text-center p-2 bg-white">
                    John Deere
                  </option>
                  <option value="saab" className="text-center p-2 bg-white">
                    New Holland
                  </option>
                  <option value="fiat" className="text-center p-2 bg-white">
                    Massey Ferguson
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Valtra
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Case
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Agrale
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-1 bg-gray-150">
        <div className="ml-2 flex justify-center items-center flex-col">
          <h1 className="">Categoria</h1>
          <div className="flex flex-col items-start gap-2 m-4  ">
            <div className="flex items-center flex-col gap-2">
              <div className="flex items-center gap-2">
                <select className="w-[100%]" placeholder="Componente Extra">
                  <option value="volvo" className="text-center p-2 bg-white">
                    Selecione
                  </option>
                  <option value="saab" className="text-center p-2 bg-white">
                    Forrageira
                  </option>
                  <option value="fiat" className="text-center p-2 bg-white">
                    Colheitadeira
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Tratores
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Pulverizadores
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Grades
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Enfardadoras
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Semeadoras
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-5 text-center bg-gray-150">
        <h1>Imagem do Maquinário</h1>
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          width="48"
          height="48"
          alt="Input Enviar Imagem"
          className="bg-white w-[60%]"
        />
        <button className="flex justify-center items-center mt-2 w-[50%]">
          <p className="font-bold text-xl">Enviar Imagem</p>
        </button>
      </div>
      <div className="bg-gray-150">
        <h1 className="filter-title text-center">Itens do maquinario</h1>
        <ul className="detail grid grid-cols-3 gap-5 m-2">
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
      <div className="bg-gray-150 flex flex-col justify-center items-center">
        <h1 className="text-center">Descrição do Maquinário</h1>
        <input type="text" placeholder="Descrição Aqui" className="w-56" />
      </div>
      <span className="bg-gray-150">
        <label className="flex gap-2 ml-5 font-bold">
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
      <span className="bg-gray-150">
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
      <div className="w-full p-1 bg-gray-150">
        <div className="ml-2 flex justify-center items-center flex-col">
          <h1 className="">Tipo de Combustível</h1>
          <div className="flex flex-col items-start gap-2 m-4  ">
            <div className="flex items-center flex-col gap-2">
              <div className="flex items-center gap-2">
                <select className="w-[100%]" placeholder="Componente Extra">
                  <option value="volvo" className="text-center p-2 bg-white">
                    Selecione
                  </option>
                  <option value="saab" className="text-center p-2 bg-white">
                    Disel
                  </option>
                  <option value="fiat" className="text-center p-2 bg-white">
                    Bio Disel
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Disel S-10
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Disel Adtivado
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Gasolina
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Gasolina Aditivada
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Etanol
                  </option>
                  <option value="audi" className="text-center p-2 bg-white">
                    Gás Natural Veicular
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-150 flex flex-col justify-center items-center">
        <h1 className="text-center">Consumo Por KM</h1>
        <input
          type="number"
          placeholder="Comsumo Aqui"
          className="w-[50%] text-center"
        />
      </div>
      <div className="p-5 text-center flex flex-col justify-center items-center bg-gray-150">
        <h1>Nota de Revisão</h1>
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          width="48"
          height="48"
          alt="Input Enviar Imagem"
          className="bg-white w-[60%]"
        />
        <button className="flex justify-center items-center mt-2 w-[50%]">
          <p className="font-bold text-xl">Enviar Imagem</p>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-150">
        <h1>Informação Adicional</h1>
        <input
          type="text"
          placeholder="Informações adicionais aqui"
          className="w-[60%] text-center"
        />
      </div>
      <span className="grid grid-cols-2 p-2 items-center">
        <span className="flex gap-1 mr-3">
          <input id="termos-seguradora" type="checkbox" />
          <label htmlFor="termos-seguradora" className="select-none">
            Concordar com os termos da{' '}
            <Link to="termos-seguradora">seguradora</Link>*
          </label>
        </span>
        <span className="flex gap-1 items-center">
          <input id="termos-contratual" type="checkbox" />
          <label htmlFor="termos-contratual" className="select-none">
            Concordar com os termos <Link to="termos-contrato">contratual</Link>
            *
          </label>
        </span>
      </span>
      <div className="flex justify-end w-[100%]">
        <button className="w-36 items-center flex justify-center">
          <p>Enviar Formulário</p>
        </button>
      </div>
    </div>
  )
}
