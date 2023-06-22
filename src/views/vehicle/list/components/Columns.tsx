import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    {
      flex: 0,
      minWidth: 350,
      field: "name",
      headerName: "Placa",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <h4>{row.placa}</h4>
          </Box>
        );
      },
    },
    {
      flex: 0.04,
      minWidth: 250,
      headerName: "Modelo",
      field: "docNumber",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.marcaModelo}</h4>
          </Typography>
        );
      },
    },
    {
      flex: 0.1,
      minWidth: 150,
      field: "typeDocument",
      headerName: "Ano",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.anoFabricacao}</h4>
          </Typography>
        );
      },
    },
    {
      flex: 0,
      minWidth: 300,
      field: "city",
      headerName: "Km Atual",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.kmAtual}</h4>
          </Typography>
        );
      },
    },
    {
      flex: 0.1,
      minWidth: 0,
      field: "uf",
      headerName: "ID",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.id}</h4>
          </Typography>
        );
      },
    }
];