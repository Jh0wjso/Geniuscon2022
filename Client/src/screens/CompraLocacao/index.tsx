import './styles.css'
import imagem from '../../assets/img/trator.jpg'

export default function CompraLocacao() {
  return (
    <section id="compraLocacao">
      <div className="flex flex-col items-start rounded-sm bg-white p-4 m-4">
        <h4>Selecione Seu CEP</h4>
        <input className="mb-4" type="text" />
        <button className="w-32 h-12 rounded-sm bg-green-600 text-white">
          OK
        </button>
      </div>
      <div className="flex flex-col  items-start rounded-sm bg-white p-4 m-4 ">
        <h1>Produto </h1>
        <div className="flex  items-center gap-1 p-4">
          <img src={imagem} alt="" />
          <label htmlFor=""></label>
          <p>Valtra - A950</p>
          <p>Valor: R$ 1.000,00 diária</p>
          <p>Produto adicionado</p>
        </div>
      </div>
      <div className="w-full bg-white rounded-sm p-4 m-4">
        <h1 className="p-4">Serviços adicionais</h1>
        <div className="flex flex-col items-start gap-2 m-4 ">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <h4>Garantia estendida</h4>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <h4>Componente Extra</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
