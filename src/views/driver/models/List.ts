import { DriverProps } from "../../../pages/driver/list";
import * as yup from "yup";

export interface DriversList {
    items: DriverProps[];
    loading?: boolean;
    setRefresh?: (bool: boolean) => void;
    refresh: boolean;
}

export type FormDataProps = {
    categoriaHabilitacao: string;
    vencimentoHabilitacao: string;
};

export const ValidationSchemaForm = yup.object({
    categoriaHabilitacao: yup.string().required("Informe a Categoria Da Habilitação"),
    vencimentoHabilitacao: yup.string().required("Informe o Vencimento Da Habilitação"),
});