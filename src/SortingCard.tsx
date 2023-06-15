import { useState } from "react";
import SortingGraph from "./SortingGraph";

const SortingCard = (props: any) => {
  let color;
  const [finishedArraySet, setFinishedArraySet] = useState(false);
  if (props.notStartedPausedFinished === "NotStarted") {
    color = "red-600";
  } else if (props.notStartedPausedFinished === "Ongoing") {
    color = "blue-600";
  } else if (props.notStartedPausedFinished === "Finished") {
    color = "green-600";
  } else if (props.notStartedPausedFinished === "Paused") {
    color = "indigo-800";
  } else {
    color = "black";
  }
  if (finishedArraySet) {
    color = "green-600";
  }

  return (
    <div className="h-[17rem] w-2/6 p-2 group hover:scale-[1.3] hover:z-50 transition ease-in delay-150">
      <div className="h-60 w-full rounded-t-lg bg-slate-500 opacity-50 group-hover:opacity-100 transition ease-in delay-150">
        <SortingGraph
          key={props.sortingAlgo}
          setFinishArray={props.setFinishArray}
          sortingAlgo={props.sortingAlgo}
          notStartedPausedFinished={props.notStartedPausedFinished}
          finishedArraySet={finishedArraySet}
          setFinishedArraySet={setFinishedArraySet}
          sliderValue={props.sliderValue}
        />
      </div>
      <div
        className={`h-8 rounded-b-lg bg-${color} text-white flex justify-center`}
      >
        <span className="mt-0.5">{props.sortingAlgo}</span>
      </div>
    </div>
  );
};

export default SortingCard;
