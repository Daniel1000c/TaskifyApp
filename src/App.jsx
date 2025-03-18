
import TaskifyList from './components/TaskifyList'

function App() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-custom-bg bg-cover bg-center'
        style={{backgroundImage: 'url(/src/assets/lightBackground.jpg' }}
    >
      <TaskifyList/>
    </div>
  )
}

export default App
