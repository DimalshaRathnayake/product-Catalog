export default function SectionTitle({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`section-title ${align}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
