import {FC, ReactNode} from "react";
import styled from "styled-components";


type TModal = {
    title: string
    onClose: () => void
    visible: boolean
    children?: ReactNode
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  margin: 0;
`;

const ModalCloseIcon = styled.span`
  cursor: pointer;
`;

export const Modal: FC<TModal> = ({title, onClose, visible, children}) => {


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

}
