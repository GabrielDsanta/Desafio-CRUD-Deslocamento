import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DriverList from "../../views/driver/list";

describe('List Clients Component', () => {
    it('should be possible to render the table', () => {
        const { getByText } = render(<DriverList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            expect(getByText('NOME')).toBeInTheDocument()
            expect(getByText('NÚMERO HABILITAÇÃO')).toBeInTheDocument()
            expect(getByText('CATEGORIA')).toBeInTheDocument()
            expect(getByText('VENCIMENTO')).toBeInTheDocument()
            expect(getByText('AÇÕES')).toBeInTheDocument()
        }, 1000);
    })

    it('should be abble to edit a Driver', () => {
        const { getByTestId, getByText } = render(<DriverList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            const editButton = getByTestId("edit-btn")

            userEvent.click(editButton)

            expect(getByText('Editar Condutor')).toBeInTheDocument()
        }, 3000);
    })

    it('should be abble to delete a Driver', () => {
        const { getByTestId, getByText } = render(<DriverList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            const editButton = getByTestId("delete-btn")

            userEvent.click(editButton)

            expect(getByText('DESEJA EXCLUIR ESTE CONDUTOR ?')).toBeInTheDocument()
        }, 1000);
    })
})