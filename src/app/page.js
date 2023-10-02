import Service from '../components/Service/Service'
import HomePage from '../components/Home/HomePage'
import Residencies from '../components/Residence/Residence'
import Value from '../components/Value/Value'

export default function Home() {
  return (
    <main>
      <HomePage />
      <Service />
      <Residencies />
      <Value />
    </main>
  )
}
