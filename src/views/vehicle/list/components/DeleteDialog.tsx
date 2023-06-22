import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton
} from "@mui/material";
import { Icon } from "@iconify/react";
import { Transition } from "../../../../components/Transition";
import { Vehicle } from "../../../../pages/vehicle/list";
import { TextBox } from "../../../../components/TextBox";

interface DeleteDialogProps {
    openDelete: boolean;
    resetAndCloseFields: () => void;
    vehicleToBeDeleted: Vehicle;
    errorMessage: string;
    handleDeleteVehicle: () => void;
}

export function DeleteDialog({ openDelete, resetAndCloseFields, errorMessage, handleDeleteVehicle, vehicleToBeDeleted }: DeleteDialogProps){
    return(
        <Dialog
            fullWidth
            open={openDelete}
            scroll="body"
            maxWidth="sm"
            onClose={resetAndCloseFields}
            TransitionComponent={Transition}
            onBackdropClick={resetAndCloseFields}>
            <DialogContent
              sx={{
                px: { xs: 8, sm: 15 },
                py: { xs: 8, sm: 12.5 },
                position: "relative",
              }}>
              <IconButton
                size="small"
                onClick={resetAndCloseFields}
                sx={{ position: "absolute", right: "1rem", top: "1rem" }}>
                <Icon icon="mdi:close" />
              </IconButton>
              <Box sx={{ mb: 4, textAlign: "center" }}>
                <Typography
                  variant="h5"
                  sx={{ mb: 3, textTransform: "uppercase" }}>
                  Deseja Excluir este Veículo ?
                </Typography>
              </Box>
              <Box sx={{ mb: 4, textAlign: "center" }}>
                <Typography variant="body2">
                  <h3>ID: {vehicleToBeDeleted?.id}</h3>
                  <h3>Placa: {vehicleToBeDeleted?.placa}</h3>
                  <h3>Ano De Fabricação: {vehicleToBeDeleted?.anoFabricacao}</h3>
                  <h3>Km Atual: {vehicleToBeDeleted?.kmAtual}</h3>
                  <h3>Marca / Modelo: {vehicleToBeDeleted?.marcaModelo}</h3>
                </Typography>

                {errorMessage.length > 0 && (
                  <TextBox title="Erro" detail={errorMessage} />
                )}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                onClick={resetAndCloseFields}
                color="warning">
                Cancelar
              </Button>
              <Button
                variant="outlined"
                onClick={handleDeleteVehicle}
                color="error">
                Excluir
              </Button>
            </DialogActions>
          </Dialog>
    )
}