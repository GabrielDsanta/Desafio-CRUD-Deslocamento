import { TabContext, TabList } from "@mui/lab"
import TabPanel from '@mui/lab/TabPanel'
import { Grid, Tab, Typography } from "@mui/material"
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from "react"
import TabGrafica from "./TabGrafica"
import { Icon } from "@iconify/react"

const FormCreateClient = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [activeTab, setActiveTab] = useState('Condutor')

    return (
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <TabContext value={activeTab}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <TabList
                    variant='scrollable'
                    scrollButtons='auto'
                    aria-label='customized tabs example'
                  >
                    <Tab
                      value='Condutor'
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center', ...({ '& svg': { mr: 2 } }) }}>
                          <Icon icon='mdi:user' />
                          Cliente
                        </Box>
                      }
                    />
                  </TabList>
                </Grid>
                <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
                  {isLoading ? (
                    <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                      <CircularProgress sx={{ mb: 4 }} />
                      <Typography>Carregando...</Typography>
                    </Box>
                  ) : (
                    <TabPanel sx={{ p: 0 }} value={activeTab}>
                      <TabGrafica />
                    </TabPanel>
                  )}
                </Grid>
              </Grid>
            </TabContext>
          </Grid>
        </Grid>
      )
}

export default FormCreateClient