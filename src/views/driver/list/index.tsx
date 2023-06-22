import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DriverProps } from "../../../pages/driver/list";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../../services/api";
import { Toaster, toast } from "react-hot-toast";
import { DriversList, FormDataProps, ValidationSchemaForm } from "../models/List";
import { LoadingData } from "../../clients/list/components/LoadingData";
import { DeleteDialog } from "./components/DeleteDialog";
import { EditDialog } from "./components/EditDialog";
import { columns } from "./components/Columns";

const DriverList: React.FC<DriversList> = ({ items, loading, setRefresh, refresh }) => {
  const {
    resetField,
  } = useForm<FormDataProps>({
    resolver: yupResolver(ValidationSchemaForm),
  });

  const [drivers, setDrivers] = useState<DriverProps[]>(items);
  const [loadingData, setLoadingData] = useState<boolean>(
    loading !== undefined ? loading : true
  );
  const [openEdit, setOpenEdit] = useState(false);
  const [driverEdit, setDriverEdit] = useState<DriverProps>();
  const [driverToBeDeleted, setDriverToBeDeleted] = useState<DriverProps>()
  const [showDelete, setShowDelete] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClickOpenEdit = (driver: DriverProps) => {
    setOpenEdit(true);
    setDriverEdit(driver);
  };

  const handleClickExcluir = async (driverToBeDeleted: DriverProps) => {
    setDriverToBeDeleted(driverToBeDeleted)
    setShowDelete(true);
  };

  function resetAndCloseFields() {
    setOpenEdit(false);
    setShowDelete(false)
    resetField("categoriaHabilitacao");
    resetField("vencimentoHabilitacao");
    setErrorMessage("")
  }

  const handleClickExcluirConfirm = async () => {
    const configAxiosDelete = {
      data: {
        id: Number(driverToBeDeleted.id)
      }
    }
    
    try {
      await api.delete(`Condutor/${driverToBeDeleted.id}`, configAxiosDelete);
      setShowDelete(false)
      setRefresh(!refresh)
      toast.success("Excluído com sucesso !")
    } catch (error) {
      setErrorMessage(error.message);
      toast.error("Oops, algum problema aconteceu !")
    }
  };

  const handleFormSubmit = async (formData: any) => {
    try {
      const updatedDriver = {
        id: driverEdit.id,
        categoriaHabilitacao: formData.categoriaHabilitacao,
        vencimentoHabilitacao: formData.vencimentoHabilitacao,
      };

      await api.put(`Condutor/${driverEdit.id}`, updatedDriver);
      resetAndCloseFields();
      setRefresh(!refresh)
      toast.success("Editado com sucesso !")
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
              data-testid="edit-btn"
              style={{ marginRight: 10 }}
              size="small"
              variant="outlined"
              color="info"
              onClick={() => handleClickOpenEdit(row)}>
              Editar
            </Button>
            <Button
              size="small"
              data-testid="delete-btn"
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
    setDrivers(items);
  }, [items]);

  return (
    <Card>
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />

      <CardHeader title="Lista de Condutores" />
      {loadingData ? (
        <LoadingData />
      ) : (
        <>
          <DataGrid
            autoHeight
            rows={drivers}
            columns={newColumns}
            pageSize={7}
            rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            loading={loading}
            disableSelectionOnClick
          />

          <DeleteDialog 
            driverToBeDeleted={driverToBeDeleted}
            errorMessage={errorMessage}
            handleClickExcluirConfirm={handleClickExcluirConfirm}
            resetAndCloseFields={resetAndCloseFields}
            showDelete={showDelete}
          />
          
          <EditDialog 
            errorMessage={errorMessage}
            handleFormSubmit={handleFormSubmit}
            openEdit={openEdit}
            resetAndCloseFields={resetAndCloseFields}
          />
        </>
      )}
    </Card>
  );
};

export default DriverList;
