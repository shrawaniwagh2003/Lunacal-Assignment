import que from '../assets/que.png';
import gird from '../assets/gird.png';
// import hr from '../assets/hr.png';
import ButtonGroup from './ButtonGroup';

function Card({ selectedButton, onButtonClick }) {
  return (
<div className="w-[96vh] bg-custom-gray p-5 rounded-[16px] shadow-lg mb-6 flex">

        <div className="flex flex-col items-start justify-between mr-4">
            <img src={que} alt="Question Mark" className="w-8 h-8 mb-4" />
                    <div className="flex items-center justify-center h-full">
            <img src={gird} alt="Gird Image" className="w-10 h-10 rounded-[5px]" />
                    </div>
        </div>


    <div className="flex flex-col w-full items-center">
        <div className="flex mb-4">
          <ButtonGroup selectedButton={selectedButton} onButtonClick={onButtonClick} />
        </div>
                <div className="text-left w-[74vh]">
                <p className="mb-2">
                    Hello! I'm Dave, your sales rep here from Salesforce. I’ve been working at this awesome
                    company for 3 years now.
                </p>
                <p>
                    I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years
                    with my wife Tiffany and my 4-year-old twin daughters- Emma and Ella. Both of them are just
                    starting school, so my calendar is usually blocked between 9–10 AM.
                </p>
                </div>
        </div>
</div>
  );
}

export default Card;
