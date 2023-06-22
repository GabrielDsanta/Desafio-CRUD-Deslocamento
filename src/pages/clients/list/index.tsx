import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import ClientList from '../../../views/clients/list';

export interface Client {
  bairro: string;
  cidade: string;
  id: number;
  logradouro: string;
  nome: string;
  numero: string;
  numeroDocumento: string;
  tipoDocumento: string;
  uf: string;
}

const ClientTable = () => {
  const [clientList, setClientList] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false)

  useEffect(() =>  {
    fetchEstoque()
  }, [refresh])
  
  async function fetchEstoque() {
    try {
      const response  = await api.get('Cliente')
      setClientList(response.data);
      setLoading(false);

    } catch(err) { 
      setLoading(false);
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <ClientList refresh={refresh} setRefresh={setRefresh} items={clientList} loading={loading} />
      </Grid>
    </Grid>
  )
}

export default ClientTable