import { Box, Typography, useTheme } from "@mui/material"
import FlexBetween from "./FlexBetween"
import React from "react"

type Props = {
    title: String;
    sideText?: String;
    subTitle?: String;
    icons?:React.ReactNode
}


const BoxHeader = ({title, icons, sideText, subTitle}: Props) => {
    const { palette } = useTheme()
    return(
        <FlexBetween color={palette.grey[400]} m="1rem 1rem 0rem 1rem">
            <FlexBetween>
                {icons}
                <Box width="100%">
                    <Typography variant="h4" mb="-0.1rem">
                        {title}
                    </Typography>
                    <Typography variant="h6">{subTitle}</Typography>
                </Box>
            </FlexBetween>
            <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
                {sideText}
            </Typography>
        </FlexBetween>
    )
}

export default BoxHeader