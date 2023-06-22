import { Box, CircularProgress, Typography } from "@mui/material";


export function LoadingData(){
    return(
        <Box
          sx={{
            mt: 6,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <CircularProgress sx={{ mb: 4 }} />
          <Typography>Carregando...</Typography>
        </Box>
    )
}