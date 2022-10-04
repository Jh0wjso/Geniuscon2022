import "./styles.css"
import {BiMap} from "react-icons/bi"

interface FilterProps {
  title: string
  opcoes: string[]
}

export function Filter({ title, opcoes }: FilterProps) {
  return (
    <div className="filter">
      <div className="filter-body">
        <form action="" method="post">
          <div className="opcoes">
            <h5 className="filter-title">Pesquisa</h5>
            <ul>
              <li>
                <input id="filter-search" type="text" placeholder="Digite a região" />
                <button id="filter-button" type="submit"><BiMap size={24}/></button>
              </li>
            </ul>
            <h5 className="filter-title">{title}</h5>
            <ul>
              {
                opcoes.map((opcao) => {
                  return (
                    <li>
                      <input type="checkbox" />
                      <label>{opcao}</label>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
}