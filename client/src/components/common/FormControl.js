import React from "react";

const FormControl = ({ inputType, inputId, content, placeHolder, isRequired, containToolTip, toolTipContent, onChangeCallback }) =>
(
  <div className="form-control">
    <input type={inputType} id={inputId} placeholder={placeHolder} required={isRequired} onChange={(e) => onChangeCallback(e.target.value)} value={content} />
    {containToolTip &&
      <div className="tooltip">
        <span className="tooltiptext">{toolTipContent}</span>
      </div>
    }
  </div>
);

export default FormControl;
