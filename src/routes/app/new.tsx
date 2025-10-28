import { CreateNote } from "@/components/notepad/create-note";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/new")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col flex-1 justify-end h-full items-center md:mb-8 w-full">
			<CreateNote />
		</div>
	);
}
