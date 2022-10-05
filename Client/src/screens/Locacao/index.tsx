import Card from '../../components/Card'
import { Filter } from '../../components/Filter'
import './styles.css'

export default function Locacao() {
  return (
    <section id="locacao" className="p-0">
      <div className="grid grid-cols-5 gap-5" style={{ height: '90vh' }}>
        <Filter
          className="hidden lg:col-span-1 lg:block"
          title="Serviços"
          opcoes={[
            'Colheitadeiras',
            'Forrageira',
            'Tratores',
            'Colhedoras',
            'Pulverizadores',
            'Grades',
            'Enfardadoras',
            'Semeadoras',
          ]}
        />
        <div className="grid scroll-syles col-span-5 lg:col-span-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-1 justify-center gap-5 p-5 overflow-y-auto">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <Card
                key={i}
                title="A950"
                img="https://cdn.discordapp.com/attachments/1026681318618181684/1026871307477975113/unknown.png"
                preco={100}
                categoria="Colheitadeira"
                proprietario="Fazenda São João"
                marca="John Deere"
              />
            ))}
        </div>
      </div>
    </section>
  )
}
