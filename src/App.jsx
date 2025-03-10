import './App.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { styles } from './styles'

function App() {

  return (
    <section className={`${styles.backGround} h-screen w-full`}>
      <div className='flex justify-between'>
        <div className='w-full'>
          <LeftSide />
        </div>
        <div className='w-2/3  bg-black/50 h-screen text-white'>
          <RightSide />
        </div>
      </div>
    </section>
  )
}

export default App
