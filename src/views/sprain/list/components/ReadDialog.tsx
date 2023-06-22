import Typography from "@mui/material/Typography";
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import { TextBox } from "../../../../components/TextBox";
import { Transition } from "../../../../components/Transition";
import { Sprain } from "../../../../pages/sprain/list";

interface ReadDialogProps {
    showDetails: boolean;
    handleCloseEdit: () => void;
    details: Sprain;
}

export function ReadDialog({ handleCloseEdit, showDetails, details }: ReadDialogProps){
    return (
        <Dialog
            open={showDetails}
            keepMounted
            onClose={handleCloseEdit}
            TransitionComponent={Transition}
            fullWidth
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle align="center" id="alert-dialog-slide-title">
              Dados Do Deslocamentos
            </DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                {details ? (
                  <>
                    <TextBox title="ID" detail={String(details?.id)} />
                    <TextBox title="ID Do Cliente" detail={String(details?.idCliente)} />
                    <TextBox title="ID Do Condutor" detail={String(details?.idCondutor)} />
                    <TextBox title="ID Do Veículo" detail={String(details?.idVeiculo)} />
                    <TextBox title="CheckList" detail={details?.checkList} />
                    <TextBox title="Inicio Do Deslocamento"detail={details?.inicioDeslocamento} />
                    <TextBox title="Fim Do Deslocamento"detail={details?.fimDeslocamento} />
                    <TextBox title="Km Inicial" detail={String(details?.kmInicial)} />
                    <TextBox title="Km Final" detail={details?.kmFinal} />
                    <TextBox title="Motivo" detail={details?.motivo} />
                    <TextBox title="Observação" detail={details?.observacao} />
                  </>
                ) : (
                  <>
                    <CircularProgress sx={{ mb: 4 }} />
                    <Typography>Carregando...</Typography>
                  </>
                )}
              </DialogContentText>
            </DialogContent>
          </Dialog>
    )
}