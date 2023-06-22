import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../../services/api";
import { Toaster, toast } from "react-hot-toast";

type FormDataProps = {
  kmInicial: number;
  inicioDeslocamento: string;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: number;
  idVeiculo: number;
  idCliente: number;
};

const ValidationSchemaForm = yup.object({
  kmInicial: yup.number().required("Informe o Km Inicial do Deslocamento"),
  inicioDeslocamento: yup.string().required("Informe o Inicio Do Deslocamento"),
  checkList: yup.string().required("Informe a CheckList Do Deslocamento"),
  motivo: yup.string().required("Informe o Motivo Do Deslocamento"),
  observacao: yup.string().required("Informe uma Observação"),
  idCondutor: yup.number().required("Informe o ID do Condutor"),
  idVeiculo: yup.number().required("Informe o ID do Veículo"),
  idCliente: yup.number().required("Informe o ID do Cliente"),
});

const TabGrafica = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    getValues,
  } = useForm<FormDataProps>({
    resolver: yupResolver(ValidationSchemaForm),
  });

  const handleSubmitForm = async (formData: any) => {
    const response = await api.post(`Deslocamento/IniciarDeslocamento`, formData);

    if(response.status === 200){
      resetAndCloseFields()
      toast.success("Criado com sucesso !")
    }

    else{
      toast.error("Não foi possível criar o Deslocamento")
    }
  };

  function resetAndCloseFields() {
    resetField("checkList")
    resetField("motivo")
    resetField("inicioDeslocamento")
    resetField("kmInicial")
    resetField("observacao")
    resetField("idCondutor")
    resetField("idVeiculo")
    resetField("idCliente")
  }

  return (
    <Grid container spacing={6}>
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />

      <Grid item xs={12}>
        <Card>
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="CheckList"
                    helperText={
                      errors.checkList !== undefined &&
                      errors.checkList.message
                    }
                    error={
                      errors.checkList === undefined &&
                      getValues("checkList") !== null
                        ? false
                        : true
                    }
                    {...register("checkList")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Km Inicial"
                    helperText={
                      errors.kmInicial !== undefined &&
                      errors.kmInicial.message
                    }
                    error={
                      errors.kmInicial === undefined &&
                      getValues("kmInicial") !== null
                        ? false
                        : true
                    }
                    {...register("kmInicial")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Inicio Do Deslocamento"
                    helperText={
                      errors.inicioDeslocamento !== undefined &&
                      errors.inicioDeslocamento.message
                    }
                    error={
                      errors.inicioDeslocamento === undefined &&
                      getValues("inicioDeslocamento") !== null
                        ? false
                        : true
                    }
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register("inicioDeslocamento")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Observação"
                    helperText={
                      errors.observacao !== undefined &&
                      errors.observacao.message
                    }
                    error={
                      errors.observacao === undefined &&
                      getValues("observacao") !== null
                        ? false
                        : true
                    }
                    {...register("observacao")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Motivo"
                    helperText={
                      errors.motivo !== undefined &&
                      errors.motivo.message
                    }
                    error={
                      errors.motivo === undefined &&
                      getValues("motivo") !== null
                        ? false
                        : true
                    }
                    {...register("motivo")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="ID Do Condutor"
                    helperText={
                      errors.idCondutor !== undefined &&
                      errors.idCondutor.message
                    }
                    error={
                      errors.idCondutor === undefined &&
                      getValues("idCondutor") !== null
                        ? false
                        : true
                    }
                    {...register("idCondutor")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="ID Do Veículo"
                    helperText={
                      errors.idVeiculo !== undefined &&
                      errors.idVeiculo.message
                    }
                    error={
                      errors.idVeiculo === undefined &&
                      getValues("idVeiculo") !== null
                        ? false
                        : true
                    }
                    {...register("idVeiculo")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="ID Do Cliente"
                    helperText={
                      errors.idCliente !== undefined &&
                      errors.idCliente.message
                    }
                    error={
                      errors.idCliente === undefined &&
                      getValues("idCliente") !== null
                        ? false
                        : true
                    }
                    {...register("idCliente")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={handleSubmit(handleSubmitForm)}>
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TabGrafica;
