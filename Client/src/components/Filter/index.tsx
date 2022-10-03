

interface FilterProps {
  title: string
  opcoes: string[]
}

// interface FilterProps {
//   objectList: ObjectItem[];
// }

export function Filter() {
  return (
    <>
      <aside id="listingAside">
        <div className="filter">
          <div className="filter-body">
            <form action="" method="post">
              <div className="brands">
                <h6 className="filter-title">Busque alguma patente</h6>
                <ul>
                  <li>
                    <input type="text" placeholder="pesquisar..." />
                    <button id="filter-button" type="submit">Enviar</button>
                  </li>
                </ul>
                <h6 className="filter-title">Situação no INPI</h6>
                <ul>
                  <li>
                    <input type="checkbox" id="productBrand1" />
                    <label className="form-check-label" htmlFor="productBrand1">Pedido em sigilo</label>
                  </li>
                  <li>

                    <input type="checkbox" id="productBrand2" />
                    <label className="form-check-label" htmlFor="productBrand2">Pedido depositado</label>
                  </li>
                  <li>

                    <input type="checkbox" id="productBrand3" />
                    <label className="form-check-label" htmlFor="productBrand3">Patente concedida</label>


                  </li>
                  <li>

                    <input type="checkbox" id="productBrand4" />
                    <label className="form-check-label" htmlFor="productBrand4">Registro concedido</label>


                  </li>
                  <li>

                    <input type="checkbox" id="productBrand5" />
                    <label className="form-check-label" htmlFor="productBrand5">Domínio público</label>

                  </li>
                </ul>
              </div>

              <h6 className="filter-title">Categorias</h6>
              <ul className="list-unstyled categories-list">
                <li>
                  <input type="radio" id="category1" name="category-filter" />
                  <label className="custom-control-label" htmlFor="category1">Todas</label>
                </li>
                <li>
                  <input type="radio" id="category2" name="category-filter" />
                  <label className="custom-control-label" htmlFor="category2">Química</label>
                </li>
                <li>
                  <input type="radio" id="category3" name="category-filter" />
                  <label className="custom-control-label" htmlFor="category3">Medicina</label>
                </li>
                <li>
                  <input type="radio" id="category4" name="category-filter" />
                  <label className="custom-control-label" htmlFor="category4">Saúde Animal</label>
                </li>
                <li>
                  <input type="radio" id="category5" name="category-filter" />
                  <label className="custom-control-label" htmlFor="category5">Biotecnologia</label>
                </li>
                <li>
                  <input type="radio" id="category6" name="category-filter" />
                  <label className="custom-control-label" htmlFor="category6">Nutrição</label>
                </li>
                <li>
                  <input type="radio" id="category7" name="category-filter" />
                  <label className="custom-control-label" htmlFor="category7">Tecnologia Assistiva</label>
                </li>
                <li>
                  <input type="radio" id="category8" name="category-filter" />
                  <label className="custom-control-label" htmlFor="category8">Engenharia Civil</label>
                </li>
                <li>
                  <input type="radio" id="category9" name="category-filter" />
                  <label className="custom-control-label" htmlFor="category9">Eletrônica </label>
                </li>
                <li>
                  <input type="radio" id="category10" name="category-filter" />
                  <label className="custom-control-label" htmlFor="category10">Tecnologia
                    Ambiental</label>
                </li>
                <li>
                  <input type="radio" id="category11" name="category-filter" />
                  <label className="custom-control-label" htmlFor="category11">Agronomia</label>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </aside>
    </>
  )
}