import { useState } from 'react';

const useInput = (type, name, placeholder) => {
    const [value, setValue] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const onChange = (e) => {
        if (!submitted) {
            setValue(e.target.value);
        }
    };

    return {
        value,
        onChange,
        type,
        name,
        placeholder,
        setSubmitted,
    };
};

export default useInput;
