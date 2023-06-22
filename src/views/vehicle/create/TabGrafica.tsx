import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../../services/api";
import { Toaster, toast } from "react-hot-toast";

type FormDataProps = {
  placa: string;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
};

const ValidationSchemaForm = yup.object({
  placa: yup.string().required("Informe o Nome"),
  marcaModelo: yup.string().required("Informe o Tipo Do Documento"),
  anoFabricacao: yup.string().required("Informe o Número Do Documento"),
  kmAtual: yup.string().required("Informe o Bairro"),
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
    const response = await api.post(`Veiculo`, formData);

    if(response.status === 200){
      resetAndCloseFields()
      toast.success("Criado com sucesso !")
    }

    else{
      toast.error("Não foi possível criar o Veículo")
    }
  };

  function resetAndCloseFields() {
    resetField("anoFabricacao")
    resetField("kmAtual")
    resetField("marcaModelo")
    resetField("placa")
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
                    label="Placa"
                    helperText={
                      errors.placa !== undefined &&
                      errors.placa.message
                    }
                    error={
                      errors.placa === undefined &&
                      getValues("placa") !== null
                        ? false
                        : true
                    }
                    {...register("placa")}
                  />
                </Grid>

                <Grid item xs={12} sm={8}></Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Ano De Fabricação"
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
                    {...register("anoFabricacao")}
                  />
                </Grid>

                <Grid item xs={12}></Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Km Atual"
                    helperText={
                      errors.kmAtual !== undefined &&
                      errors.kmAtual.message
                    }
                    error={
                      errors.kmAtual === undefined &&
                      getValues("kmAtual") !== null
                        ? false
                        : true
                    }
                    {...register("kmAtual")}
                  />
                </Grid>

                <Grid item xs={12}></Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Marca / Modelo"
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
                    {...register("marcaModelo")}
                  />
                </Grid>

                <Grid item xs={12}></Grid>

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
