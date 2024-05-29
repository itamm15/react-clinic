import { Accordion } from "react-bootstrap";
import { accordionContent } from "./accordionContent.const";

export function UserAccountAccordion() {
  return (
    <Accordion defaultActiveKey={["0"]} className="account-accordion">
      {accordionContent.map((section, index) => (
        <Accordion.Item
          eventKey={String(index)}
          className="account-accordion__item"
          key={index}
        >
          <Accordion.Header>{section.title}</Accordion.Header>
          <Accordion.Body>{section.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
