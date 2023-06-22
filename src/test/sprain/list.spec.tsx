import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SprainList from "../../views/sprain/list";

describe('List Clients Component', () => {
    it('should be possible to render the table', () => {
        const { getByText } = render(<SprainList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            expect(getByText('MOTIVO')).toBeInTheDocument()
            expect(getByText('OBSERVAÇÃO')).toBeInTheDocument()
            expect(getByText('ID DO CLIENTE')).toBeInTheDocument()
            expect(getByText('CHECKLIST')).toBeInTheDocument()
            expect(getByText('ID DO CONDUTOR')).toBeInTheDocument()
            expect(getByText('AÇÕES')).toBeInTheDocument()
        }, 1000);
    })

    it('should be abble to edit a Sprain', () => {
        const { getByTestId, getByText } = render(<SprainList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            const editButton = getByTestId("edit-btn")

            userEvent.click(editButton)

            expect(getByText('Editar Deslocamento')).toBeInTheDocument()
        }, 3000);
    })

    it('should be abble to delete a Sprain', () => {
        const { getByTestId, getByText } = render(<SprainList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            const editButton = getByTestId("delete-btn")

            userEvent.click(editButton)

            expect(getByText('DESEJA EXCLUIR ESTE DESLOCAMENTO ?')).toBeInTheDocument()
        }, 1000);
    })

    it('must be possible to show the data of a Sprain', () => {
        const { getByTestId, getByText } = render(<SprainList loading={false} refresh={false} items={[]} />)

        setTimeout(() => {
            const editButton = getByTestId("open-btn")

            userEvent.click(editButton)

            expect(getByText('Dados Do Deslocamentos')).toBeInTheDocument()
        }, 1000);
    })
})