import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { Filter } from '../../components/Filter'
import api from '../../services/api'
import './styles.css'

interface LocacaoProps {
  id: number
  nome: string
  categoria: string
  marca: string
  fazenda: string
  valor: number
  imagem: string
}

export default function Locacao() {
  const [locacao, setLocacao] = useState<LocacaoProps[]>([])

  useEffect(() => {
    api.get('/locacao').then((response) => {
      setLocacao(response.data)
    })
  }, [])

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
          {locacao.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.nome}
                img={item.imagem}
                preco={item.valor}
                categoria={item.categoria}
                proprietario={item.fazenda}
                marca={item.marca}
                distancia="100"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
