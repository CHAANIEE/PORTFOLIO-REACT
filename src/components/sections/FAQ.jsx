import { useScrollReveal } from "../../hooks/useScrollReveal";
import { faqs } from "../../data/faqs";
import Accordion from "../ui/Accordion";

function FAQ() {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="faq" ref={ref}>
      <h2>FAQs</h2>
      <Accordion items={faqs} />
    </section>
  );
}

export default FAQ;