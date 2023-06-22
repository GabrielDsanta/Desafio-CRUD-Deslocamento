import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { TextBox } from "../../../../components/TextBox";
import { Transition } from "../../../../components/Transition";
import { Client } from "../../../../pages/clients/list";

interface ReadDialogProps {
  showDetails: boolean;
  resetAndCloseFields: () => void;
  details: Client;
}

export function ReadDialog({ resetAndCloseFields, showDetails, details }: ReadDialogProps){
    return(
        <Dialog
            open={showDetails}
            keepMounted
            onClose={resetAndCloseFields}
            TransitionComponent={Transition}
            fullWidth
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle align="center" id="alert-dialog-slide-title">
              Dados Do Cliente
            </DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <TextBox title="Nome" detail={details?.nome} />
                <TextBox title="Bairro" detail={details?.bairro} />
                <TextBox title="Cidade" detail={details?.cidade} />
                <TextBox title="UF" detail={details?.uf} />
                <TextBox title="ID" detail={String(details?.id)} />
                <TextBox title="Logradouro" detail={details?.logradouro} />
                <TextBox title="Número" detail={details?.numero} />
                <TextBox title="Número Do Documento" detail={details?.numeroDocumento} />
                <TextBox title="Tipo Do Documento" detail={details?.tipoDocumento} />
              </DialogContentText>
            </DialogContent>
          </Dialog>
    )
}