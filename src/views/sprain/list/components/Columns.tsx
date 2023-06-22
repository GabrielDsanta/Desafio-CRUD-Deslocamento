import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    {
      flex: 0,
      minWidth: 350,
      field: "name",
      headerName: "Motivo",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <h4>{row.motivo}</h4>
          </Box>
        );
      },
    },
    {
      flex: 0.04,
      minWidth: 250,
      headerName: "Observação",
      field: "docNumber",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.observacao}</h4>
          </Typography>
        );
      },
    },
    {
      flex: 0.1,
      minWidth: 150,
      field: "typeDocument",
      headerName: "ID Do Cliente",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.idCliente}</h4>
          </Typography>
        );
      },
    },
    {
      flex: 0,
      minWidth: 300,
      field: "city",
      headerName: "Checklist",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.checkList}</h4>
          </Typography>
        );
      },
    },
    {
      flex: 0.1,
      minWidth: 0,
      field: "uf",
      headerName: "ID Do Condutor",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.idCondutor}</h4>
          </Typography>
        );
      },
    },
];