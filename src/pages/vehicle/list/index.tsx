import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import VehicleList from "../../../views/vehicle/list";

export interface Vehicle {
  anoFabricacao: number;
  id: number;
  kmAtual: number;
  marcaModelo: string;
  placa: string;
}

const VehicleTable = () => {
  const [vehicleList, setVehicleList] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetchEstoque();
  }, [refresh]);

  async function fetchEstoque() {
    try {
      const response = await api.get("Veiculo");
      setVehicleList(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <VehicleList refresh={refresh} setRefresh={setRefresh} items={vehicleList} loading={loading} />
      </Grid>
    </Grid>
  );
};

export default VehicleTable;
