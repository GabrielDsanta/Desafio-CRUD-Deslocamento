import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";


export const columns: GridColDef[] = [
    {
      flex: 0,
      minWidth: 350,
      field: "name",
      headerName: "Nome",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <h4>{row.nome}</h4>
          </Box>
        );
      },
    },
    {
      flex: 0.04,
      minWidth: 250,
      headerName: "Número Documento",
      field: "docNumber",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.numeroDocumento}</h4>
          </Typography>
        );
      },
    },
    {
      flex: 0.1,
      minWidth: 150,
      field: "typeDocument",
      headerName: "Tipo Documento",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.tipoDocumento}</h4>
          </Typography>
        );
      },
    },
    {
      flex: 0,
      minWidth: 300,
      field: "city",
      headerName: "Cidade",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.cidade}</h4>
          </Typography>
        );
      },
    },
    {
      flex: 0,
      minWidth: 0,
      field: "uf",
      headerName: "UF",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.uf}</h4>
          </Typography>
        );
      },
    }
];