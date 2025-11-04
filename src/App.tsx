import { useState, useEffect } from 'react'
import './App.css'
import Controls from './components/Controls'
import Bol from './components/Bol'
import Beat from './components/Beat'
import HowToUseModal from './components/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Load from localStorage or use defaults
  const [selectedTaal, setSelectedTaal] = useState(() => {
    return localStorage.getItem('selectedTaal') || 'teentaal';
  });
  const [selectedLay, setSelectedLay] = useState(() => {
    return localStorage.getItem('selectedLay') || 'barabar';
  });
  const [selectedBpm, setSelectedBpm] = useState(() => {
    return localStorage.getItem('selectedBpm') || '100';
  });
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Save to localStorage whenever values change
  useEffect(() => {
    localStorage.setItem('selectedTaal', selectedTaal);
  }, [selectedTaal]);

  useEffect(() => {
    localStorage.setItem('selectedLay', selectedLay);
  }, [selectedLay]);

  useEffect(() => {
    localStorage.setItem('selectedBpm', selectedBpm);
  }, [selectedBpm]);
  
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
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
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
      
      <footer className="py-4 text-center">
        <p>Built with ❤️ by <span className='text-blue-200'><a href="https://www.linkedin.com/in/ameya-sambhus-b504912bb/" target='blank'>Ameya Sambhus</a></span></p>
      </footer>
    </div>
  )
}

export default App
