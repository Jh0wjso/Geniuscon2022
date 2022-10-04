import Card from '../../components/Card'
import './styles.css'

export default function Locacao() {
  return (
    <section id="locacao" >
      <div className="grid grid-cols-4 my-1 justify-center gap-5 ">

        <Card
          title="Colheitadeira de Grãos S430"
          desc="Estas Colheitadeiras estão desenhadas para assegurar a precisão absoluta, seja no controle ou na produtividade dos cultivos. A tecnologia de Rotor reduz em até 20% a força requerida para mover o material através da colheitadeira."
          img=""
          telefone="123456789"
          preco="R$ 100,00"
          categoria="Colheitadeira"
          marca="John Deere"
        />
      </div>

    </section>
  )
}