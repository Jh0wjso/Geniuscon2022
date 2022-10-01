import React from 'react';
import './styles.css';

interface ObjectItem {
  titulo: string;
  estado: string;
  icone: any;
}

interface CardsDashboardProps {
  objectList: ObjectItem[];
}

export function CardsDashboard({ objectList }: CardsDashboardProps) {

  return (
    <div className="vendor-body">
      <div className="vendor-content">
        {objectList.map((data: ObjectItem) =>
          <div className="vendor-card">
            <div className="vendor-card-content">
              <data.icone size={30} />
              <h1>{data.titulo}</h1>
              <h4>{data.estado}</h4>
            </div>
          </div>
        )}
      </div>
      <div className="vendor-calendar">
        <h1>Calendário</h1>
      </div>
    </div>
  )
}