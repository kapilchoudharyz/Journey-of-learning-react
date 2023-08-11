import {useParams} from "react-router-dom";

function Portfoliopage() {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            This is portfolio no {id}
        </div>
    );
}

export default Portfoliopage;