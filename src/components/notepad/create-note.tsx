import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { RefreshCcw, SendHorizonal } from "lucide-react"
import { useState } from "react"

const MAX_LENGTH = 500;

export function CreateNote() {
    const [textInput, setTextInput] = useState<string | undefined>(undefined);

    const resetInput = () => {
        setTextInput(undefined);
    }

    return (
        <div className="grid w-full max-w-lg gap-4 bg-dark">
            <InputGroup>
                <InputGroupTextarea
                    onChange={e => setTextInput(e.target.value)}
                    value={textInput ? textInput : ""}
                    id="textarea-code-32"
                    placeholder="What's on your mind?"
                    className="min-h-[80px]"
                    maxLength={MAX_LENGTH}
                />
                <InputGroupAddon align="block-end" className="border-b">
                    <InputGroupText className=" text-xs font-semibold" >
                        {`${textInput ? MAX_LENGTH - textInput.length === 0 ? "No" : MAX_LENGTH - textInput.length : MAX_LENGTH} characters remaining`}
                    </InputGroupText>
                    <InputGroupButton
                        onClick={resetInput}
                        className="ml-auto" size="icon-xs">
                        <RefreshCcw />
                    </InputGroupButton>
                    <InputGroupButton variant="ghost" size="icon-xs">
                        <SendHorizonal />
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}
