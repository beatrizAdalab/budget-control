import React from 'react';
import Expenditure from './Expenditure'

function ListExpenditures({ listExpenditures }) {

    return (

        <div className='list-expenditures py-3'>
            <h4 className='title-expenditure text-center pb-4 m-0 text-success'>Expenditures</h4>
            <ul className='list-group'>
                {listExpenditures.map(expenditure => (
                    <Expenditure
                        expenditure={expenditure}
                        key={expenditure.id} />
                ))}
            </ul>

        </div>
    )
}

export default ListExpenditures;