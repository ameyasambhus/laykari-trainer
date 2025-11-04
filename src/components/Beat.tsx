import { useState, useEffect } from 'react';
import { taals } from '../data';

interface BeatProps {
    isPlaying : boolean
  setIsPlaying: (isPlaying: boolean) => void;
  selectedTaal: string;
  selectedBpm: number;
}

function Beat({ selectedTaal, selectedBpm, isPlaying}: BeatProps) {
  const [currentBeatIndex, setCurrentBeatIndex] = useState(0);

  const taal = taals[selectedTaal as keyof typeof taals];
  
  // Calculate the interval in milliseconds for each Beat
  // BPM is beats per minute, so one beat = 60000ms / BPM
  // With lay multiplier, the speed increases
  const BeatInterval = (60000 / selectedBpm);

  useEffect(() => {
    if (!isPlaying){
        setCurrentBeatIndex(0);
        return;
    } 

    const timer = setInterval(() => {
      setCurrentBeatIndex((prevIndex) => (prevIndex + 1) % taal.theka.length);
    }, BeatInterval);

    return () => clearInterval(timer);
  }, [isPlaying, BeatInterval, taal.theka.length]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl">Beat (Match your beats on palm with beats section)</h2>
        </div>
        
        <div className="grid gap-3 justify-items-center max-w-xl mx-auto" style={{ gridTemplateColumns: `repeat(${taal.khand}, 1fr)` }}>
          {taal.beat.map((Beat, index) => (
            <div
              key={index}
              className={`text-xl font-Beatd px-4 py-3 rounded-lg transition-all duration-200 ${
                index === currentBeatIndex && isPlaying
                  ? 'bg-yellow-500 text-black scale-110 shadow-2xl'
                  : 'bg-gray-700 text-white'
              } ${
                index === 0 ? 'ring-4 ring-blue-500' : '' // Highlight Sam
              } ${
                index === taal.khali - 1 ? 'ring-4 ring-red-500' : '' // Highlight Khali
              }`}
            >
              {Beat}
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

export default Beat;