import { faqs } from "../../data/faqs";
import Accordion from "../ui/Accordion";

function FAQ() {
  return (
    <section id="faq" className="faq">
      <h2>FAQs</h2>
      <Accordion items={faqs} />
    </section>
  );
}

export default FAQ;