import React, { useState } from 'react';
import Error from '../components/Error'
import shortid from 'shortid'

function Form({ setExpenditure, setCreateExpenditure }) {

    const [nameExpenditure, setNameExpenditure] = useState('');
    const [quantityExpenditure, setQuantityExpenditure] = useState(0);
    const [error, setError] = useState(false);

    const addExpenditure = (e) => {
        e.preventDefault();
        if (quantityExpenditure < 1 || isNaN(quantityExpenditure) || nameExpenditure === '') {
            setError(true);
            return;
        }

        const Expenditure = {
            nameExpenditure,
            quantityExpenditure,
            id: shortid.generate()
        }

        setExpenditure(Expenditure);
        setCreateExpenditure(true)
 
        //reset form
        setError(false);
        setNameExpenditure('');
        setQuantityExpenditure(0);
    }


    return (
        <div className=' container-new-cost d-flex flex-column justify-content-center align-items-center'>

            <h4 className='py-4 m-0 text-success'>Add your expenses</h4>
            {(error) ? <Error message='All fields must be completed' /> : null}
            <form className='form-InitialQuestion d-flex flex-column justify-content-center w-100'>

                <div className='form-group'>
                    <label className='' htmlFor='concept'>Concept: </label>
                    <input
                        required
                        type='text'
                        id='concept'
                        value={nameExpenditure}
                        className='form-control mb-3'
                        placeholder='eg. transport '
                        onChange={e => (setNameExpenditure(e.target.value))}
                    />
                </div>

                <div className='form-group'>
                    <label className='' htmlFor='quantity'>Quantity: </label>
                    <input
                        required
                        value={quantityExpenditure}
                        type='number'
                        id='quantity'
                        className='form-control mb-3'
                        placeholder='eg. 20 '
                        onChange={e => (setQuantityExpenditure(parseInt(e.target.value, 10)))}
                    />
                    <div className='d-flex justify-content-center align-items-center'>
                        <button
                            type='submit'
                            onClick={addExpenditure}
                            className='btn btn-success align-self-center'
                            value=''>New expenditure</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Form;