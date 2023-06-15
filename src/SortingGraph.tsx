import { useEffect, useState } from "react";
import GraphBars from "./GraphBars";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  onCallQuickSort,
  cocktailShakerSort,
} from "./SortingAlgoritms";

const SortingGraph = (props: any) => {
  let numberArray: number[] = [];

  for (let i = 100; i >= 1; i--) {
    numberArray.push(i);
  }

  const xAxisLength: number = 404;
  const yAxisLength = 236;
  const barWidth: number = Math.floor(xAxisLength / numberArray.length);
  var largest = Math.max.apply(0, numberArray);
  const barHeight: number = Math.floor(yAxisLength / largest);

  const [currentState, setCurrentState] = useState([...numberArray]);
  const [currentIndex, setCurrentIndex] = useState(0);

  //let finishedArraySet = false;
  let sortingFunction: Function;

  switch (props.sortingAlgo) {
    case "Bubble Sort":
      sortingFunction = bubbleSort;
      break;
    case "Selection Sort":
      sortingFunction = selectionSort;
      break;
    case "Insertion Sort":
      sortingFunction = insertionSort;
      break;
    case "Merge Sort":
      sortingFunction = mergeSort;
      break;
    case "Quick Sort":
      sortingFunction = onCallQuickSort;
      break;
    case "Cocktail Shaker Sort":
      sortingFunction = cocktailShakerSort;
      break;
    default:
      sortingFunction = bubbleSort;
  }

  let arrayStates = sortingFunction([...numberArray]);

  useEffect(() => {
    const fetchData = async () => {
      if (
        currentIndex < arrayStates.length &&
        props.notStartedPausedFinished === "Ongoing"
      ) {
        // Get the current value from the array

        // Set the state to the current value
        setCurrentState(arrayStates[currentIndex]);

        // Wait for 1 second before moving to the next iteration
        await new Promise((resolve) =>
          setTimeout(resolve, 2000 / (props.sliderValue * 5))
        );

        // Move to the next index
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (
        currentIndex >= arrayStates.length &&
        !props.finishedArraySet
      ) {
        props.setFinishArray((val: any) => {
          return [...val, props.sortingAlgo];
        });
        props.setFinishedArraySet(true);
      }
    };

    fetchData();

    if (props.notStartedPausedFinished === "NotStarted") {
      let numberArray: number[] = [];

      for (let i = 10; i >= 1; i--) {
        numberArray.push(i);
      }
      arrayStates = sortingFunction([...numberArray]);
      setCurrentState([...numberArray]);
      setCurrentIndex(0);
      props.setFinishedArraySet(false);
    }
  }, [currentIndex, props.notStartedPausedFinished]);

  return (
    <div className="h-full w-full ">
      <div className="h-full w-full flex flex-col">
        <div className="h-full w-full flex flex-row">
          {/* <div id="y-axis" className="h-full w-1 bg-black"></div> */}
          {currentState.map((numberBar) => {
            return (
              <div className="items-end justify-center flex">
                <GraphBars
                  key={numberBar}
                  barWidth={barWidth}
                  barHeight={barHeight * numberBar}
                />
              </div>
            );
          })}
        </div>

        <div id="x-axis" className="h-1 w-full bg-black"></div>
      </div>
    </div>
  );
};

export default SortingGraph;
