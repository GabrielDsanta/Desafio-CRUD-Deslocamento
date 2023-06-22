import { Grid } from "@mui/material"
import FormCreateVehicle from "../../../views/vehicle/create"

const CreateVehicle = () => {
    return (
        <Grid container spacing={6}>
          <Grid item xs={12} md={12}>
            <FormCreateVehicle />
          </Grid>
        </Grid>
      )
    }
    
export default CreateVehicle