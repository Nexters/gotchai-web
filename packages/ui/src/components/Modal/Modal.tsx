import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { overlay, content, hidden } from "./style.css";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return createPortal(
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Overlay className={overlay} />
      <Dialog.Content className={content}>
        <Dialog.Title className={hidden}>DeleteWarning</Dialog.Title>
        <Dialog.Description className={hidden}>
          DeleteWarning
        </Dialog.Description>
        {children}
      </Dialog.Content>
    </Dialog.Root>
  , document.body.querySelector('#portal') ?? document.body);
};
