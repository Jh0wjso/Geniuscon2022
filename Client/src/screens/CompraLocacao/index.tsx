import './styles.css'
import { AiOutlineFileSearch } from 'react-icons/ai'
import imagem from '../../assets/img/trator.jpg'
import { FaMapMarkerAlt, FaTrash } from 'react-icons/fa'
import { RiShoppingBag3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function CompraLocacao() {
  return (
    <section id="compraLocacao" className="grid grid-cols-4">
      <div className="col-span-3">
        <div className="flex flex-col items-start rounded-sm bg-white p-6 pb-12 m-4 mb-8">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" color="#0f8239" />
            <h4 className="text-gray-400">SELECIONE O ENDEREÇO</h4>
          </div>
          <div className="flex gap-4">
            <input placeholder="Inserir CEP" type="text" />
            <button className="w-32 h-12 rounded-md font-black bg-green-brasao text-white hover:bg-green-brasao2">
              OK
            </button>
            <a
              className="flex items-center"
              href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            >
              <span className="whitespace-nowrap text-sm text-green-800 font-bold">
                Não lembro meu CEP
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col  items-start rounded-sm bg-white p-4 m-4 ">
          <div className="w-full flex items-center justify-between ">
            <div className="flex items-center gap-2 w-full">
              <RiShoppingBag3Fill color="#0f8239" size={20} />
              <h4 className="font-black text-2xl">PRODUTO </h4>
            </div>
            <div>
              <button className="flex justify-end text-black text-xs  bg-white h-full hover:bg-white">
                <span className="whitespace-nowrap flex items-center gap-2 text-green-800 font-bold p-2 rounded border-green-400 border-x-[1px] border-y-[1px] hover:bg-gray-50">
                  <FaTrash color="#0f8239" />
                  REMOVER TODOS OS PRODUTOS
                </span>
              </button>
            </div>
          </div>
          <div className="w-full  ">
            <div className="w-80 bg-gray-100 rounded-md ">
              <h4 className="px-1 m-0 text-xl font-light text-gray-400">
                Alugado e entregue por:{' '}
                <span className="font-bold">Locador!</span>
              </h4>
            </div>
          </div>
          <div className="w-full border-t-[1px] border-gray-100">
            <div className="flex items-center gap-2  mt-2 mb-4">
              <img className="rounded" src={imagem} alt="" />
              <div className="w-full text-left text-2xl font-bold">
                <label htmlFor=""></label>
                <p className="text-gray-600">Valtra - A950</p>
                <p className="text-gray-600">Valor Final: R$ 1.000,00 </p>
                <p className="text-green-400">Produto adicionado</p>
              </div>
            </div>
            <div className="w-full p-1 bg-white border-green-400 border-[1px] rounded">
              <div className="ml-2">
                <h1 className="">Serviços adicionais</h1>
                <div className="flex flex-col items-start gap-2 m-4  ">
                  <div className="w-full flex items-center justify-between gap-2">
                    <div className="flex items-center">
                      <h4 className="">Garantia estendida</h4>
                      <input
                        className="input ml-4"
                        type="checkbox"
                        name=""
                        id=""
                      />
                    </div>
                    <span>R$ 100,00</span>
                  </div>
                  <div className=" w-full flex flex-col gap-2">
                    <div className="flex items-center gap-2 justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <h4 className=" whitespace-nowrap m-0">
                            Componente Extra
                          </h4>
                        </div>
                        <select
                          className="w-[90%] p-2"
                          placeholder="Componente Extra"
                        >
                          <option className="text-center" value="">
                            Nenhum
                          </option>
                          <option className="text-center" value="">
                            Grade
                          </option>
                          <option value=""></option>
                        </select>
                      </div>
                      <span>R$ 100,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white col-span-1 mt-4 ml-4 mb-96">
        <div>
          <h1 className="text-start ml-3 flex mt-8">
            <span>
              <AiOutlineFileSearch color="#0f8239" />
            </span>
            Resumo
          </h1>
        </div>
        <div className="text-center font-bold text-lg w-3/4 m-auto">
          <div className="flex flex-col gap-2 text-gray-300 text-sm font-normal">
            <p className="border-b-[1px] p-2 text-gray flex justify-between items-center">
              Valor da Diária:{' '}
              <span className="text-gray-400 font-black text-lg">R$100,00</span>
            </p>
            <p className="border-b-[1px] p-2 whitespace-nowrap  flex justify-between  items-center">
              Serviços Adicionados:{' '}
              <span className="text-gray-400 font-black text-lg">R$100,00</span>
            </p>
            <p className="flex justify-between p-2 items-center">
              Dias Locados:{' '}
              <span className="text-gray-400 font-black text-lg">10 dias</span>{' '}
            </p>
            <div className="text-gray-300 rounded bg-gray-50">
              <p className="  h-12 p-2 mt-4 flex justify-between items-center font-normal text-sm">
                Valor Total:{' '}
                <span className="text-gray-400 font-black text-lg">
                  R$1.100,00
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="m-5 termos">
          <span className="flex gap-1">
            <input id="termos-seguradora" type="checkbox" />
            <label htmlFor="termos-seguradora" className="select-none">
              Concordar com os termos da{' '}
              <Link to="termos-seguradora">seguradora</Link>*
            </label>
          </span>
          <span className="flex gap-1">
            <input id="termos-contratual" type="checkbox" />
            <label htmlFor="termos-contratual" className="select-none">
              Concordar com os termos{' '}
              <Link to="termos-contrato">contratual</Link>*
            </label>
          </span>
        </div>
        <div className="m-5 rounded-md font-bold h-12 flex items-center justify-center ">
          <button className="text-white bg-green-brasao text-center hover:bg-green-brasao2">
            Confirmar pagamento
          </button>
        </div>
      </div>
    </section>
  )
}
