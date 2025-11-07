export default function AccordionItem({  question, answer, isOpen, onToggle }) {
    return (
      <div className="item">
        <div className="title" onClick={onToggle}>
          <h3>{question}</h3>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
  
        {isOpen && (
          <div className="acc-content">
            {answer}
          </div>
        )}
      </div>
    );
  }
  