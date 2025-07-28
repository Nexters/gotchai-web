import * as Dialog from "@radix-ui/react-dialog";
import { overlay, content } from "./style.css";
import { ReactNode } from "react";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Overlay className={overlay} />
      <Dialog.Content className={content}>
        <Dialog.Title />
        {children}
      </Dialog.Content>
    </Dialog.Root>
  );
};
