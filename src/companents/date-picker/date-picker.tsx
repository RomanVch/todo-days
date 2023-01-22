import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as React from "react";

type DatePickerFormT = {
  getDate: (date: Date) => void;
};
export const DatePickerForm: React.FC<DatePickerFormT> = ({ getDate }) => {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const onChange = (newValue: Date | null) => {
    newValue && getDate(new Date(newValue));
    newValue && setValue(new Date(newValue));
  };
  const today = new Date();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label=""
        value={value}
        inputFormat="DD-MM-YYYY"
        minDate={today}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
