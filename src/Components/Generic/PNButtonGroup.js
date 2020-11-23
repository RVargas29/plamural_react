import { Link } from "react-router-dom";

import "./PNButtonGroup.css"

const PNButtonGroup = ({index, count, handlePreviousNext}) => {
    var handlePreviousNextCallback = handlePreviousNext
    var previous = null;
    var next = null;
    if(index > 0) {
        previous = (
            <div className="arrow-container previous">
                <Link onClick={() => {handlePreviousNextCallback(index-1)}}>
                    <i class="fas fa-angle-left"></i>
                </Link>
            </div>
        )
    }
    if(index < count - 1) {
        next = (
            <div className="arrow-container next">
                <Link onClick={() => {handlePreviousNextCallback(index+1)}}>
                    <i class="fas fa-angle-right"></i>
                </Link>
            </div>
        )
    }
    return(            
        <div className="modal-next-previous">
            {previous}
            {next}
        </div> 
    )
}

export default PNButtonGroup;