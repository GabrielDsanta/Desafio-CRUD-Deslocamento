import { Grid } from "@mui/material"
import FormCreateDriver from "../../../views/driver/create"

const CreateDriver = () => {
    return (
        <Grid container spacing={6}>
          <Grid item xs={12} md={12}>
            <FormCreateDriver />
          </Grid>
        </Grid>
      )
    }
    
export default CreateDriver