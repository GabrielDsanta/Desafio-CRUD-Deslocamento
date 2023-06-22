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
import { FieldErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface EditDialogProps {
    openEdit: boolean;
    resetAndCloseFields: () => void;
    errorMessage: string;
    handleFormSubmit: (formData: any) => void
}

import * as yup from "yup";
import { Client } from "../../../../pages/clients/list";
import { TextBox } from "../../../../components/TextBox";

export interface ClientListProps {
    items: Client[];
    loading?: boolean;
}

export type FormDataProps = {
    bairro: string;
    cidade: string;
    logradouro: string;
    nome: string;
    numero: string;
    uf: string;
};

export const ValidationSchemaForm = yup.object({
    nome: yup.string().required("Informe o Nome Do Cliente"),
    cidade: yup.string().required("Informe a Cidade Do Cliente"),
    bairro: yup.string().required("Informe o Bairro Do Cliente"),
    logradouro: yup.string().required("Informe o Logradouro"),
    numero: yup.string().required("Informe o Número"),
    uf: yup.string().required("Informe o UF"),
  });


export function EditDialog({ errorMessage, openEdit, resetAndCloseFields, handleFormSubmit }: EditDialogProps){
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
              Editar Cliente
            </DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <Box onSubmit={handleSubmit(handleFormSubmit)}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    autoFocus
                    label="Nome"
                    margin="normal"
                    helperText={
                      errors.nome !== undefined && errors.nome.message
                    }
                    error={
                      errors.nome === undefined && getValues("nome") !== null
                        ? false
                        : true
                    }
                    {...register("nome")}
                  />

                  <TextField
                    variant="outlined"
                    fullWidth
                    autoFocus
                    helperText={
                      errors.cidade !== undefined && errors.cidade.message
                    }
                    error={
                      errors.cidade === undefined &&
                      getValues("cidade") !== null
                        ? false
                        : true
                    }
                    label="Cidade"
                    margin="normal"
                    {...register("cidade")}
                  />

                  <TextField
                    variant="outlined"
                    fullWidth
                    autoFocus
                    helperText={
                      errors.numero !== undefined && errors.numero.message
                    }
                    error={
                      errors.numero === undefined &&
                      getValues("numero") !== null
                        ? false
                        : true
                    }
                    label="Número"
                    margin="normal"
                    {...register("numero")}
                  />

                  <TextField
                    variant="outlined"
                    fullWidth
                    autoFocus
                    helperText={
                      errors.bairro !== undefined && errors.bairro.message
                    }
                    error={
                      errors.bairro === undefined &&
                      getValues("bairro") !== null
                        ? false
                        : true
                    }
                    label="Bairro"
                    margin="normal"
                    {...register("bairro")}
                  />

                  <TextField
                    variant="outlined"
                    fullWidth
                    autoFocus
                    helperText={
                      errors.logradouro !== undefined &&
                      errors.logradouro.message
                    }
                    error={
                      errors.logradouro === undefined &&
                      getValues("logradouro") !== null
                        ? false
                        : true
                    }
                    label="Logradouro"
                    margin="normal"
                    {...register("logradouro")}
                  />

                  <TextField
                    variant="outlined"
                    fullWidth
                    autoFocus
                    helperText={errors.uf !== undefined && errors.uf.message}
                    error={
                      errors.uf === undefined && getValues("uf") !== null
                        ? false
                        : true
                    }
                    label="UF"
                    margin="normal"
                    {...register("uf")}
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
    )
}