import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import DriverList from '../../../views/driver/list';

export interface DriverProps {
  id: string;
  nome: string;
  catergoriaHabilitacao: string;
  numeroHabilitacao: string;
  vencimentoHabilitacao: string;
}

const EstoqueList = () => {
  const [driverList, setDriverList] = useState<DriverProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false)

  useEffect(() =>  {
    fetchEstoque()
  }, [refresh])
  
  async function fetchEstoque() {
    try {
      const response  = await api.get('Condutor')
      setDriverList(response.data);
      setLoading(false);
    } catch(err) { 
      setLoading(false);
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <DriverList refresh={refresh} setRefresh={setRefresh} items={driverList} loading={loading} />
      </Grid>
    </Grid>
  )
}

export default EstoqueList