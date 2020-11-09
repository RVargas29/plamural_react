import "./SectionHeader.css"

const SectionHeader = ({ text, children}) => {

    const printDescription = (description) => {
      if(description) {
        return (
          <p className="section-description">{ description }</p>
        )
      }      
    } 
    
    return (
        <div className="section-header">
          <h3 className="section-title">{text}</h3>
          <span className="section-divider"></span>    
          { printDescription(children) }   
        </div>
    )
}

export default SectionHeader;