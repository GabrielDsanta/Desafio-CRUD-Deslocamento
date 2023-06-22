import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Vehicle } from "../../../pages/vehicle/list";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../../services/api";
import { Toaster, toast } from "react-hot-toast";
import { FormDataProps, ValidationSchemaForm, VehicleListProps } from "../models/List";
import { columns } from "./components/Columns";
import { LoadingData } from "../../clients/list/components/LoadingData";
import { DeleteDialog } from "./components/DeleteDialog";
import { EditDialog } from "./components/EditDialog";

const VehicleList: React.FC<VehicleListProps> = ({ items, loading, refresh, setRefresh }) => {
  const { resetField } = useForm<FormDataProps>({
    resolver: yupResolver(ValidationSchemaForm),
  });

  const [vehicleList, setVehicleList] = useState<Vehicle[]>(items);
  const [loadingData, setLoadingData] = useState<boolean>(
    loading !== undefined ? loading : true
  );
  const [openEdit, setOpenEdit] = useState(false);
  const [vehicle, setVehicle] = useState<Vehicle>();
  const [vehicleToBeDeleted, setVehicleToBeDeleted] = useState<Vehicle>();
  const [openDelete, setOpenDelete] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClickOpenEdit = (vehicleToBeEdited: Vehicle) => {
    setVehicle(vehicleToBeEdited);
    setOpenEdit(true);
  };

  const handleClickExcluir = async (vehicleToBeDeleted: Vehicle) => {
    setVehicleToBeDeleted(vehicleToBeDeleted);
    setOpenDelete(true);
  };

  function resetAndCloseFields() {
    setOpenEdit(false);
    setOpenDelete(false)
    resetField("anoFabricacao");
    resetField("marcaModelo");
    resetField("kmAtual");
    setErrorMessage("");
  }

  const handleFormSubmit = async (formData: any) => {
    try {
      const updatedVehicle = {
        id: vehicle.id,
        marcaModelo: formData.marcaModelo,
        anoFabricacao: formData.anoFabricacao,
        kmAtual: formData.kmAtual,
      };

      await api.put(`Veiculo/${vehicle.id}`, updatedVehicle);
      resetAndCloseFields();
      setRefresh(!refresh)
      toast.success("Editado com sucesso !")
    } catch (error) {
      setErrorMessage(error.message);
      toast.error("Oops, algum problema aconteceu !")
    }
  };

  const handleDeleteVehicle = async () => {
    const configAxiosDelete = {
      data: {
        id: Number(vehicleToBeDeleted.id)
      }
    }
    try {
      await api.delete(`Veiculo/${vehicleToBeDeleted.id}`, configAxiosDelete);
      setOpenDelete(false)
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
              style={{ marginRight: 10 }}
              data-testid="edit-btn"
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
    setVehicleList(items);
  }, [items]);

  return (
    <Card>
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />

      <CardHeader title="Lista de Veículos" />
      {loadingData ? (
        <LoadingData />
      ) : (
        <>
          <DataGrid
            autoHeight
            rows={vehicleList}
            columns={newColumns}
            pageSize={7}
            disableSelectionOnClick
            rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            loading={loading}
          />

          <DeleteDialog 
            errorMessage={errorMessage}
            handleDeleteVehicle={handleDeleteVehicle}
            openDelete={openDelete}
            resetAndCloseFields={resetAndCloseFields}
            vehicleToBeDeleted={vehicleToBeDeleted}
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

export default VehicleList;
