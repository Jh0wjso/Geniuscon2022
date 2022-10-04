import { Filter } from '../../components/Filter'
import './styles.css'

export default function Servico() {
  return (
    <section id="locacao">
      <Filter
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
    </section>
  )
}
