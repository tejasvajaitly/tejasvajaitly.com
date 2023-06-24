"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const [isDarkMode, setDarkMode] = useState(false);
	const { resolvedTheme, systemTheme, theme, setTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
		if (theme === "system") {
			if (resolvedTheme === "dark") {
				setTheme("dark");
				setDarkMode(false);
			} else if (resolvedTheme === "light") {
				setTheme("light");
				setDarkMode(true);
			}
		} else if (theme === "dark") {
			setDarkMode(false);
		} else if (theme === "light") {
			setDarkMode(true);
		}
	}, [resolvedTheme, systemTheme, theme]);

	if (!mounted) {
		return null;
	}
	const toggleDarkMode = (checked: boolean) => {
		setDarkMode(checked);
		if (theme === "dark") {
			setTheme("light");
		} else if (theme === "light") {
			setTheme("dark");
		}
	};

	return (
		<span title={`Activate ${theme === "dark" ? `Light` : `Dark`} Mode`}>
			<DarkModeSwitch
				checked={isDarkMode}
				onChange={toggleDarkMode}
				size={40}
				moonColor='#7377b3'
				sunColor='#FD7F20'
			/>
		</span>
	);
};

export default ThemeSwitch;
