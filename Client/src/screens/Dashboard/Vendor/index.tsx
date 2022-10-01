import './styles.css';
import { optionVendor } from './optionVendor';
import { CardsDashboard } from '../../../components/CardsDashboard';

export default function Vendor() {
  return (
    <section id="vendor">
      <CardsDashboard  objectList={optionVendor}/>
    </section>
  )
}