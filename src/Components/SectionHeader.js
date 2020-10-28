import "./SectionHeader.css"

const SectionHeader = ({ text }) => {
    return (
        <div class="section-header">
          <h3 class="section-title">{text}</h3>
          <span class="section-divider"></span>        
        </div>
    )
}

export default SectionHeader;