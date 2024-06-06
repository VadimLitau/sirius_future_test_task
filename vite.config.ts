import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		open: "/",
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@import "./src/styles/variables.scss";
				@import "./src/styles/mixins.scss";`,
			},
		},
	},
});
