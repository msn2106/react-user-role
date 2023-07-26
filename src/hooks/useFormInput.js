import { useState } from 'react';

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    e.preventDefault(); // prevent form submission on input change
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleOnChange,
  };
};

export default useFormInput;
