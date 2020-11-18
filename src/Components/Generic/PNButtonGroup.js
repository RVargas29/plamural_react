import { Button, ButtonGroup } from "react-bootstrap";

const PNButtonGroup = ({index, count, handlePreviousNext}) => {
    var handlePreviousNextCallback = handlePreviousNext
    var previous = null;
    var next = null;
    if(index > 0) {
        previous = (
            <Button variant="primary" onClick={() => {handlePreviousNextCallback(index-1)}}>
                Anterior
            </Button>
        )
    }
    if(index < count - 1) {
        next = (
            <Button variant="primary" onClick={() => {handlePreviousNextCallback(index+1)}}>
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