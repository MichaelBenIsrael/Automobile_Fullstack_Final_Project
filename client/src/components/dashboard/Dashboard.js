import { React } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronDoubleLeft, BsChevronLeft, BsChevronRight, BsChevronDoubleRight } from 'react-icons/bs';
import Navbar from "../common/Navbar";
import TableRow from "../common/TableRow";
import Modal from "../common/Modal";
import { dashBoardLinkList } from "../../assets/links";
import { getCookie } from "../../assets/cookies";
import { treatments } from "../../assets/data";
import Button from "../common/Button";

const Dashboard = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const sessionId = getCookie("sessionId");
        if (!sessionId) {
            navigate('/');
        }
    }, [navigate]);

    const [tableRows, setTableRows] = useState(treatments);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalRows, setTotalRows] = useState(treatments.length);

    const [editTreatment, setEditTreatment] = useState({});
    const [editModal, setEditModal] = useState(false);

    const [newTreatment, setNewTreatment] = useState(false);


    useEffect(() => {
        document.title = "SiteLogo - Dashboard";
        // fetch data from server
        getTotalRows();
        getTableRows();
    }, []);

    const getTableRows = async () => {
        // request from server rows of pageNumber
        const data = await fetch("", {});
        const rows = await data.json();
        setTableRows(rows);
    };

    const getTotalRows = async () => {
        // request server for total number rows
        const data = await fetch("", {});
        const rows = await data.json();
        setTotalRows(rows);
    };

    const deleteRow = (treatmentNumber) => {
        const filteredRows = tableRows.filter((treatment) => treatment.treatmentNumber !== treatmentNumber);
        setTableRows(filteredRows);
        setTotalRows(totalRows - 1);
        // send request to update the server.
    };

    const editRow = (treatmentNumber) => {
        const rowToEdit = tableRows.find((treatment) => treatment.treatmentNumber === treatmentNumber);
        setEditTreatment(rowToEdit);
        setEditModal(true);
    };

    const saveEdit = (updatedTreatment) => {
        let filteredRows = tableRows.filter((treatment) => treatment.treatmentNumber !== updatedTreatment.treatmentNumber);
        filteredRows = [...filteredRows, updatedTreatment];
        setEditTreatment({});
        setTableRows(filteredRows);
        // send request to update the server.
    }

    const sortByNumber = () => {
        const sortedRows = tableRows.sort((row1, row2) => {
            if (row1.treatmentNumber < row2.treatmentNumber) {
                return -1;
            }
            if (row1.treatmentNumber > row2.treatmentNumber) {
                return 1;
            }
            return 0;
        });
        setTableRows([...sortedRows]);
    }

    const sortByInfo = () => {
        const sortedRows = tableRows.sort((row1, row2) => {
            return row1.treatmentInfo.localeCompare(row2.treatmentInfo);
        });
        setTableRows([...sortedRows]);
    }

    const sortByDate = () => {
        const sortedRows = tableRows.sort((row1, row2) => {
            const date1 = new Date(row1.date), date2 = new Date(row2.date);
            if (date1 < date2) {
                return -1;
            }
            if (date1 > date2) {
                return 1;
            }
            return 0;
        });
        setTableRows([...sortedRows]);
    }

    const sortByEmail = () => {
        const sortedRows = tableRows.sort((row1, row2) => {
            return row1.workerEmail.localeCompare(row2.workerEmail);
        });
        setTableRows([...sortedRows]);
    }

    const sortByCarNumber = () => {
        const sortedRows = tableRows.sort((row1, row2) => {
            if (row1.carNumber < row2.carNumber) {
                return -1;
            }
            if (row1.carNumber > row2.carNumber) {
                return 1;
            }
            return 0;
        });
        setTableRows([...sortedRows]);
    }

    const addNewTreatment = (treatment) => {
        treatment.treatmentNumber = tableRows.length + 1;
        setTableRows([...tableRows, treatment]);
    }
    return (
        <>
            <Navbar links={dashBoardLinkList} currentActive="Dashboard" />
            <main className="page">
                <h1>Dashboard</h1>
                <div className="table">
                    <div className="table-header">
                        <span>Treatments Details</span>
                        <div>
                            <input placeholder="Search" />
                        </div>
                    </div>
                    <div className="table-section">
                        <table>
                            <thead>
                                <tr>
                                    <th onClick={() => sortByNumber()}>Treatment Number</th>
                                    <th onClick={() => sortByInfo()}>Treatment Information</th>
                                    <th onClick={() => sortByDate()}>Date</th>
                                    <th onClick={() => sortByEmail()}>Worker email</th>
                                    <th onClick={() => sortByCarNumber()}>Car Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows.map((row, id) => {
                                    return <TableRow treatment={row} editCallback={editRow} deleteCallback={deleteRow} key={id} />
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination">
                        <span style={{ fontSize: "0.9rem" }}>Displaying {pageNumber} - {pageNumber + 9} out of {totalRows} treatments</span>
                        <div className="pages">
                            <div><BsChevronDoubleLeft style={{ verticalAlign: "bottom" }} onClick={() => { setPageNumber(1); getTableRows(); }} /></div>
                            <div><BsChevronLeft onClick={() => {
                                if ((pageNumber - 1) < 1) {
                                    return;
                                }
                                setPageNumber(pageNumber - 1);
                                getTableRows();
                            }} /></div>
                            <div>{pageNumber}</div>
                            <div><BsChevronRight onClick={() => {
                                if ((pageNumber + 1) * 10 > totalRows) {
                                    return;
                                }
                                setPageNumber(pageNumber + 1);
                                getTableRows();
                            }} /></div>
                            <div><BsChevronDoubleRight onClick={() => { setPageNumber(totalRows % 10); getTableRows() }} /></div>
                        </div>
                    </div>
                </div>
                <Button className="btn" content="Add New Treatment" onClickCallback={() => setNewTreatment(true)} />
                {editModal && <Modal shouldEdit={true} setDisplay={setEditModal} treatment={editTreatment} save={saveEdit} updateTreatment={setEditTreatment} />}
                {newTreatment && <Modal shouldEdit={true} setDisplay={setNewTreatment} save={addNewTreatment} />}
            </main>

        </>
    )
};

export default Dashboard;
