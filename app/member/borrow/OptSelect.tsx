import React from 'react';
import Select from 'react-select';

interface Props {
  bookID: string;
  title: string;
}

const OptSelect = ({ bookID, title }: Props) => {
  // Define the options for the Select component
  const options = [
    { value: bookID, label: title },
  ];

  return (
    <Select
      options={options}
      isSearchable={true} // Optional: depending on your needs
    />
  );
}

export default OptSelect;
