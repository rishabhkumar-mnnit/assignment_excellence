import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table';
import './table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

function RenderTable({ columnsData, canPreviousPage, value, previousPageHandler, nextPageHandler, currentPage }) {
    console.log(value);
    const columns = useMemo(() => columnsData, []);
    const data = useMemo(() => value, []);
    const tableINstance = useTable({
        columns,
        data,
    }, usePagination)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow
    } = tableINstance

    return (
        <>
            <Table striped bordered hover size="sm" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column, thIndex) => (
                                    <th key={thIndex} {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, rowIndex) => {
                        prepareRow(row)
                        return (
                            <tr key={rowIndex} {...row.getRowProps()}>
                                {
                                    row.cells.map((cells, cellIndex) => {
                                        console.log('---', cells);
                                        return (
                                            <td key={cellIndex} {...cells.getCellProps}>
                                                {cellIndex !== 0 ? cells.render('Cell') : <img className="avatar" src={cells.value} alt="Not Found"/>}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })}
                </tbody>

            </Table>
            <br />
            <div>
                <span>
                    Current Page{' '}
                    <strong>{currentPage}</strong>{' '}
                </span>{' '}
                <button onClick={() => previousPageHandler()} disabled={canPreviousPage}>Previous</button>
                <button onClick={() => nextPageHandler()} >Next</button>
            </div>
        </>
    )
}

export default RenderTable;
