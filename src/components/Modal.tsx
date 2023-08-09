import {FC, memo, ReactNode} from "react";
import {ModalBackdrop, ModalCloseIcon, ModalContent, ModalHeader, ModalTitle} from "../assets/styles/modal.styles";


type TModal = {
    title: string
    onClose: () => void
    visible: boolean
    children?: ReactNode
}

export const Modal: FC<TModal> = memo(({title, onClose, visible, children}) => {


    const handleClose = () => {
        onClose()
    }

    return (
        <ModalBackdrop >
            <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
                <ModalCloseIcon onClick={handleClose}>✕</ModalCloseIcon>
            </ModalHeader>
            {children}
            </ModalContent>
        </ModalBackdrop >
    )

})
