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
import { formatDate } from "../../../../@core/utils/format";
import { Transition } from "../../../../components/Transition";
import { DriverProps } from "../../../../pages/driver/list";

interface DeleteDialogProps {
    showDelete: boolean;
    resetAndCloseFields: () => void;
    driverToBeDeleted: DriverProps;
    errorMessage: string;
    handleClickExcluirConfirm: () => void;
}

export function DeleteDialog({ resetAndCloseFields, showDelete, driverToBeDeleted, errorMessage, handleClickExcluirConfirm }: DeleteDialogProps) {
  return (
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
          <Typography variant="h5" sx={{ mb: 3, textTransform: "uppercase" }}>
            Deseja Excluir este Condutor ?
          </Typography>
        </Box>

        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="body2">
            <h3>ID: {driverToBeDeleted?.id}</h3>
            <h3>Nome: {driverToBeDeleted?.nome}</h3>
            <h3>Categoria: {driverToBeDeleted?.catergoriaHabilitacao}</h3>
            <h3>
              Número Da Habilitação: {driverToBeDeleted?.numeroHabilitacao}
            </h3>
            <h3>
              Vencimento Da Habilitação:{" "}
              {formatDate(driverToBeDeleted?.vencimentoHabilitacao)}
            </h3>
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
          onClick={handleClickExcluirConfirm}
          color="error">
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
}
