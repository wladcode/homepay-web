import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © Diamoncode " + new Date().getFullYear()}
            <br />
            <Link color="inherit" href="http://www.diamoncode.com.ec">
                http://www.diamoncode.com.ec
            </Link>
        </Typography>
    );
}

function FooterPay() {
    return (
        <footer>
            <Box
                sx={{
                    py: 2,
                    px: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? theme.palette.grey[200] : theme.palette.grey[800],
                }}
                >


                    
                <Copyright />
            </Box>
        </footer>
    );
}

export default FooterPay;
