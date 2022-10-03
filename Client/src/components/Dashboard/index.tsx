interface DashboardProps {
  title: string;
  subtitle: string;
}


export default function Dashboard({title, subtitle}: DashboardProps) {

    return(
        <div className='grid'>
          <h1>{title}</h1>
          <h5>{subtitle}</h5>
        </div>
    )
}