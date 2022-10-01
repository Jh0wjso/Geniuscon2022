import { CardsDashboard } from '../../../components/CardsDashboard';
import { optionUser } from './optionUser';

export default function User() {
  return (
    <section id="user">
      <CardsDashboard  objectList={optionUser}/>
    </section>
  )
}