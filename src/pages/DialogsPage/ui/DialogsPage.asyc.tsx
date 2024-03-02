import { lazy } from "react";

export const DialogsPageAsync = lazy(
 () => import("./DialogsPage")
);
