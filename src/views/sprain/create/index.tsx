import { TabContext, TabList } from "@mui/lab"
import TabPanel from '@mui/lab/TabPanel'
import { Grid, Tab, Typography } from "@mui/material"
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from "react"
import TabGrafica from "./TabGrafica"
import { Icon } from "@iconify/react"

const FormCreateSprain = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [activeTab, setActiveTab] = useState('Deslocamento')

    const handleChange = (event, newValue) => {}

    return (
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <TabContext value={activeTab}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <TabList
                    variant='scrollable'
                    scrollButtons='auto'
                    onChange={handleChange}
                    aria-label='customized tabs example'
                  >
                    <Tab
                      value='Deslocamento'
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center', ...({ '& svg': { mr: 2 } }) }}>
                          <Icon icon='mdi:car-arrow-right' />
                          Deslocamento
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

export default FormCreateSprain