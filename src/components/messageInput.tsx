import { KnownIconType } from "@charcoal-ui/icons";
import { ButtonHTMLAttributes } from "react";

// IconButton component
type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconName: keyof KnownIconType;
  isProcessing: boolean;
  label?: string;
};

const IconButton = ({
  iconName,
  isProcessing,
  label,
  ...rest
}: IconButtonProps) => {
  return (
    <button
      {...rest}
      className={`bg-[#000000] text-[#ffffff] rounded-full text-sm p-3 text-center inline-flex items-center
        ${rest.className}
      `}
    >
      {isProcessing ? (
        <pixiv-icon name={"24/Dot"} scale="1"></pixiv-icon>
      ) : (
        <pixiv-icon name={iconName} scale="1"></pixiv-icon>
      )}
      {label && <div className="mx-4 font-M_PLUS_2 font-bold">{label}</div>}
    </button>
  );
};

// MessageInput component
type MessageInputProps = {
  userMessage: string;
  isMicRecording: boolean;
  isChatProcessing: boolean;
  onChangeUserMessage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyDownUserMessage: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClickSendButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickMicButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const MessageInput = ({
  userMessage,
  isMicRecording,
  isChatProcessing,
  onChangeUserMessage,
  onKeyDownUserMessage,
  onClickMicButton,
  onClickSendButton,
}: MessageInputProps) => {
  return (
    <div className="fixed bottom-0 w-full z-20 bg-[#000000] border-t border-[#333333] p-4">
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex items-center gap-3 bg-[#000000] rounded-full border border-[#333333]">
          <IconButton
            iconName="24/Microphone"
            className={`${isMicRecording ? 'bg-[#1d9bf0]' : 'bg-transparent hover:bg-[#1a1a1a]'} border-none p-4`}
            isProcessing={isMicRecording}
            disabled={isChatProcessing}
            onClick={onClickMicButton}
          />
          <input
            type="text"
            placeholder="What's up?"
            onChange={onChangeUserMessage}
            onKeyDown={onKeyDownUserMessage}
            disabled={isChatProcessing}
            className="flex-1 bg-transparent text-[#ffffff] placeholder-[#71767b] text-md outline-none border-none p-2"
            value={userMessage}
          />
          <IconButton
            iconName="24/Send"
            className={`${userMessage ? 'bg-[#1d9bf0] hover:bg-[#1a8cd8]' : ''} border-none p-4`}
            isProcessing={isChatProcessing}
            disabled={isChatProcessing || !userMessage}
            onClick={onClickSendButton}
          />
        </div>
      </div>
    </div>
  )
};