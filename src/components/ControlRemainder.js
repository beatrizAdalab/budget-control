import React, {Fragment} from 'react';
import Helper from './Helper'

const ControlRemainder =({budget, remainder})=>
   (
        <Fragment>
         
            <div className='card bg-light mb-3 mt-2'>
                <div className='card-body'>
                    <div className='card-text'>
                    Budget: {budget}€
                    </div>
                </div>
            </div>


            <div className={Helper(budget, remainder)}>
                <div className='card-body'>
                    <div className='card-text'>
                    Remainder: {remainder}€
                    </div>
                </div>
            </div>
            
        </Fragment>
    )


export default ControlRemainder