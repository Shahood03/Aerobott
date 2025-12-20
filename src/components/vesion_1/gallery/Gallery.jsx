import React, { useState } from 'react';
import GalleryList from './GalleryList';
import MediaModal from './MediaModal';

const galleryData = [
  {
    images: "/images/gallery/austin.avif",
    description: "Shot from redlight drone at a field in Austin, Texas."
  },
  {
    images: "/images/gallery/city.avif",
    description: "Drone light taking shot at the center of the city."
  },
  {
    images: "/images/gallery/croatia.avif",
    description: "Croatia shot from mini drone."
  },
  {
    images: "/images/gallery/gambir.avif",
    description: "Shot from phantom drone at Gambir, Indonesia."
  },
  {
    images: "/images/gallery/pilot.avif",
    description: "A pilot controlling smoky drone."
  },
  {
    images: "/images/gallery/snow.avif",
    description: "Smoky drone taking shot at winter."
  }
];

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSource, setImageSource] = useState();
  const [imageDescription, setImageDescription] = useState();

  return (
    <section className="py-16 px-6 md:px-24 mt-8 pt-24 lg:px-24 bg-gray-900">
      <div className="flex flex-col mb-16">
        <h1 className="text-5xl font-semibold text-center text-gray-100 mb-5">Gallery</h1>
        <p className="text-gray-300 font-normal text-2xl leading-9 text-center">
          Make every moment flying operation become unforgettable.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
        {galleryData.map((item, index) => (
          <div key={index}>
            <GalleryList 
              data={item} 
              setIsModalOpen={setIsModalOpen} 
              setImageSource={setImageSource} 
              setImageDescription={setImageDescription} 
            />
            <MediaModal 
              src={imageSource} 
              imageDescription={imageDescription} 
              isOpen={isModalOpen} 
              closeModal={() => setIsModalOpen(false)} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}