import React from 'react';

function Error({message}) {
    return (
        <div className='w-100 text-center alert alert-dismissible alert-warning'>
            {message}
        </div>
    )
}

export default Error;