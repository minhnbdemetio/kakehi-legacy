import React from "react";
import { FAQBanner } from "@/app/components/FAQBanner";
import { FAQContent } from "@/app/components/FAQContent";
import { getFAQCategories } from "@/app/utils/queries/getFAQCategories";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function FAQPage() {
  const categories = await getFAQCategories();
  return (
    <>
      <FAQBanner />
      <FAQContent categories={categories} />
    </>
  );
}
