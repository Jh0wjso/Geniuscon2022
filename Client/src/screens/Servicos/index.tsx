import CardServico from '../../components/CardServico'
import { Filter } from '../../components/Filter'
import './styles.css'

export default function Servico() {
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
          <CardServico
            img="src\assets\img\logo-aurora.png"
            titulo="Aurora"
            desc="O calcário deve ser aplicado cerca de 3 meses antes do plantio da cultura. Assim, há tempo de reagir com o solo e reduzir a acidez. Lembrando que o calcário no solo precisa de umidade para reagir."
            preco="R$ 100,00/hora"
            local="Bandeirantes - PR"
            servico="Calcário no solo"
            horario="8:00 - 18:00"
            link="#"
          />
          <CardServico
            img="src\assets\img\logo-aurora.png"
            titulo="Aurora"
            desc="O calcário deve ser aplicado cerca de 3 meses antes do plantio da cultura. Assim, há tempo de reagir com o solo e reduzir a acidez. Lembrando que o calcário no solo precisa de umidade para reagir."
            preco="R$ 100,00/hora"
            local="Bandeirantes - PR"
            servico="Calcário no solo"
            horario="8:00 - 18:00"
            link="#"
          />
          <CardServico
            img="src\assets\img\logo-aurora.png"
            titulo="Aurora"
            desc="O calcário deve ser aplicado cerca de 3 meses antes do plantio da cultura. Assim, há tempo de reagir com o solo e reduzir a acidez. Lembrando que o calcário no solo precisa de umidade para reagir."
            preco="R$ 100,00/hora"
            local="Bandeirantes - PR"
            servico="Calcário no solo"
            horario="8:00 - 18:00"
            link="#"
          />
          <CardServico
            img="src\assets\img\logo-aurora.png"
            titulo="Aurora"
            desc="O calcário deve ser aplicado cerca de 3 meses antes do plantio da cultura. Assim, há tempo de reagir com o solo e reduzir a acidez. Lembrando que o calcário no solo precisa de umidade para reagir."
            preco="R$ 100,00/hora"
            local="Bandeirantes - PR"
            servico="Calcário no solo"
            horario="8:00 - 18:00"
            link="#"
          />
          <CardServico
            img="src\assets\img\logo-aurora.png"
            titulo="Aurora"
            desc="O calcário deve ser aplicado cerca de 3 meses antes do plantio da cultura. Assim, há tempo de reagir com o solo e reduzir a acidez. Lembrando que o calcário no solo precisa de umidade para reagir."
            preco="R$ 100,00/hora"
            local="Bandeirantes - PR"
            servico="Calcário no solo"
            horario="8:00 - 18:00"
            link="#"
          />
          <CardServico
            img="src\assets\img\logo-aurora.png"
            titulo="Aurora"
            desc="O calcário deve ser aplicado cerca de 3 meses antes do plantio da cultura. Assim, há tempo de reagir com o solo e reduzir a acidez. Lembrando que o calcário no solo precisa de umidade para reagir."
            preco="R$ 100,00/hora"
            local="Bandeirantes - PR"
            servico="Calcário no solo"
            horario="8:00 - 18:00"
            link="#"
          />
        </div>
      </div>
    </section>
  )
}
