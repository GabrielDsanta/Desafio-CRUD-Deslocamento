import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../../services/api";
import { Toaster, toast } from "react-hot-toast";

type FormDataProps = {
  nome: string;
  numeroHabilitacao: string;
  categoriaHabilitacao: string;
  vencimentoHabilitacao: string;
};

const ValidationSchemaForm = yup.object({
  nome: yup.string().required("Informe a Categoria Da Habilitação"),
  numeroHabilitacao: yup.string().required("Informe o Vencimento Da Habilitação"),
  categoriaHabilitacao: yup.string().required("Informe o Vencimento Da Habilitação"),
  vencimentoHabilitacao: yup.string().required("Informe o Vencimento Da Habilitação"),
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
    const response = await api.post(`Condutor`, formData);

    if(response.status === 200){
      resetAndCloseFields()
      toast.success("Criado com sucesso !")
    }

    else{
      toast.error("Não foi possível criar o Condutor")
    }
  };

  function resetAndCloseFields() {
    resetField("categoriaHabilitacao")
    resetField("vencimentoHabilitacao")
    resetField("numeroHabilitacao")
    resetField("nome")
  }

  return (
    <Grid container spacing={6}>
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />
      <Grid item xs={12}>
        <Card>
          <form>
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Nome Do Condutor"
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

                <Grid item xs={12} sm={8}></Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Número Habilitação"
                    helperText={
                      errors.numeroHabilitacao !== undefined &&
                      errors.numeroHabilitacao.message
                    }
                    error={
                      errors.numeroHabilitacao === undefined &&
                      getValues("numeroHabilitacao") !== null
                        ? false
                        : true
                    }
                    {...register("numeroHabilitacao")}
                  />
                </Grid>

                <Grid item xs={12}></Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Categoria Da Habilitação"
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
                </Grid>

                <Grid item xs={12}></Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Vencimento Da Habilitação"
                    InputLabelProps={{
                        shrink: true,
                    }}
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
                    {...register("vencimentoHabilitacao")}
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
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TabGrafica;
