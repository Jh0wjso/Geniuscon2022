import { useEffect, useState } from 'react'
import CardServico from '../../components/CardServico'
import { Filter } from '../../components/Filter'
import api from '../../services/api'
import './styles.css'

interface servicoProps {
  id: number
  nome: string
  descricao: string
  local: string
  servico: string
  horario: string
  valor: number
  imagem: string
}

export default function Servico() {
  const [servicos, setServicos] = useState<servicoProps[]>([])

  useEffect(() => {
    api.get('/servicos').then((response) => {
      setServicos(response.data)
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
          {servicos.map((item) => {
            return (
              <CardServico
                key={item.id}
                img={item.imagem}
                titulo={item.nome}
                desc={item.descricao}
                preco={item.valor}
                local={item.local}
                servico={item.servico}
                horario={item.horario}
                link="#"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
