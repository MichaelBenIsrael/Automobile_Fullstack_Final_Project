import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const TableRow = () => {
    return (
        <tr>
            <td>117</td>
            <td>TestTreatment</td>
            <td>27/12/2022 22:36:58</td>
            <td>test@gmail.com</td>
            <td>123</td>
            <td>
                <button><FaEdit /></button>
                <button><MdDelete /></button>
            </td>
        </tr>
    )
};

export default TableRow;