import React from 'react';

const Form = ({change, submit, current}) => {
        return (
            <form   className='form-group main-form'
                    onSubmit={submit}>

                <input  type='text'
                        placeholder='Course Name'
                        className='form-control mr-3'
                        onChange={change}
                        value={current}
                />
                <button className='text-capitalize btn btn-primary mb-1'> add course</button>
            </form>
        )
    }

export default Form