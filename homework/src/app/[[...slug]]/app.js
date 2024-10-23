"use client";
import dynamic from "next/dynamic";

const AppComponent = dynamic(() => import("../../template/components/App"), {
	ssr: false,
});

export const App = () => {
	return <AppComponent />;
};
