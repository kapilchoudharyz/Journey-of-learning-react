import ClipLoader from "react-spinners/ClipLoader";
function Loader() {
  return (
    <div className="loader">
      <ClipLoader color={"#ced4da"} />
      Loading...
    </div>
  );
}

export default Loader;
