import { Sprain } from "../../../pages/sprain/list";
import * as yup from "yup";

export interface SprainListProps {
    items: Sprain[];
    loading?: boolean;
    refresh: boolean;
    setRefresh?: (bool: boolean) => void;
}

export type FormDataProps = {
    kmFinal: number;
    fimDeslocamento: string;
    observacao: string;
};

export const ValidationSchemaForm = yup.object({
    kmFinal: yup.number().required("Informe o Km Final Do Deslocamento"),
    fimDeslocamento: yup.string().required("Informe a data do Fim Do Deslocamento"),
    observacao: yup.string().required("Informe uma Observação")
});