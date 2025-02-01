import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

 export type DisplayContextType = {
    display: string,
    setDisplay: Dispatch<SetStateAction<string>>
}

type childrenProps = {
    children: ReactNode
}

export const DisplayContext = createContext<DisplayContextType>({} as DisplayContextType)

export function DisplayProvider({ children }: childrenProps) {
    const [display,setDisplay] = useState<string>('none')
    return (
        <DisplayContext.Provider value={{display,setDisplay}}>
            {children}
        </DisplayContext.Provider>
    )
}