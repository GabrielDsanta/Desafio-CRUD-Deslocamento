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
  handleFormSubmit: (formData: any) => void;
  errorMessage: string;
  resetAndCloseFields: () => void;
}

export function EditDialog({ openEdit, handleFormSubmit, errorMessage, resetAndCloseFields }: EditDialogProps) {
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
        Editar Deslocamento
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Box onSubmit={handleSubmit(handleFormSubmit)}>
            <TextField
              variant="outlined"
              type="date"
              fullWidth
              autoFocus
              helperText={
                errors.fimDeslocamento !== undefined &&
                errors.fimDeslocamento.message
              }
              error={
                errors.fimDeslocamento === undefined &&
                getValues("fimDeslocamento") !== null
                  ? false
                  : true
              }
              InputLabelProps={{
                shrink: true,
              }}
              placeholder=" "
              label="Fim Do Deslocamento"
              margin="normal"
              {...register("fimDeslocamento")}
            />

            <TextField
              variant="outlined"
              fullWidth
              type="number"
              autoFocus
              helperText={
                errors.kmFinal !== undefined && errors.kmFinal.message
              }
              error={
                errors.kmFinal === undefined && getValues("kmFinal") !== null
                  ? false
                  : true
              }
              placeholder=" "
              label="Km Final"
              margin="normal"
              {...register("kmFinal")}
            />

            <TextField
              variant="outlined"
              fullWidth
              autoFocus
              helperText={
                errors.observacao !== undefined && errors.observacao.message
              }
              error={
                errors.observacao === undefined &&
                getValues("observacao") !== null
                  ? false
                  : true
              }
              placeholder=" "
              label="Observação"
              margin="normal"
              {...register("observacao")}
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
          variant="outlined"
          onClick={handleSubmit(handleFormSubmit)}
          color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
