import './styles.css'

interface FilterProps {
  title: string
  opcoes: string[]
  className?: HTMLDivElement['className']
}

export function Filter({ title, opcoes, className }: FilterProps) {
  return (
    <div className={`filter overflow-y-auto scroll-syles ${className}`}>
      <div className="filter-body">
        <form action="" method="post">
          <div className="opcoes">
            <div className="filter-search">
              <h5 className="filter-title">Pesquisa</h5>
              <span className="relative text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  className="py-2 text-sm text-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Digite a região..."
                  autoComplete="off"
                />
              </span>
            </div>
            <div>
              <h5 className="filter-title">Locação</h5>
              <input type="range" />
              <ul>
                {opcoes.map((opcao) => {
                  return (
                    <li key={opcao}>
                      <input id={opcao} type="checkbox" />
                      <label htmlFor={opcao}>{opcao}</label>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h5 className="filter-title">{title}</h5>
              <ul>
                <li>
                  <input type="checkbox" />
                  <label htmlFor="">Manutenção Especializada</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label htmlFor="">Correção de solo</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label htmlFor="">Transporte</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label htmlFor="">Manuseio de Maquinário</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label htmlFor="">Abastecimento</label>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="filter-title">Raio de busca</h5>
              <ul>
                <li>
                  <input type="checkbox" />
                  <label htmlFor="">50Km</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>100Km</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>150Km</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>200Km</label>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
