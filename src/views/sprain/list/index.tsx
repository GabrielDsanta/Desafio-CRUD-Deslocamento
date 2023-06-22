import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Sprain } from "../../../pages/sprain/list";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../../services/api";
import { Toaster, toast } from "react-hot-toast";
import { FormDataProps, SprainListProps, ValidationSchemaForm } from "../models/List";
import { columns } from "./components/Columns";
import { DeleteDialog } from "./components/DeleteDialog";
import { EditDialog } from "./components/EditDialog";
import { ReadDialog } from "./components/ReadDialog";
import { LoadingData } from "../../clients/list/components/LoadingData";

const SprainList: React.FC<SprainListProps> = ({ items, loading, refresh, setRefresh }) => {
  const { resetField } = useForm<FormDataProps>({
    resolver: yupResolver(ValidationSchemaForm)
  });

  const [sprainList, setSprainList] = useState<Sprain[]>(items);
  const [loadingData, setLoadingData] = useState<boolean>(
    loading !== undefined ? loading : true
  );
  const [openEdit, setOpenEdit] = useState(false);
  const handleCloseEdit = () => setShowDetails(false);
  const [sprain, setSprain] = useState<Sprain>();
  const [sprainToBeDeleted, setSprainToBeDeleted] = useState<Sprain>();
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState<Sprain | null>(null);
  const [showExcluir, setShowExcluir] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClickOpenEdit = (sprain: Sprain) => {
    setSprain(sprain);
    setOpenEdit(true);
  };

  function handleOpenDetails(row: Sprain) {
    setShowDetails(true);
    setDetails(row);
  }

  const handleClickExcluir = async (sprainToBeDeleted: Sprain) => {
    setSprainToBeDeleted(sprainToBeDeleted);
    setShowExcluir(true);
  };

  function resetAndCloseFields() {
    setOpenEdit(false);
    setShowExcluir(false)
    resetField("fimDeslocamento");
    resetField("kmFinal");
    resetField("observacao");
    setErrorMessage("");
  }

  const handleFormSubmit = async (formData: any) => {
    const updatedSprain = {
      id: sprain.id,
      kmFinal: formData.kmFinal,
      fimDeslocamento: formData.fimDeslocamento,
      observacao: formData.observacao
    }

    try {
      await api.put(`Deslocamento/${sprain.id}/EncerrarDeslocamento`, updatedSprain);
      resetAndCloseFields();
      setRefresh(!refresh)
      toast.success("Editado com sucesso !")
    } catch (error) {
      setErrorMessage(error.message);
      toast.error("Oops, algum problema aconteceu !")
    }
  };

  const handleDeleteSprain = async () => {
    const configAxiosDelete = {
      data: {
        id: Number(sprainToBeDeleted.id)
      }
    }

    try {
      await api.delete(`Deslocamento/${sprainToBeDeleted.id}`, configAxiosDelete);
      setShowExcluir(false)
      setRefresh(!refresh)
      toast.success("Excluído com sucesso !")
    } catch (error) {
      setErrorMessage(error.message);
      toast.error("Oops, algum problema aconteceu !")
    }
  };

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
              data-testid="open-btn"
              style={{ marginRight: 10 }}
              size="small"
              variant="outlined"
              color="success"
              onClick={() => handleOpenDetails(row)}>
              Abrir
            </Button>
            <Button
              style={{ marginRight: 10 }}
              size="small"
              data-testid="edit-btn"
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

  useEffect(() => {
    setLoadingData(loading);
  }, [loading]);

  useEffect(() => {
    setSprainList(items);
  }, [items]);

  return (
    <Card>
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />
      <CardHeader title="Lista de Deslocamentos" />
      {loadingData ? (
        <LoadingData />
      ) : (
        <>
          <DataGrid
            autoHeight
            rows={sprainList}
            columns={newColumns}
            pageSize={7}
            disableSelectionOnClick
            rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            loading={loading}
          />

          <DeleteDialog 
            errorMessage={errorMessage}
            handleDeleteSprain={handleDeleteSprain}
            resetAndCloseFields={resetAndCloseFields}
            showDelete={showExcluir}
            sprainToBeDeleted={sprainToBeDeleted}
          />

          <EditDialog
            errorMessage={errorMessage}
            handleFormSubmit={handleFormSubmit}
            openEdit={openEdit}
            resetAndCloseFields={resetAndCloseFields}
          />

          <ReadDialog
            details={details}
            handleCloseEdit={handleCloseEdit}
            showDetails={showDetails} 
          />
        </>
      )}
    </Card>
  );
};

export default SprainList;
