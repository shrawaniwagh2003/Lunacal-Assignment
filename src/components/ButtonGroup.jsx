function ButtonGroup({ selectedButton, onButtonClick }) {
  return (
    <div className="flex flex-wrap justify-center bg-black py-1.5 px-4 rounded-[16px] shadow-lg md:space-x-4 md:flex-nowrap">
      {['aboutMe', 'experiences', 'recommended'].map((buttonName) => (
        <button
          key={buttonName}
          onClick={() => onButtonClick(buttonName)}
          className={`flex justify-center items-center gap-2 w-full md:w-32 h-10 cursor-pointer rounded-[16px] font-semibold duration-300 mb-2 md:mb-0 ${
            selectedButton === buttonName
              ? 'scale-110 shadow-2xl bg-[#28292F] text-gray-300'
              : 'bg-[#1D1D1D] text-gray-500 hover:bg-[#1D1D1D] hover:shadow-lg hover:scale-105'
          }`}
        >
          {buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
