export default function SectionHeading({ index, label, title }) {
  return (
    <div className="section-heading">
      <p className="section-heading__label">
        <span>{index}</span> {"//"} {label}
      </p>
      <h2>{title}</h2>
    </div>
  );
}
