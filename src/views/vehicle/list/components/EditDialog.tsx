import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material";
import { TextBox } from "../../../../components/TextBox";
import { Transition } from "../../../../components/Transition";
import { useForm } from "react-hook-form";
import { FormDataProps, ValidationSchemaForm } from "../../models/List";
import { yupResolver } from "@hookform/resolvers/yup";

interface EditDialogProps {
    openEdit: boolean;
    resetAndCloseFields: () => void;
    errorMessage: string;
    handleFormSubmit: (formData: any) => void;
}

export function EditDialog({ openEdit, resetAndCloseFields, errorMessage, handleFormSubmit }: EditDialogProps){
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
      } = useForm<FormDataProps>({
        resolver: yupResolver(ValidationSchemaForm),
      });

    return(
        <Dialog
            open={openEdit}
            keepMounted
            onClose={resetAndCloseFields}
            TransitionComponent={Transition}
            fullWidth
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle align="center" id="alert-dialog-slide-title">
              Editar Veículo
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <Box onSubmit={handleSubmit(handleFormSubmit)}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    autoFocus
                    helperText={
                      errors.anoFabricacao !== undefined &&
                      errors.anoFabricacao.message
                    }
                    error={
                      errors.anoFabricacao === undefined &&
                      getValues("anoFabricacao") !== null
                        ? false
                        : true
                    }
                    placeholder=" "
                    label="Ano De Fabricação"
                    margin="normal"
                    {...register("anoFabricacao")}
                  />

                  <TextField
                    variant="outlined"
                    fullWidth
                    autoFocus
                    helperText={
                      errors.kmAtual !== undefined && errors.kmAtual.message
                    }
                    error={
                      errors.kmAtual === undefined &&
                      getValues("kmAtual") !== null
                        ? false
                        : true
                    }
                    placeholder=" "
                    label="Km Atual"
                    margin="normal"
                    {...register("kmAtual")}
                  />

                  <TextField
                    variant="outlined"
                    fullWidth
                    autoFocus
                    helperText={
                      errors.marcaModelo !== undefined &&
                      errors.marcaModelo.message
                    }
                    error={
                      errors.marcaModelo === undefined &&
                      getValues("marcaModelo") !== null
                        ? false
                        : true
                    }
                    placeholder=" "
                    label="Marca / Modelo"
                    margin="normal"
                    {...register("marcaModelo")}
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
    )
}