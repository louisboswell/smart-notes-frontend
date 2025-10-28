import { createFileRoute } from "@tanstack/react-router";
import { OTPForm } from "@/components/otp-form";

export const Route = createFileRoute("/auth/otp")({
	component: RouteComponent,
});

function RouteComponent() {
	return <OTPForm />;
}
