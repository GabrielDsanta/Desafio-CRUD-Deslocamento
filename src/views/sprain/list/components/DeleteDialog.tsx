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
import { TextBox } from "../../../../components/TextBox";
import { Transition } from "../../../../components/Transition";
import { Sprain } from "../../../../pages/sprain/list";

interface DeleteDialogProps {
    showDelete: boolean;
    resetAndCloseFields: () => void;
    sprainToBeDeleted: Sprain;
    errorMessage: string;
    handleDeleteSprain: () => void;
}


export function DeleteDialog({ showDelete, resetAndCloseFields, sprainToBeDeleted, errorMessage, handleDeleteSprain }: DeleteDialogProps){
    return(
        <Dialog
            fullWidth
            open={showDelete}
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
                  Deseja Excluir este Deslocamento ?
                </Typography>
              </Box>
              <Box sx={{ mb: 4, textAlign: "center" }}>
                <Typography variant="body2">
                  <h3>ID: {sprainToBeDeleted?.id}</h3>
                  <h3>CheckList: {sprainToBeDeleted?.checkList}</h3>
                  <h3>Fim Do Deslocamento: {sprainToBeDeleted?.fimDeslocamento}</h3>
                  <h3>ID Do Cliente: {sprainToBeDeleted?.idCliente}</h3>
                  <h3>ID Do Condutor: {sprainToBeDeleted?.idCondutor}</h3>
                  <h3>ID Do Veículo: {sprainToBeDeleted?.idVeiculo}</h3>
                  <h3>Inicio Do Deslocamento: {sprainToBeDeleted?.inicioDeslocamento}</h3>
                  <h3>Km Inicial: {sprainToBeDeleted?.kmInicial}</h3>
                  <h3>Km Final: {sprainToBeDeleted?.kmFinal}</h3>
                  <h3>Motivo: {sprainToBeDeleted?.motivo}</h3>
                  <h3>Observação: {sprainToBeDeleted?.observacao}</h3>
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
                onClick={handleDeleteSprain}
                color="error">
                Excluir
              </Button>
            </DialogActions>
          </Dialog>
    )
}