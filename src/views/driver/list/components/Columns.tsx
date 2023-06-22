import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { formatDate } from "../../../../@core/utils/format";

export const columns: GridColDef[] = [
    {
      flex: 0,
      minWidth: 350,
      field: "link",
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
      headerName: "Número Habilitação",
      field: "createdAt",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.numeroHabilitacao}</h4>
          </Typography>
        );
      },
    },
    {
      flex: 0.1,
      minWidth: 150,
      field: "categoria",
      headerName: "Categoria",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{row.categoriaHabilitacao}</h4>
          </Typography>
        );
      },
    },
    {
      flex: 0.2,
      minWidth: 350,
      field: "vencimento",
      headerName: "Vencimento",
      renderCell: (params) => {
        const { row } = params;
        return (
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            <h4>{formatDate(row.vencimentoHabilitacao)}</h4>
          </Typography>
        );
      },
    },
    
  ];