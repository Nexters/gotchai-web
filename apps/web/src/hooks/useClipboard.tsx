interface UseClipboardProps {
  onSuccess?: () => void;
  onError?: () => void;
}

export const useClipboard = ({
  onSuccess,
  onError,
}: UseClipboardProps = {}) => {
  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(onSuccess).catch(onError);
  };

  return { copy };
};
