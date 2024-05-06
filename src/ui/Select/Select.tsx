import React, {HTMLAttributes} from 'react';
import {Option} from "@mui/base";
import {Select as MuiSelect, SelectProps as MuiSelectProps} from "@mui/material";
import {MenuItem} from "@mui/material";

export type SelectProps = SelectProps & {
  value: any;
  options: any[];
  labelField?: string;
}

const Select = (props: SelectProps) => {
  const { options, labelField = 'label', ...rest } = props;

  return (
    <MuiSelect
      renderValue={(v) => v?.[labelField]}
      {...rest}
    >
      {options?.map(option => (
        <MenuItem key={option.labelField} valute={option}>{option[labelField]}</MenuItem>
      ))}
    </MuiSelect>
  );
};

export default Select;

const RootComponent = (props: any) => {
  return props.children
}