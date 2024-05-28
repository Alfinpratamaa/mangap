"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Toggle } from "@/components/ui/toggle"

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [enabled, setEnabled] = React.useState(resolvedTheme === "dark")

    const toggleTheme = React.useCallback(() => {
        setEnabled((prevEnabled) => {
            const newTheme = prevEnabled ? "light" : "dark"
            setTheme(newTheme)
            return !prevEnabled
        })
    }, [setTheme])

    return (
        <Toggle
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="bg-transparent  relative w-12 h-6 rounded-full"
        >
            {
                enabled ? <SunIcon
                    className="absolute  text-yellow-500 "
                    aria-label="Light mode"
                /> :
                    <MoonIcon
                        className="absolute  text-gray-400 dark:text-gray-200 "
                        aria-label="Dark mode"
                    />
            }
        </Toggle>
    )
}