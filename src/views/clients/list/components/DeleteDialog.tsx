import { Icon } from "@iconify/react";
import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, Typography } from "@mui/material";
import { TextBox } from "../../../../components/TextBox";
import { Transition } from "../../../../components/Transition";
import { Client } from "../../../../pages/clients/list";

interface DeleteDialogProps {
    showExcluir: boolean;
    setShowExcluir: (bool: boolean) => void;
    resetAndCloseFields: () => void;
    clientToBeDeleted: Client;
    errorMessage: string;
    handleDeleteClient: () => void;
}


export function DeleteDialog({ showExcluir, resetAndCloseFields, setShowExcluir, clientToBeDeleted, errorMessage, handleDeleteClient  }: DeleteDialogProps) {
  return (
    <Dialog
      fullWidth
      open={showExcluir}
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
            Deseja Excluir este Cliente ?
          </Typography>
        </Box>

        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="body2">
            <h3>ID: {clientToBeDeleted?.id}</h3>
            <h3>Nome: {clientToBeDeleted?.nome}</h3>
            <h3>Cidade: {clientToBeDeleted?.cidade}</h3>
            <h3>Bairro: {clientToBeDeleted?.bairro}</h3>
            <h3>Número: {clientToBeDeleted?.numero}</h3>
            <h3>Logradouro: {clientToBeDeleted?.logradouro}</h3>
            <h3>UF: {clientToBeDeleted?.uf}</h3>
            <h3>Número Do Documento: {clientToBeDeleted?.numeroDocumento}</h3>
            <h3>Tipo Do Documento: {clientToBeDeleted?.tipoDocumento}</h3>
          </Typography>

          {errorMessage.length > 0 && (
            <TextBox title="Erro" detail={errorMessage} />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={() => setShowExcluir(false)}
          color="warning">
          Cancelar
        </Button>
        <Button variant="outlined" onClick={handleDeleteClient} color="error">
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
}
