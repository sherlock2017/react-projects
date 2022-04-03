import { React, useState } from "react";
import { Box, TextField } from "@mui/material";
import "./CourseRegistration.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MenuItem from '@mui/material/MenuItem';

const genders = [
  { value: "M", label: "Male" },
  { value: "F", label: "Female" },
];

function CourseRegistration() {
  const [value, setValue] = useState(new Date());
  const [gender, setGender] = useState('');

  const handleGenderChange = event => {
    setGender(event.target.value);
  };

  return (
    <div className="courseRegistration">
      <h2>Mangal Vidhya Peeth Registration</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          //   width: 400,
          //   maxWidth: "100%",
          margin: "0 auto",
        }}
        noValidate
        autoComplete="off"
      >
        {/* full name */}
        <TextField
          fullWidth
          id="fullNameTf"
          margin="normal"
          label="Full Name"
          variant="outlined"
        />

        {/* date of birth */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date of Birth"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        {/* WhatsApp Mobile Number */}
        <TextField
          fullWidth
          id="fullNameTf"
          margin="normal"
          label="WhatsApp Mobile Number"
          variant="outlined"
        />

        {/* Other Mobile Number if any */}
        <TextField
          fullWidth
          id="fullNameTf"
          margin="normal"
          label="Other Mobile Number if any"
          variant="outlined"
        />

        {/* Email ID */}
        <TextField
          fullWidth
          id="fullNameTf"
          margin="normal"
          label="Email ID"
          variant="outlined"
        />

        {/* Gender */}
        <TextField
          id="outlined-select-gender"
          select
          label="Select"
          value={gender}
          onChange={handleGenderChange}
          helperText="Please select your gender"
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </div>
  );
}

export default CourseRegistration;
