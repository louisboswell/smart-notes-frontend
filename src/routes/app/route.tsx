import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Route = createFileRoute("/app")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<div className="bg-background flex-1 flex min-h-svh flex-col items-center gap-6 p-6 md:p-10">
				<Outlet />
			</div>
		</SidebarProvider>
	);
}
