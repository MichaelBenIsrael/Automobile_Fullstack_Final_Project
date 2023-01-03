import { React } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronDoubleLeft, BsChevronLeft, BsChevronRight, BsChevronDoubleRight } from 'react-icons/bs';
import Navbar from "../common/Navbar";
import TableRow from "../common/TableRow";
import { dashBoardLinkList } from "../../assets/links";
import { getCookie } from "../../assets/cookies";

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const sessionId = getCookie("sessionId");
        if (!sessionId) {
            navigate('/');

        }
    }, [navigate]);

    const [tableRows, setTableRows] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalRows, setTotalRows] = useState(0);


    useEffect(() => {
        // fetch data from server
    }, [tableRows]);

    const getTableRows = async () => {
        // request from server rows of pageNumber
        const data = await fetch("", {});
        const rows = await data.json();
        setTableRows(rows);
    }

    const getTotalRows = async () => {
        // request server for total number rows
        const data = await fetch("", {});
        const rows = await data.json();
        setTotalRows(rows);
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
                                    <th>Treatment Number</th>
                                    <th>Treatment Information</th>
                                    <th>Date</th>
                                    <th>Worker email</th>
                                    <th>Car Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow />
                                <TableRow />
                                <TableRow />
                                <TableRow />
                                <TableRow />
                                <TableRow />
                                <TableRow />
                                <TableRow />
                                <TableRow />
                                <TableRow />
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination">
                        <span style={{ fontSize: "0.9rem" }}>Displaying {pageNumber} - {pageNumber + 10} out of {totalRows} treatments</span>
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

            </main>

        </>
    )
};

export default Dashboard;
