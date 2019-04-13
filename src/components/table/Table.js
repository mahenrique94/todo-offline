import PropTypes from 'prop-types'
import React from 'react'

import './Table.css'

const Table = ({ columns, data }) => (
    <table className="Table">
        <thead className="Table-Header">
            <tr className="Table-Header-Row">
                {columns.map(column => (
                    <th className="Table-Header-Column" key={column}>
                        {column}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody className="Table-Body">
            {data.map(item => (
                <tr className="Table-Body-Row" key={item.id}>
                    { columns.map(column => <td className="Table-Body-Column" key={item[column]}>{item[column]}</td>)}
                </tr>
            ))}
        </tbody>
    </table>
)

Table.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Table
