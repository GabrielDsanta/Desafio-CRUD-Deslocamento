import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Transition } from "../../../../components/Transition";
import { TextBox } from "../../../../components/TextBox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormDataProps, ValidationSchemaForm } from "../../models/List";

interface EditDialogProps {
    openEdit: boolean;
    resetAndCloseFields: () => void;
    handleFormSubmit: (formData: any) => void;
    errorMessage: string;
}

export function EditDialog({ openEdit, resetAndCloseFields, errorMessage, handleFormSubmit }: EditDialogProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
      } = useForm<FormDataProps>({
        resolver: yupResolver(ValidationSchemaForm),
      });

  return (
    <Dialog
      open={openEdit}
      keepMounted
      onClose={resetAndCloseFields}
      TransitionComponent={Transition}
      fullWidth
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description">
      <DialogTitle align="center" id="alert-dialog-slide-title">
        Editar Condutor
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Box onSubmit={handleSubmit(handleFormSubmit)}>
            <TextField
              variant="outlined"
              fullWidth
              autoFocus
              label="Categoria"
              margin="normal"
              helperText={
                errors.categoriaHabilitacao !== undefined &&
                errors.categoriaHabilitacao.message
              }
              error={
                errors.categoriaHabilitacao === undefined &&
                getValues("categoriaHabilitacao") !== null
                  ? false
                  : true
              }
              {...register("categoriaHabilitacao")}
            />

            <TextField
              type="date"
              variant="outlined"
              fullWidth
              autoFocus
              helperText={
                errors.vencimentoHabilitacao !== undefined &&
                errors.vencimentoHabilitacao.message
              }
              error={
                errors.vencimentoHabilitacao === undefined &&
                getValues("vencimentoHabilitacao") !== null
                  ? false
                  : true
              }
              InputLabelProps={{
                shrink: true,
              }}
              placeholder=" "
              label="Vencimento Da Habilitação"
              margin="normal"
              {...register("vencimentoHabilitacao")}
            />

            {errorMessage.length > 0 && (
              <TextBox title="Erro" detail={errorMessage} />
            )}
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={resetAndCloseFields}
          color="warning">
          Cancelar
        </Button>
        <Button
          type="submit"
          variant="outlined"
          onClick={handleSubmit(handleFormSubmit)}
          color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
