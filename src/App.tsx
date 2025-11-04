import { useState } from 'react'
import './App.css'
import Controls from './components/Controls'
import Bol from './components/Bol'
import Beat from './components/Beat'
import HowToUseModal from './components/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTaal, setSelectedTaal] = useState('teentaal');
  const [selectedLay, setSelectedLay] = useState('barabar');
  const [selectedBpm, setSelectedBpm] = useState('100');
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col p-4">
      <header className="flex flex-row justify-between items-center">
        <h1 className='text-3xl font-bold'>Laykari Trainer</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-900 whitespace-nowrap"
        >
          How to Use This Tool
        </button>
      </header>
      
      <HowToUseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="grow">
        <Controls 
          selectedTaal={selectedTaal}
          setSelectedTaal={setSelectedTaal}
          selectedLay={selectedLay}
          setSelectedLay={setSelectedLay}
          selectedBpm={selectedBpm}
          setSelectedBpm={setSelectedBpm}
        />
        <Bol 
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          selectedTaal={selectedTaal}
          selectedLay={selectedLay}
          selectedBpm={parseInt(selectedBpm) || 100}
        />
        <Beat
        isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        selectedTaal={selectedTaal}
          selectedBpm={parseInt(selectedBpm) || 100}></Beat>
      </div>
      
      <footer className="mt-auto py-4 text-center">
        <p>Built with ❤️ by <span className='text-blue-200'><a href="https://www.linkedin.com/in/ameya-sambhus-b504912bb/" target='blank'>Ameya Sambhus</a></span></p>
      </footer>
    </div>
  )
}

export default App
