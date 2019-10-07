import React, { Fragment, useState } from 'react';
import Error from '../components/Error'

function InitialQuestion({ setBudget, setQuestionBudget, setRemainder }) {

    const [initialMoney, setInitialMoney] = useState(0);
    const [error, setError] = useState(false)

    const addBudget = e => {
        e.preventDefault();
        if (initialMoney < 1 || isNaN(initialMoney)) {
            setError(true);
            return;
        }
        setError(false);
        setBudget(initialMoney);
        setRemainder(initialMoney)
        setQuestionBudget(false)

    }


    return (
        <Fragment>
            <div className='container-InitialQuestion d-flex justify-content-center align-items-center'>
                <form className='form-InitialQuestion d-flex flex-column justify-content-center align-items-center'
                    onSubmit={addBudget} >
                    <h2 className='pb-4 m-0'>Decide your budget</h2>
                    {(error)?<Error message='The budget is incorrect' />:null}

                    <input
                        type='number'
                        className='form-control mb-5'
                        placeholder='eg. 100'
                        onChange={e => setInitialMoney(parseInt(e.target.value, 10))} />
                    <button
                        type='submit'
                        className='btn btn-success'
                        value='initialBudget'>Define Budget</button>
                </form>
            </div>
        </Fragment>
    )
}

export default InitialQuestion;