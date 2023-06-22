import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import SprainList from "../../../views/sprain/list";

export interface Sprain {
  checkList: string;
  fimDeslocamento: null;
  id: number;
  idCliente: number;
  idCondutor: number;
  idVeiculo: number;
  inicioDeslocamento: string;
  kmFinal: null;
  kmInicial: number;
  motivo: string;
  observacao: string;
}

const SprainTable = () => {
  const [sprainList, setsprainList] = useState<Sprain[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetchEstoque();
  }, [refresh]);

  async function fetchEstoque() {
    try {
      const response = await api.get("Deslocamento");
      setsprainList(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <SprainList refresh={refresh} setRefresh={setRefresh} items={sprainList} loading={loading} />
      </Grid>
    </Grid>
  );
};

export default SprainTable;
