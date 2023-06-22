import { Vehicle } from "../../../pages/vehicle/list";
import * as yup from "yup";

export interface VehicleListProps {
    items: Vehicle[];
    loading?: boolean;
    refresh: boolean;
    setRefresh?: (bool: boolean) => void;
}

export type FormDataProps = {
    marcaModelo: string;
    anoFabricacao: string;
    kmAtual: string;
};

export const ValidationSchemaForm = yup.object({
    marcaModelo: yup.string().required("Informe a Marca ou Modelo do Veículo"),
    anoFabricacao: yup.string().required("Informe o Ano De Fabricação do Veículo"),
    kmAtual: yup.string().required("Informe o Km Atual do Veículo"),
});