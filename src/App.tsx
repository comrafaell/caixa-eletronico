import './styles/global.css'
import { Caixa } from './ components/Caixa'

function App() {
  return (
    <main className='w-screen h-screen flex justify-center items-center bg-sky-400'>
      <div className='flex justify-center items-center'>
        <Caixa />
      </div>
    </main>
  )
}

export default App
