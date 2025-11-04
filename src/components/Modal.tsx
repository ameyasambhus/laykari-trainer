interface HowToUseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HowToUseModal({ isOpen, onClose }: HowToUseModalProps) {
  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="rounded-lg p-6 max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">How to Use This Tool</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          <section>
            <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
            <p>Laykari Trainer is designed to help you master various laykaris, strengthening one of the most essential skills tested in all levels of music examinations</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">Steps</h3>
            <p>1. Select taal, tempo in BPM (beats per minute) and select laykari you want to practice</p>
            <p>2. Click start button and practice along.</p>
            <p>3. Bol section shows you speed with which you have to say bols of any taal through speech. Beats section shows you speed with which you have to tap beats on your palm.</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">Practice Tips</h3>
            <ul className="list-disc list-inside">
              <li>For first few avartanas, focus solely on tapping beats correctly on palm. Once comfortable, start saying bols of taal </li>
              <li>Focus on accuracy over speed</li>
            </ul>
          </section>
        </div>
        
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}