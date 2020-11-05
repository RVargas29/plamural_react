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
        <div class="section-header">
          <h3 class="section-title">{text}</h3>
          <span class="section-divider"></span>    
          { printDescription(children) }   
        </div>
    )
}

export default SectionHeader;