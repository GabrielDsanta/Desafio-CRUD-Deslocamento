import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VehicleList from "../../views/vehicle/list";

describe('List Clients Component', () => {
    it('should be possible to render the table', () => {
        const { getByText } = render(<VehicleList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            expect(getByText('PLACA')).toBeInTheDocument()
            expect(getByText('MODELO')).toBeInTheDocument()
            expect(getByText('ID')).toBeInTheDocument()
            expect(getByText('ANO')).toBeInTheDocument()
            expect(getByText('KM ATUAL')).toBeInTheDocument()
            expect(getByText('AÇÕES')).toBeInTheDocument()
        }, 1000);
    })

    it('should be abble to edit a Vehicle', () => {
        const { getByTestId, getByText } = render(<VehicleList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            const editButton = getByTestId("edit-btn")

            userEvent.click(editButton)

            expect(getByText('Editar Veículo')).toBeInTheDocument()
        }, 3000);
    })

    it('should be abble to delete a Vehicle', () => {
        const { getByTestId, getByText } = render(<VehicleList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            const editButton = getByTestId("delete-btn")

            userEvent.click(editButton)

            expect(getByText('DESEJA EXCLUIR ESTE VEÍCULO ?')).toBeInTheDocument()
        }, 1000);
    })
})