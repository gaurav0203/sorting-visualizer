const GraphBars = (props: any) => {
  const heightBar = `${props.barHeight}px`;
  const widthBar = `${props.barWidth}px`;
  return (
    <div
      id="bar"
      className={`bg-orange-500 items-end`}
      style={{ height: heightBar, width: widthBar }}
    ></div>
  );
};

export default GraphBars;
