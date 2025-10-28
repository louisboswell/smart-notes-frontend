import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeProvider";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<SidebarMenuItem>
			<SidebarMenuButton
				size="sm"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			>
				{theme === "dark" ? <Moon /> : <Sun />}
				<span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
}
