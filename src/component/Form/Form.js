import React, { useState } from 'react';
import PropTypes from 'prop-types';

Form.propTypes = {
    onSubmit: PropTypes.func,
};
Form.defaultProps = {
    onSubmit: null,
}

function Form(props) {
    const { onSubmit } = props
    const [value, setvalue] = useState('');

    const handleValueChange = (e) => {
        setvalue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!onSubmit) {
            return
        }
        onSubmit(value)
        setvalue('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="tex" value={value} onChange={handleValueChange} />
            </form>
        </div>
    );
}

export default Form;