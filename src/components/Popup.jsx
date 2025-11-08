// src/components/Popup.jsx
export default function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white text-black rounded-xl shadow-xl p-6 w-80 text-center font-poppins relative">
        <h2 className="text-xl font-semibold mb-3">🚧 Site en construction</h2>
        <p className="text-sm text-black/70 mb-5">
          La section “Média” sera bientôt disponible.
        </p>
        <button
          onClick={onClose}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
