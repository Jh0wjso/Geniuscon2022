import './styles.css'
import { AiOutlineFileSearch } from 'react-icons/ai'
import imagem from '../../assets/img/trator.jpg'
import seguro from '../../assets/contratos/modelo-de-contrato-de-seguro.pdf'
import pdf from '../../assets/contratos/contrato-servicos.pdf'
import {
  FaBarcode,
  FaMapMarkerAlt,
  FaRegCreditCard,
  FaTrash,
} from 'react-icons/fa'
import { RiShoppingBag3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function CompraLocacao() {
  const [active, setActive] = useState('')

  function handleActive(button: string) {
    return setActive(button)
  }

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
      <div className="bg-white col-span-1 mt-4 ml-4 mb-72">
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
              Concordar com os termos da
              <a className="m-1" href={seguro}>
                Seguradora*
              </a>
            </label>
          </span>
          <span className="flex gap-1">
            <input id="termos-contratual" type="checkbox" />
            <label htmlFor="termos-contratual" className="select-none">
              Concordar com os termos
              <a className="m-1" href={pdf}>
                Serviços*
              </a>
            </label>
          </span>
        </div>

        <div className="m-5 rounded-md font-bold h-24 flex items-center flex-col justify-center ">
          <div className="w-full flex items-center justify-center">
            <Link className="w-full px-1 py-1" to={'#'}>
              <button
                className={`"flex items-center justify-center bg-white fill-green-400 border-green-600 border-[1px] hover:bg-gray-100 ${
                  active === 'code'
                    ? 'bg-green-brasao fill-white flex items-center justify-center hover:bg-gray-100'
                    : ''
                }`}
                onClick={() => {
                  handleActive('code')
                }}
              >
                <FaBarcode
                  color={active === 'code' ? 'white' : '#0f8239'}
                  className="h-12 w-12 m-auto"
                />
              </button>
            </Link>
            <Link className="w-full px-2 py-1" to={'#'}>
              <button
                className={`"flex items-center justify-center bg-white fill-green-400 border-green-600 border-[1px] hover:bg-gray-100 ${
                  active === 'credit'
                    ? 'bg-green-brasao  flex items-center justify-center hover:bg-gray-100'
                    : ''
                }`}
                onClick={() => {
                  handleActive('credit')
                }}
              >
                <FaRegCreditCard
                  color={active === 'credit' ? 'white' : '#0f8239'}
                  className="h-12 w-12 m-auto"
                />
              </button>
            </Link>
            <Link className="w-full px-2 py-1" to={'#'}>
              <button
                className={`"p-0 flex items-center justify-center bg-white fill-green-400 border-green-600 border-[1px] hover:bg-gray-100 ${
                  active === 'pix'
                    ? 'bg-green-brasao fill-white flex items-center justify-center hover:bg-gray-100'
                    : ''
                }`}
                onClick={() => {
                  handleActive('pix')
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 m-auto"
                  viewBox="0 0 512 512"
                >
                  <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.76C231.1-7.586 280.3-7.586 310.6 22.76L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.78L22.76 310.6C-7.586 280.3-7.586 231.1 22.76 200.8L80.78 142.7H112.6z" />
                </svg>
              </button>
            </Link>
          </div>
          <button className="text-white bg-green-brasao text-center hover:bg-green-brasao2">
            Confirmar pagamento
          </button>
        </div>
      </div>
    </section>
  )
}
