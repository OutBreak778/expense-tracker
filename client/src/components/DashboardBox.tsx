import {Box} from "@mui/material"
import { styled } from "@mui/material/styles"
const DashboardBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.grey[800],
    borderRadius: "1rem",
    boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8"
}))
export default DashboardBox