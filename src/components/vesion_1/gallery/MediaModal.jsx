import React from 'react';

export default function MediaModal(props) {
  const { src, imageDescription, isOpen, closeModal, image, video } = props;

  if (!isOpen) return null;

  return (
    <section 
      className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50" 
      onClick={closeModal}
    >
      <div 
        className="max-w-4xl mx-auto p-4 rounded-lg bg-gray-800 border border-gray-700" 
        onClick={(e) => e.stopPropagation()}
      >
        {
          video ? (
            <iframe
              src={src}
              title="YouTube video player"
              className="w-full h-96"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex flex-col">
              <img src={src} alt="Gallery" className="w-full rounded-lg" />
              <p className="text-center mt-4 text-lg text-gray-300">{imageDescription}</p>
            </div>
          )
        }
      </div>
    </section>
  );
}