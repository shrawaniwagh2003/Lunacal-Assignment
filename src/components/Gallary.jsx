import  { useRef } from 'react';
import button from "../assets/button.png";
import right from '../assets/left.png';
import left from '../assets/right.png';
import img from '../assets/img.png';
import hr from "../assets/hr.png";
import que from '../assets/que.png';
import gird from '../assets/gird.png';

function Gallery() {
  const galleryRef = useRef(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="w-[96vh] bg-custom-gray p-5 rounded-[16px] shadow-lg mb-6 flex">
        {/* 5 and 6: que and gird images */}
        <div className="flex flex-col items-start justify-between mr-4">
          <img src={que} alt="Question Mark" className="w-8 h-8 mb-4" />
          <div className="flex items-center justify-center h-full">
            <img src={gird} alt="Gird Image" className="w-10 h-10 rounded-[5px]" />
          </div>
        </div>

        {/* 7 and 8: Gallery Content and Buttons */}
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <button className="relative w-32 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-slate-50 bg-black ring-4 ring-slate-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity text-center before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-slate-50/10 before:blur-xl">
                Gallery
              </button>
            </div>
            <div className='flex flex-row items-center'>
              <img src={button} className='p-2' alt="Button Icon" />
              <div className="flex-row flex p-2 space-x-4">
                <img src={left} alt="Left Arrow" className="cursor-pointer" onClick={scrollLeft} />
                <img src={right} alt="Right Arrow" className="cursor-pointer" onClick={scrollRight} />
              </div>
            </div>
          </div>

          {/* 9: Image Slider */}
          <div ref={galleryRef} className="flex overflow-x-scroll overflow-hidden scrollbar-hide space-x-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-700 h-40 w-40 rounded-[16px] overflow-hidden flex-shrink-0">
                <img
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={hr} className="w-[96vh] pb-4" alt="hr" />
    </>
  );
}

export default Gallery;
