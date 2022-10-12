import { Typography, Alert } from "@mui/material"
import Navbar from "./NavbarLayout/Navbar"


const Error = () => {
  return (
    <>
    <Navbar/>
    <Alert severity="error">404 Error - Page Not Found</Alert>
    </>
  )
}

export default Error