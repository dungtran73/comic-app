import "./SectionHeader.css";

function SectionHeader(props) {
  return (
      <h2 className="section-header">
        <p className={props.classTitle}>
          <i className={props.classIcon}></i>
          &nbsp;{props.sectionTitle}
        </p>
      </h2>
  );
}

export default SectionHeader;
