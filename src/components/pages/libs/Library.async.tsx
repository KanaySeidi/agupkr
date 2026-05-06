import { lazy } from "react";

export const Library = lazy(() => import("./Library"));
export const LibraryJournals = lazy(() => import("./LibraryJournals"));
export const LibraryBooks = lazy(() => import("./LibraryBooks"));
export const LibraryNewArrivals = lazy(() => import("./LibraryNewArrivals"));
export const LibrarySAMDepartment = lazy(
  () => import("./LibrarySAMDepartment")
);
export const LibraryNIR = lazy(() => import("./LibraryNIR"));
export const LibraryResearchChairs = lazy(
  () => import("./LibraryResearchChairs")
);
