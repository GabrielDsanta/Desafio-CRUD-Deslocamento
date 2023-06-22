import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Client } from "../../../pages/clients/list";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../../services/api";
import { Toaster, toast } from "react-hot-toast";
import { ClientListProps, FormDataProps, ValidationSchemaForm } from "../models/List";
import { DeleteDialog } from "./components/DeleteDialog";
import { EditDialog } from "./components/EditDialog";
import { ReadDialog } from "./components/ReadDialog";
import { LoadingData } from "./components/LoadingData";
import { columns } from "./components/Columns";

const ClientList: React.FC<ClientListProps> = ({ items, loading, setRefresh, refresh }) => {
  const { resetField } = useForm<FormDataProps>({
    resolver: yupResolver(ValidationSchemaForm),
  });

  const [clients, setClients] = useState<Client[]>(items);
  const [loadingData, setLoadingData] = useState<boolean>(
    loading !== undefined ? loading : true
  );
  const [openEdit, setOpenEdit] = useState(false);
  const [clientEdit, setClientEdit] = useState<Client>();
  const [clientToBeDeleted, setClientToBeDeleted] = useState<Client>();
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState<Client | null>(null);
  const [showExcluir, setShowExcluir] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClickOpenEdit = (client: Client) => {
    setClientEdit(client);
    setOpenEdit(true);
  };

  function handleOpenDetails(row: Client) {
    setShowDetails(true);
    setDetails(row);
  }

  const handleClickExcluir = async (clientToBeDeteled: Client) => {
    setClientToBeDeleted(clientToBeDeteled);
    setShowExcluir(true);
  };

  const handleFormSubmit = async (formData: any) => {
    try {
      const updatedUser = {
        id: clientEdit.id,
        bairro: formData.bairro,
        cidade: formData.cidade,
        nome: formData.nome,
        logradouro: formData.logradouro,
        uf: formData.uf,
        numero: formData.numero,
      };
      await api.put(`Cliente/${clientEdit.id}`, updatedUser);
      resetAndCloseFields();
      setRefresh(!refresh)
      toast.success("Editado com sucesso !")
    } catch (error) {
      setErrorMessage(error.message);
      toast.error("Oops, algum problema aconteceu !")
    }
  };

  const handleDeleteClient = async () => {
    const configAxiosDelete = {
      data: {
        id: Number(clientToBeDeleted.id),
      },
    };

    try {
      await api.delete(`Cliente/${clientToBeDeleted.id}`, configAxiosDelete);
      setShowExcluir(false);
      setRefresh(!refresh)
      toast.success("Excluído com sucesso !")
    } catch (error) {
      setErrorMessage(error.message);
      toast.error("Oops, algum problema aconteceu !")
    }
  };

  function resetAndCloseFields() {
    setOpenEdit(false);
    setShowExcluir(false);
    setShowDetails(false);
    resetField("bairro");
    resetField("cidade");
    resetField("nome");
    resetField("uf");
    resetField("logradouro");
    resetField("numero");
    setErrorMessage("");
  }

  const newColumns: GridColDef[] = [
    ...columns,
    {
      flex: 0.1,
      minWidth: 340,
      field: "actions",
      headerName: "Ações",
      renderCell: (params) => {
        const { row } = params;

        return (
          <div>
            <Button
              style={{ marginRight: 10 }}
              size="small"
              data-testid="open-btn"
              variant="outlined"
              color="success"
              onClick={() => handleOpenDetails(row)}>
              Abrir
            </Button>
            <Button
              data-testid="edit-btn"
              style={{ marginRight: 10 }}
              size="small"
              variant="outlined"
              color="info"
              onClick={() => handleClickOpenEdit(row)}>
              Editar
            </Button>
            <Button
              data-testid="delete-btn"
              size="small"
              variant="outlined"
              color="error"
              onClick={() => handleClickExcluir(row)}>
              Excluir
            </Button>
          </div>
        );
      },
    },
  ];

  async function fetchEstoque() {
    const response  = await api.get('Cliente')
    setClients(response.data);
  }

  useEffect(() => {
    setLoadingData(loading);
  }, [loading]);

  useEffect(() => {
    fetchEstoque()
  }, []);

  return (
    <Card>
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />
      
      <CardHeader title="Lista de Clientes" />
      {loadingData ? (
        <LoadingData />
      ) : (
        <>
          <DataGrid
            autoHeight
            rows={clients}
            columns={newColumns}
            pageSize={5}
            disableSelectionOnClick
            rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            loading={loading}
          />

          <DeleteDialog 
            clientToBeDeleted={clientToBeDeleted}
            errorMessage={errorMessage}
            handleDeleteClient={handleDeleteClient}
            resetAndCloseFields={resetAndCloseFields}
            setShowExcluir={setShowExcluir}
            showExcluir={showExcluir}
          />

          <EditDialog 
            errorMessage={errorMessage}
            handleFormSubmit={handleFormSubmit}
            openEdit={openEdit}
            resetAndCloseFields={resetAndCloseFields}
          />

          <ReadDialog 
            details={details}
            resetAndCloseFields={resetAndCloseFields}
            showDetails={showDetails}
          />
        </>
      )}
    </Card>
  );
};

export default ClientList;
