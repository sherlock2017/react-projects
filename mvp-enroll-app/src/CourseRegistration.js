import { React, useState } from "react";
import { Alert, Box, Button, Chip, Snackbar, Stack, TextField } from "@mui/material";
import "./CourseRegistration.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

const genders = [
  { key: "M", value: "Male" },
  { key: "F", value: "Female" },
];

const courses = [
  { key: "101", value: "Mangal Bodhi 1" },
  { key: "102", value: "Mangal Bodhi 2" },
  { key: "103", value: "Mangal Bodhi 3" },
  { key: "104", value: "Mangal Pragya 1" },
  { key: "105", value: "Mangal Pragya 2" },
];

const timings = [
  { key: "101", value: "10:30 AM" },
  { key: "102", value: "12:30 AM" },
  { key: "103", value: "1:30 AM" },
  { key: "104", value: "2:30 AM" },
  { key: "105", value: "3:30 AM" },
];

function CourseRegistration() {
  const [gender, setGender] = useState("");
  const [fullname, setFullName] = useState("");
  const [dob, setDob] = useState(null);
  const [whatsAppNumber, setWhastAppNumber] = useState("");
  const [otherMobileNumber, setOtherMobileNumber] = useState("");
  const [emailID, setEmailId] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [suitableTiming, setSuitableTiming] = useState("");
  const [enrollSuccess, setEnrollSuccess] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const enroll = (event) => {
    event.preventDefault();
    console.log("Enroll button clicked");

    db.collection("enrollments").add({
      fullName: fullname,
      dob: dob,
      whatsAppNumber: whatsAppNumber,
      otherMobileNumber: otherMobileNumber,
      emailID: emailID,
      gender: gender,
      country: country,
      state: state,
      city: city,
      course: course,
      suitableTiming: suitableTiming,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(success => {setMsg('Successfully enrolled!'); setOpen(true)})
    .catch(error => {setMsg("Failed to enroll, try again later!"); setOpen(true)});

  };

  return (
    <div className="courseRegistration">
      <h2>Register for Course</h2>
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          {msg}
        </Alert>
      </Snackbar>
      <Stack direction={{ xs: "column", sm: "row" }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            // width: 400,
            // maxWidth: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          direc
          autoComplete="off"
        >
          {/* full name */}
          <TextField
            fullWidth
            id="fullName"
            margin="normal"
            label="Full Name"
            variant="outlined"
            onChange={(e) => setFullName(e.target.value)}
          />

          {/* date of birth */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth"
              value={dob}
              onChange={(newValue) => {
                setDob(newValue);
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
            onChange={(e) => setWhastAppNumber(e.target.value)}
          />

          {/* Other Mobile Number if any */}
          <TextField
            fullWidth
            id="otherMobileNumber"
            margin="normal"
            label="Other Mobile Number if any"
            variant="outlined"
            onChange={(e) => setOtherMobileNumber(e.target.value)}
          />

          {/* Email ID */}
          <TextField
            fullWidth
            id="emailId"
            margin="normal"
            label="Email ID"
            variant="outlined"
            onChange={(e) => setEmailId(e.target.value)}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            // width: 400,
            // maxWidth: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          direc
          autoComplete="off"
        >
          {/* Gender */}
          <TextField
            id="gender"
            select
            label="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={{textAlign: 'left'}}
          >
            {genders.map((option) => (
              <MenuItem key={option.key} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>

          {/* Country */}
          <TextField
            fullWidth
            id="country"
            margin="normal"
            label="Country"
            variant="outlined"
            onChange={(e) => setCountry(e.target.value)}
          />

          {/* State */}
          <TextField
            fullWidth
            id="state"
            margin="normal"
            label="State"
            variant="outlined"
            onChange={(e) => setState(e.target.value)}
          />

          {/* City */}
          <TextField
            fullWidth
            id="city"
            margin="normal"
            label="City"
            variant="outlined"
            onChange={(e) => setCity(e.target.value)}
          />

          {/* Course */}
          <TextField
            id="course"
            select
            label="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            style={{textAlign: 'left'}}
          >
            {courses.map((option) => (
              <MenuItem key={option.key} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Stack>
      {/* Course timing  */}
      <span className="courseRegistration__timings">
        Course Suitable Timing
        <b className="courseRegistration__selectedTime">{suitableTiming && ' - '+suitableTiming}</b>
      </span>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={0.5}
        flexWrap="wrap"
      >
        {timings.map((timing) => (
          <Chip
            key={timing.key}
            onClick={(e) => {
              setSuitableTiming(timing.value);
            }}
            label={timing.value}
            variant="outlined"
          />
        ))}
      </Stack>
      <br />
      <Button
        type="submit"
        onClick={enroll}
        variant="contained"
        disableElevation
      >
        Enroll
      </Button>


      
    </div>
  );
}

export default CourseRegistration;
