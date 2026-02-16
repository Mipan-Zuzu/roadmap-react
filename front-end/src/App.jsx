import './index.css'
import Counter from './Components/Counter'
import { useSelector } from 'react-redux'

function App() {
  const value = useSelector((state) => state.counter.value)
  return (
    <>
      <h1>kocak</h1>
      <h1 className='font-mono text-emerald-400'>{value}</h1>
      <Counter />
    </>
  )
}

export default App
