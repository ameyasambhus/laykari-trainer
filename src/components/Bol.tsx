import { useState, useEffect } from 'react';
import { taals, layOptions } from '../data';

interface BolProps {
  isPlaying : boolean
  setIsPlaying: (isPlaying: boolean) => void;
  selectedTaal: string;
  selectedLay: string;
  selectedBpm: number;
}

function Bol({ isPlaying, setIsPlaying, selectedTaal, selectedLay, selectedBpm }: BolProps) {
  const [currentBolIndex, setCurrentBolIndex] = useState(0);

  const taal = taals[selectedTaal as keyof typeof taals];
  const layMultiplier = layOptions.find(l => l.value === selectedLay)?.multiplier || 1;
  
  // Calculate the interval in milliseconds for each bol
  // BPM is beats per minute, so one beat = 60000ms / BPM
  // With lay multiplier, the speed increases
  const bolInterval = (60000 / selectedBpm) / layMultiplier;

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentBolIndex((prevIndex) => (prevIndex + 1) % taal.theka.length);
    }, bolInterval);

    return () => clearInterval(timer);
  }, [isPlaying, bolInterval, taal.theka.length]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setCurrentBolIndex(0);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl">Bol (Match your speech with bol section)</h2>
          <button
            onClick={togglePlay}
            className={`px-6 py-2 rounded-md font-semibold ${
              isPlaying 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-green-600 hover:bg-green-700'
            } transition-colors`}
          >
            {isPlaying ? 'Stop' : 'Start'}
          </button>
        </div>
        
        <div className="grid gap-3 justify-items-center max-w-xl mx-auto" style={{ gridTemplateColumns: `repeat(${taal.khand}, 1fr)` }}>
          {taal.theka.map((bol, index) => (
            <div
              key={index}
              className={`text-xl font-bold px-4 py-3 rounded-lg transition-all duration-200 ${
                index === currentBolIndex && isPlaying
                  ? 'bg-yellow-500 text-black scale-110 shadow-2xl'
                  : 'bg-gray-700 text-white'
              } ${
                index === 0 ? 'ring-4 ring-blue-500' : '' // Highlight Sam
              } ${
                index === taal.khali - 1 ? 'ring-4 ring-red-500' : '' // Highlight Khali
              }`}
            >
              {bol}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p className="mt-2">
            <span className="inline-block w-4 h-4 bg-blue-500 rounded mr-2"></span>Sam
            <span className="inline-block w-4 h-4 bg-red-500 rounded ml-4 mr-2"></span>Khali
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bol;