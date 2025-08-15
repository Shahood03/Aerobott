import React from 'react';

export default function GalleryList(props) {
  const { data, setIsModalOpen, setImageSource, setImageDescription } = props;

  const imgClickHandler = (imagesUrl, imageDescription) => {
    setIsModalOpen(true);
    setImageSource(imagesUrl);
    setImageDescription(imageDescription);
  };

  return (
    <div className="flex flex-col bg-gray-800 border border-gray-700 rounded-3xl p-6 transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:shadow-indigo-900/30" key={data.name}>
      <div 
        className="relative cursor-pointer" 
        onClick={() => imgClickHandler(data.images, data.description)}
      >
        <img 
          src={data.images} 
          alt={data.name} 
          className="w-full h-80 md:h-44 lg:h-80 rounded-3xl object-cover" 
        />
        <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 w-full h-80 md:h-44 lg:h-80 rounded-3xl opacity-0 transition duration-500 ease bg-indigo-900 hover:opacity-70">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-24 text-white opacity-80" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
            />
          </svg>
        </div>
      </div>
      <p className="text-gray-300 font-normal text-xl leading-9 text-center mt-4">
        {data.description}
      </p>
    </div>
  );
}