import { Client } from "../../../pages/clients/list";
import * as yup from "yup";

export interface ClientListProps {
    items: Client[];
    loading?: boolean;
    setRefresh?: (bool: boolean) => void;
    refresh: boolean;
}

export type FormDataProps = {
    bairro: string;
    cidade: string;
    logradouro: string;
    nome: string;
    numero: string;
    uf: string;
};

export const ValidationSchemaForm = yup.object({
    nome: yup.string().required("Informe o Nome Do Cliente"),
    cidade: yup.string().required("Informe a Cidade Do Cliente"),
    bairro: yup.string().required("Informe o Bairro Do Cliente"),
    logradouro: yup.string().required("Informe o Logradouro"),
    numero: yup.string().required("Informe o Número"),
    uf: yup.string().required("Informe o UF"),
  });