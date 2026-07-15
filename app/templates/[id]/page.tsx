import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTemplateById, getTemplates } from "@/lib/queries/template";
import TemplateDetailHero from "@/features/detail-template/DetailTemplateSection";
import BundleSection from "@/features/bundle/BundleSection";
import BundleFeaturesSection from "@/features/bundle/BundleFeatureSection";
import TestimonialSection from "@/features/testimonials/TestimonialSection";

interface TemplateDetailPageProps {
  params: Promise<{ id: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const templates = await getTemplates();
  return templates.map((template) => ({ id: template.id }));
}

export async function generateMetadata({
  params,
}: TemplateDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const template = await getTemplateById(id);
  if (!template) return {};

  return {
    title: `${template.name} — Framer Template`,
    description: template.description,
    openGraph: {
      images: [template.thumbnailUrl],
    },
  };
}

export default async function TemplateDetailPage({
  params,
}: TemplateDetailPageProps) {
  const { id } = await params;
  const template = await getTemplateById(id);

  if (!template) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <TemplateDetailHero template={template} />
      <BundleSection />
      <BundleFeaturesSection />
      <TestimonialSection />
    </main>
  );
}
