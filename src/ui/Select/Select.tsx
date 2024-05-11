import React from 'react';
import {MenuItem, Select as MuiSelect, SelectProps as MuiSelectProps} from "@mui/material";

export type SelectProps = MuiSelectProps & {
  value: any;
  options: any[];
  labelField?: string;
}

const Select = (props: SelectProps) => {
  const {options, labelField = 'label', ...rest} = props;

  return (
    <MuiSelect
      className={'text-col-2'}
      renderValue={(v) => v?.[labelField]}
      {...rest}
    >
      {options?.map(option => (
        <MenuItem key={option[labelField]} value={option}>{option[labelField]}</MenuItem>
      ))}
    </MuiSelect>
  );
};

export default Select;

const RootComponent = (props: any) => {
  return props.children
}