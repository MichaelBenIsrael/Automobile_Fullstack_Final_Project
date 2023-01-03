import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const TableRow = ({ treatment, editCallback, deleteCallback }) => {
    return (
        <tr>
            <td>{treatment.treatmentNumber}</td>
            <td>{treatment.treatmentInfo}</td>
            <td>{treatment.date}</td>
            <td>{treatment.workerEmail}</td>
            <td>{treatment.carNumber}</td>
            <td>
                <button><FaEdit onClick={() => editCallback(treatment.treatmentNumber)} /></button>
                <button><MdDelete onClick={() => deleteCallback(treatment.treatmentNumber)} /></button>
            </td>
        </tr>
    )
};

export default TableRow;