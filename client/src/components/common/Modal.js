import React from "react";
import { useState } from "react";
import FormControl from "./FormControl";
import Button from "./Button";
import { stringNullOrEmpty, validateEmail } from "../../assets/validations";

const Modal = ({ shouldEdit, treatment, errorMessage, setDisplay, save }) => {

    const [info, setInfo] = useState(treatment?.treatmentInfo);
    const [date, setDate] = useState(treatment?.date);
    const [workerEmail, setWorkerEmail] = useState(treatment?.workerEmail);
    const [carNumber, setCarNumber] = useState(treatment?.carNumber);

    const closeModal = () => {
        setDisplay(false);
    }

    const saveTreatment = () => {
        if (validateEmail(workerEmail) && !stringNullOrEmpty(info) && !stringNullOrEmpty(date) && !stringNullOrEmpty(carNumber)) {
            const newTreatment = {
                "treatmentNumber": treatment.treatmentNumber,
                "treatmentInfo": info,
                "date": date,
                "workerEmail": workerEmail,
                "carNumber": carNumber
            };
            save(newTreatment);
        }
    }

    return (
        <>
            <div id="modal" className="modal">
                <div className="modal-content" >
                    {shouldEdit &&
                        <form style={{ alignItems: "center" }}>
                            <FormControl inputType="text" inputId="treatmentInfo" content={info} isRequired={false}
                                containToolTip={false} onChangeCallback={setInfo} />
                            <FormControl inputType="text" inputId="date" content={date} isRequired={false}
                                containToolTip={false} onChangeCallback={setDate} />
                            <FormControl inputType="email" inputId="workerEmail" content={workerEmail} isRequired={false}
                                containToolTip={false} onChangeCallback={setWorkerEmail} />
                            <FormControl inputType="text" inputId="carNumber" content={carNumber} isRequired={false}
                                containToolTip={false} onChangeCallback={setCarNumber} />
                            <Button className="btn" content="Save" onClickCallback={saveTreatment} />
                        </form>}

                    {!shouldEdit &&
                        <p className="text">{errorMessage}</p>}

                    <Button className="btn" content="Close" onClickCallback={closeModal} />
                </div>
            </div>
        </>
    );
};

export default Modal;