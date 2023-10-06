import { useState } from "react";
import './AccordionSection.css';

function AccordionSection({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const openClass = isOpen ? "accordian__button--open" : "";
    return (
        <>
            <button
                className={`accordian__button ${openClass}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen?"true" : "false"}
                >
                <span>{title}</span>
            </button>
            {isOpen && (
                <div className="accordian__content">
                    {children}
                </div>
            )}
        </>
    )
}

export default AccordionSection;