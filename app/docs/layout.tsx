import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { baseOptions } from "../layout.config";

export const metadata: Metadata = {
  title: {
    template: "%s | snapui - Free UI Components to build beautiful websites",
    default: "snapui - Free UI Components to build beautiful websites",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        defaultOpenLevel: 1,
      }}
    >
      {children}
    </DocsLayout>
  );
}
