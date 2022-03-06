import React, { useState } from "react";
import PropTypes from "prop-types";

const IkoAccordionItem = ({ item }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`iko-accordion__item ${active ? "active" : ""}`}>
      <div className="iko-accordion__header" onClick={() => setActive(!active)}>
        <div className="iko-accordion__title">{item.title}</div>
        <div className="iko-accordion__icon">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="iko-accordion__content">{item.content}</div>
    </div>
  );
};

const IkoAccordion = ({ accordion }) => {
  return (
    <div className="iko-accordion">
      {accordion.map((item, index) => (
        <IkoAccordionItem key={index} item={item} />
      ))}
    </div>
  );
};

IkoAccordion.propTypes = {
  accordion: PropTypes.array,
  className: PropTypes.string,
};

export default IkoAccordion;
