import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
    onSubmit: null
}

function PostFilterForm(props) {
    const { onSubmit } = props
    const [searchItem, setSearchItem] = useState('')
    const typingTimoutRef = useRef(null)

    const handleChange = e => {
        const value = e.target.value
        setSearchItem(value)

        /**
         * dùng kĩ thuật debounce để 1 timout khi user filter vào ô input
         */
        if(typingTimoutRef.current){
            clearTimeout(typingTimoutRef.current)
        }
        if (onSubmit) {
            typingTimoutRef.current = setTimeout(() => {
                const formValues = {
                    searchItem: value,
                }
                onSubmit(formValues)
            }, 300)

        }
    }


    return (
        <form >
            <input type="text" value={searchItem} onChange={handleChange} />
        </form>
    );
}

export default PostFilterForm;