import { taals, layOptions } from '../data';

interface ControlsProps {
  selectedTaal: string;
  setSelectedTaal: (taal: string) => void;
  selectedLay: string;
  setSelectedLay: (lay: string) => void;
  selectedBpm: string;
  setSelectedBpm: (bpm: string) => void;
}

function Controls({ 
  selectedTaal, 
  setSelectedTaal, 
  selectedLay, 
  setSelectedLay, 
  selectedBpm, 
  setSelectedBpm 
}: ControlsProps) {

  const handleBpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numeric input
    if (value === '' || /^\d+$/.test(value)) {
      setSelectedBpm(value);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-3 gap-4">
          {/* Taal Selection */}
          <div>
            <label htmlFor="taal" className="block text-sm font-medium mb-2">
              Select Taal
            </label>
            <select
              id="taal"
              value={selectedTaal}
              onChange={(e) => setSelectedTaal(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.keys(taals).map((taalKey) => (
                <option key={taalKey} value={taalKey}>
                  {taals[taalKey as keyof typeof taals].name}
                </option>
              ))}
            </select>
          </div>

          {/* Lay Selection */}
          <div>
            <label htmlFor="lay" className="block text-sm font-medium mb-2">
              Select Lay
            </label>
            <select
              id="lay"
              value={selectedLay}
              onChange={(e) => setSelectedLay(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {layOptions.map((lay) => (
                <option key={lay.value} value={lay.value}>
                  {lay.label}
                </option>
              ))}
            </select>
          </div>

          {/* BPM Input */}
          <div>
            <label htmlFor="bpm" className="block text-sm font-medium mb-2">
              BPM
            </label>
            <input
              type="text"
              id="bpm"
              value={selectedBpm}
              onChange={handleBpmChange}
              placeholder="Enter BPM"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;