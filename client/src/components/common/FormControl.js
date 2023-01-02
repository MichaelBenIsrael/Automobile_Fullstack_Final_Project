import React from "react";

const FormControl = ({ inputType, inputId, placeHolder, isRequired, containToolTip, toolTipContent }) =>
(
  <div className="form-control">
    <input type={inputType} id={inputId} placeholder={placeHolder} required={isRequired} />
    {containToolTip &&
      <div className="tooltip">
        <span className="tooltiptext">{toolTipContent}</span>
      </div>
    }
  </div>
);

export default FormControl;
