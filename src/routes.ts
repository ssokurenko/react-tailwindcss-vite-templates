import type { ComponentType } from "react";
import type { RouteObject } from "react-router";

interface PageModule {
  default: ComponentType;
}

// File based routing: every `src/pages/**/*.tsx` file becomes a route.
//   pages/index.tsx        -> /
//   pages/forms.tsx        -> /forms
//   pages/blog/index.tsx   -> /blog
//   pages/blog/[slug].tsx  -> /blog/:slug
//   pages/[...rest].tsx    -> /*
const pages = import.meta.glob<PageModule>("./pages/**/*.tsx");

const toRoutePath = (file: string) =>
  file
    .replace(/^\.\/pages\//, "")
    .replace(/\.tsx$/, "")
    .replace(/(^|\/)index$/, "")
    .replace(/\[\.\.\.[^\]]+\]/g, "*")
    .replace(/\[([^\]]+)\]/g, ":$1");

// Static segments win over dynamic ones, and the splat route matches last.
const specificity = (path: string) =>
  path.includes("*") ? 2 : path.includes(":") ? 1 : 0;

export const routes: RouteObject[] = Object.entries(pages)
  .map(([file, loadModule]) => {
    const path = toRoutePath(file);
    const lazy = async () => ({ Component: (await loadModule()).default });
    return path === "" ? { index: true as const, lazy } : { path, lazy };
  })
  .sort((a, b) => {
    const pathA = ("path" in a ? a.path : "") ?? "";
    const pathB = ("path" in b ? b.path : "") ?? "";
    return specificity(pathA) - specificity(pathB) || pathA.localeCompare(pathB);
  });
