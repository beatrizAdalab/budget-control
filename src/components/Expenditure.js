import React from 'react';

function Expenditure({ expenditure }) {

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {expenditure.nameExpenditure}
            <span className='badge badge-warning badge-pill'>{expenditure.quantityExpenditure}</span>
        </li>
    )
}

export default Expenditure