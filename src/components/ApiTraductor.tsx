import { ReactNode, useEffect, useState } from "react";

export const ApiTraductor = ({ children }: { children: ReactNode }) => {
    const [text, setText] = useState<string>("");

    useEffect(() => {
        if ('Translate' in navigator) {
            console.log("Esta la api dipsonible")
        } console.log("No está eia")
    }, [])

  return <>{children}</>;
};
