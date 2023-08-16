export interface IModalProps {
  className?: string | undefined
  open?: boolean
  onClose?: () => void
  children: React.ReactNode
  title?: string
  closeOnBackdrop?: boolean
  modalActions?: React.ReactNode[]
}
