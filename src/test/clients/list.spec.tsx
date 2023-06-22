import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ClientList from "../../views/clients/list";

describe('List Clients Component', () => {
    it('should be possible to render the table', () => {
        const { getByText } = render(<ClientList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            expect(getByText('NOME')).toBeInTheDocument()
            expect(getByText('NÚMERO DOCUMENTO')).toBeInTheDocument()
            expect(getByText('TIPO DOCUMENTO')).toBeInTheDocument()
            expect(getByText('CIDADE')).toBeInTheDocument()
            expect(getByText('UF')).toBeInTheDocument()
            expect(getByText('AÇÕES')).toBeInTheDocument()
        }, 1000);
    })

    it('should be abble to edit a Client', () => {
        const { getByTestId, getByText } = render(<ClientList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            const editButton = getByTestId("edit-btn")

            userEvent.click(editButton)

            expect(getByText('Editar Cliente')).toBeInTheDocument()
        }, 3000);
    })

    it('should be abble to delete a Client', () => {
        const { getByTestId, getByText } = render(<ClientList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            const editButton = getByTestId("delete-btn")

            userEvent.click(editButton)

            expect(getByText('DESEJA EXCLUIR ESTE CLIENTE ?')).toBeInTheDocument()
        }, 1000);
    })

    it('must be possible to show the data of a Client', () => {
        const { getByTestId, getByText } = render(<ClientList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            const editButton = getByTestId("open-btn")

            userEvent.click(editButton)

            expect(getByText('Dados Do Cliente')).toBeInTheDocument()
        }, 1000);
    })
})