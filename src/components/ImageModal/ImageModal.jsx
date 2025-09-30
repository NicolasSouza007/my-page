// src/components/ImageModal.jsx
export default function ImageModal({ isOpen, imageSrc, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold"
        >
          &times;
        </button>
        <img
          src={imageSrc}
          alt="Imagem Ampliada"
          className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
