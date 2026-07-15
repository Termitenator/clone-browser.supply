import { getTemplates } from "@/lib/queries/template";
import AnimatedStepOneBg from "./AnimatedStepOneBg";

interface AnimatedStepOneBgServerProps {
  overscanX?: string;
  overscanWidth?: string;
  spread?: boolean;
  limit?: number;
}

export default async function AnimatedStepOneBgServer({
  overscanX,
  overscanWidth,
  spread,
  limit = 6,
}: AnimatedStepOneBgServerProps) {
  const templates = await getTemplates({ limit });
  const images = templates.map((t) => t.thumbnailUrl);

  if (images.length === 0) return null;

  return (
    <AnimatedStepOneBg
      images={images}
      overscanX={overscanX}
      overscanWidth={overscanWidth}
      spread={spread}
    />
  );
}
