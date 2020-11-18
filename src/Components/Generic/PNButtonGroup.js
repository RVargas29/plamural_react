import { Button, ButtonGroup } from "react-bootstrap";

const PNButtonGroup = ({recordIndex, recordCount, handlePreviousNext}) => {
    var handlePreviousNextCallback = handlePreviousNext
    var previous = null;
    var next = null;
    if(recordIndex > 0) {
        previous = (
            <Button variant="primary" onClick={() => {handlePreviousNextCallback(recordIndex-1)}}>
                Anterior
            </Button>
        )
    }
    if(recordIndex < recordCount - 1) {
        next = (
            <Button variant="primary" onClick={() => {handlePreviousNextCallback(recordIndex+1)}}>
                Siguiente
            </Button>
        )
    }
    return(
        <ButtonGroup>                        
            {previous}
                {next}
        </ButtonGroup>
    )
}

export default PNButtonGroup;