import ProgressBar from "@ramonak/react-progress-bar";

function Progress({ question, index, answer }) {
  return (
    <header className="progress">
      <ProgressBar
        completed={index + Number(answer !== null)}
        bgColor="#1098ad"
        animateOnRender={true}
        isLabelVisible={false}
        maxCompleted={15}
        width={"500px"}
        height={"10px"}
      />
      <div className="wrapper-marks">
        <p>
          Question <strong>{index + 1} </strong> / 15
        </p>
        <p>0 / 280</p>
      </div>
    </header>
  );
}

export default Progress;
