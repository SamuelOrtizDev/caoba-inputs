import { Aside } from './components/Aside'
import { Header } from './components/Header'
import { Content } from './components/Content'

function App() {
  return (
    <div className='container grid-cols-[auto_1fr_1fr] md:grid-cols-[260px_1fr_1fr] max-w-none h-screen p-2 gap-4 bg-background'>
      <Aside/>
      <Header/>
      <Content/>
    </div>
  )
}

export default App
