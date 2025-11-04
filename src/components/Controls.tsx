import { taals, layOptions } from '../data';

interface ControlsProps {
    selectedTaal: string;
    setSelectedTaal: (taal: string) => void;
    selectedLay: string;
    setSelectedLay: (lay: string) => void;
    selectedBpm: string;
    setSelectedBpm: (bpm: string) => void;
    isPlaying: boolean
    setIsPlaying: (isPlaying: boolean) => void;
}

function Controls({
    selectedTaal,
    setSelectedTaal,
    selectedLay,
    setSelectedLay,
    selectedBpm,
    setSelectedBpm,
    setIsPlaying
}: ControlsProps) {

    const handleBpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        
        // Allow empty string temporarily (user might be clearing to type new value)
        if (value === '') {
            setSelectedBpm(value);
            return;
        }
        
        // Only allow numeric input and update immediately
        // Don't validate range while typing, only on blur
        if (/^\d+$/.test(value)) {
            const numValue = parseInt(value);
            // Allow typing any number, but cap at 200
            if (numValue <= 200) {
                setIsPlaying(false);
                setSelectedBpm(value);
            }
        }
    };

    const handleBpmBlur = () => {
        // If empty or invalid on blur, set to default 100
        if (selectedBpm === '' || parseInt(selectedBpm) < 30 || parseInt(selectedBpm) > 200) {
            setSelectedBpm('100');
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
                            onChange={(e) => {
                                setSelectedTaal(e.target.value);
                                setIsPlaying(false);
                            }}
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
                            onChange={(e) => {
                                setSelectedLay(e.target.value)
                                 setIsPlaying(false);
                            }}
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
                            onBlur={handleBpmBlur}
                            placeholder="30-200"
                            className={`w-full px-3 py-2 bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                selectedBpm === '' || parseInt(selectedBpm) < 30 || parseInt(selectedBpm) > 200
                                    ? 'border-red-500'
                                    : 'border-gray-600'
                            }`}
                        />
                        {selectedBpm !== '' && (parseInt(selectedBpm) < 30 || parseInt(selectedBpm) > 200) && (
                            <p className="text-red-500 text-xs mt-1">BPM must be between 30 and 200</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Controls;