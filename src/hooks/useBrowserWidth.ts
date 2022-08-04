import React, { useState } from "react"


const useBrowserWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)

    const onResize = () => {
        setWidth(window.innerWidth)
    }

    React.useEffect(() => {
        window.addEventListener("resize", onResize)

        return () => window.removeEventListener("resize", onResize)
    })

    return width
}

export default useBrowserWidth