import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from "react-select/animated";


function SearchSelect(props) {
    const data = [
        {value: 'vidura@gmail.com', label: 'vidura@gmail.com'},
        {value: 'ravindranath@gmail.com', label: 'ravindranath@gmail.com'},
        {value: 'dilsara@gmail.com ', label: 'dilsara@gmail.com '},
        {value: 'jayaneththige@gmail.com', label: 'jayaneththige@gmail.com'},
        {value: 'kaushalya@gmail.com', label: 'kaushalya@gmail.com'},
        {value: 'shinashi@gmail.com', label: 'shinashi@gmail.com'},
    ]
    const [selectedValues, setSelectedValues] = useState([]);
    const animatedComponents = makeAnimated();

  
    const handleSelectChange = (selectedOptions) => {
        setSelectedValues(selectedOptions.map(option => option.value));
        if (props.onSelectChange) {
            props.onSelectChange(selectedOptions.map(option => option.value));
        }
    };

  return (
    <Select
      styles={{
        control: (base, state) => ({
          ...base,
          border: "1px solid #acadac",
          maxWidth: "800px",
          minHeight: "45px",
          backgroundColor: "black",
          color: "black",
          fontSize: "12px",
            border : state.isFocused ? "1px solid green" : "1px solid #30363d",
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#30363d" : "black",
            color: "white",
            ":active": {
                ...base[":active"],
                backgroundColor: "black",
            },
        }),
        multiValue: (base, state) => ({
            ...base,
            backgroundColor: "#30363d",
            color: "white",
        }),
        multiValueLabel: (base, state) => ({
            ...base,
            color: "white",
        }),
        multiValueRemove: (base, state) => ({
            ...base,
            color: "white",
            ":hover": {
                backgroundColor: "black",
                color: "white",
            },
        }),
      
        singleValue: (base, state) => ({
            ...base,
            color: "white",
        }),
        input: (base, state) => ({
            ...base,
            color: "white",
        }),
        dropdownIndicator: (base, state) => ({
            ...base,
            color: "white",
        }),
        indicatorSeparator: (base, state) => ({
            ...base,
            backgroundColor: "white",
        }),
        clearIndicator: (base, state) => ({
            ...base,
            color: "white",
        }),
        menu: (base, state) => ({
            ...base,
            backgroundColor: "black",
            color: "white",
        }),
        menuList: (base, state) => ({
            ...base,
            backgroundColor: "black",
            color: "white",
            fontSize: "12px",
        }),
      }}
      options={data}
      onChange={handleSelectChange}
      components={animatedComponents}
      isSearchable={true}
      isMulti
      placeholder="Select People"
    />
    
    
  )
}

export default SearchSelect