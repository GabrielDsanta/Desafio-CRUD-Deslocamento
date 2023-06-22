import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../../services/api";
import { Toaster, toast } from "react-hot-toast"

type FormDataProps = {
  nome: string;
  tipoDocumento: string;
  numeroDocumento: string;
  bairro: string;
  logradouro: string;
  numero: string;
  cidade: string;
  uf: string;
};

const ValidationSchemaForm = yup.object({
  nome: yup.string().required("Informe o Nome"),
  tipoDocumento: yup.string().required("Informe o Tipo Do Documento"),
  numeroDocumento: yup.string().required("Informe o Número Do Documento"),
  bairro: yup.string().required("Informe o Bairro"),
  logradouro: yup.string().required("Informe o Logradouro"),
  numero: yup.string().required("Informe o Número"),
  cidade: yup.string().required("Informe a Cidade"),
  uf: yup.string().required("Informe o UF"),
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
    const response = await api.post(`Cliente`, formData);

    if(response.status === 200){
      resetAndCloseFields()
      toast.success("Criado com sucesso !")
    }

    else{
      toast.error("Não foi possível criar o Cliente")
    }
  };

  function resetAndCloseFields() {
    resetField("numeroDocumento")
    resetField("bairro")
    resetField("tipoDocumento")
    resetField("nome")
    resetField("cidade")
    resetField("logradouro")
    resetField("uf")
    resetField("numero")
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
                    label="Nome Do Cliente"
                    helperText={
                      errors.nome !== undefined &&
                      errors.nome.message
                    }
                    error={
                      errors.nome === undefined &&
                      getValues("nome") !== null
                        ? false
                        : true
                    }
                    {...register("nome")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Tipo Do Documento"
                    helperText={
                      errors.tipoDocumento !== undefined &&
                      errors.tipoDocumento.message
                    }
                    error={
                      errors.tipoDocumento === undefined &&
                      getValues("tipoDocumento") !== null
                        ? false
                        : true
                    }
                    {...register("tipoDocumento")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Número Do Documento"
                    helperText={
                      errors.numeroDocumento !== undefined &&
                      errors.numeroDocumento.message
                    }
                    error={
                      errors.numeroDocumento === undefined &&
                      getValues("numeroDocumento") !== null
                        ? false
                        : true
                    }
                    {...register("numeroDocumento")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Logradouro"
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
                    {...register("logradouro")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Número"
                    helperText={
                      errors.numero !== undefined &&
                      errors.numero.message
                    }
                    error={
                      errors.numero === undefined &&
                      getValues("numero") !== null
                        ? false
                        : true
                    }
                    {...register("numero")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Bairro"
                    helperText={
                      errors.bairro !== undefined &&
                      errors.bairro.message
                    }
                    error={
                      errors.bairro === undefined &&
                      getValues("bairro") !== null
                        ? false
                        : true
                    }
                    {...register("bairro")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Cidade"
                    helperText={
                      errors.cidade !== undefined &&
                      errors.cidade.message
                    }
                    error={
                      errors.cidade === undefined &&
                      getValues("cidade") !== null
                        ? false
                        : true
                    }
                    {...register("cidade")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="UF"
                    helperText={
                      errors.uf !== undefined &&
                      errors.uf.message
                    }
                    error={
                      errors.uf === undefined &&
                      getValues("uf") !== null
                        ? false
                        : true
                    }
                    {...register("uf")}
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
