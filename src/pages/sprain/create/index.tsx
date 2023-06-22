import { Grid } from "@mui/material"
import FormCreateSprain from "../../../views/sprain/create"

const CreateSprain = () => {
    return (
        <Grid container spacing={6}>
          <Grid item xs={12} md={12}>
            <FormCreateSprain />
          </Grid>
        </Grid>
      )
    }
    
export default CreateSprain