import SortingCard from "./SortingCard";
import { useState, useEffect } from "react";

const Display = () => {
  const [notStartedPausedFinished, setNotStartedPausedFinished] =
    useState("NotStarted");
  const [buttonText, setButtonText] = useState("Start");
  const [finishArray, setFinishArray] = useState([]);
  const [sliderValue, setSliderValue] = useState(1);
  //NotStarted Ongoing Finished Paused

  useEffect(() => {
    if (finishArray.length === 6) {
      setButtonText("Reset");
      setNotStartedPausedFinished("Finished");
    }
  }, [finishArray]);

  const speedUpdater = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value));
    //console.log(sliderValue);
  };
  const buttonClick = () => {
    if (notStartedPausedFinished === "NotStarted") {
      setButtonText("Pause");
      setNotStartedPausedFinished("Ongoing");
    } else if (notStartedPausedFinished === "Ongoing") {
      setButtonText("Resume");
      setNotStartedPausedFinished("Paused");
    } else if (notStartedPausedFinished === "Paused") {
      setButtonText("Pause");
      setNotStartedPausedFinished("Ongoing");
    } else if (notStartedPausedFinished === "Finished") {
      setButtonText("Start");
      setNotStartedPausedFinished("NotStarted");
      setFinishArray([]);
    }
  };
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center ">
      <div className="h-16 w-5/6 bg-white opacity-60 rounded-t-lg flex justify-around items-center z-0">
        <div className="w-1/3 flex justify-start items-center">
          <button
            onClick={buttonClick}
            className="border border-gray-400 py-2 px-4 rounded shadow ml-6"
          >
            {buttonText}
          </button>
        </div>
        <h1 className="font-mono text-2xl font-black w-1/3 pl-6">
          Sorting Visualizer
        </h1>
        <div className="flex flex-row items-center w-1/5">
          <h3
            // htmlFor="default-range"
            className="block mb-1 mr-3 text-sm font-medium text-gray-900 "
          >
            Speed:
          </h3>
          <input
            id="default-range"
            type="range"
            value={sliderValue}
            onChange={speedUpdater}
            min={1}
            max={400}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mr-6"
          ></input>
        </div>
      </div>
      <div className="mt-1 h-5/6 w-5/6 bg-neutral-200 rounded-b-lg flex flex-wrap z-50">
        <SortingCard
          key="Bubble Sort"
          sortingAlgo="Bubble Sort"
          notStartedPausedFinished={notStartedPausedFinished}
          setFinishArray={setFinishArray}
          sliderValue={sliderValue}
        />
        <SortingCard
          key="Selection Sort"
          sortingAlgo="Selection Sort"
          notStartedPausedFinished={notStartedPausedFinished}
          setFinishArray={setFinishArray}
          sliderValue={sliderValue}
        />
        <SortingCard
          key="Insertion Sort"
          sortingAlgo="Insertion Sort"
          notStartedPausedFinished={notStartedPausedFinished}
          setFinishArray={setFinishArray}
          sliderValue={sliderValue}
        />
        <SortingCard
          key="Merge Sort"
          sortingAlgo="Merge Sort"
          notStartedPausedFinished={notStartedPausedFinished}
          setFinishArray={setFinishArray}
          sliderValue={sliderValue}
        />
        <SortingCard
          key="Quick Sort"
          sortingAlgo="Quick Sort"
          notStartedPausedFinished={notStartedPausedFinished}
          setFinishArray={setFinishArray}
          sliderValue={sliderValue}
        />
        <SortingCard
          key="Cocktail Shaker Sort"
          sortingAlgo="Cocktail Shaker Sort"
          notStartedPausedFinished={notStartedPausedFinished}
          setFinishArray={setFinishArray}
          sliderValue={sliderValue}
        />
      </div>
    </div>
  );
};

export default Display;
