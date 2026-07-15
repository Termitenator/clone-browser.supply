export interface Customer {
  id: string;
  name: string;
  avatarUrl: string;
  testimonial: string;
  rating: number;

  templateUsed: {
    templateId: string;
    templateName: string;
    thumbnailUrl: string;
  };

  liveSiteUrl?: string;
  liveSiteScreenshotUrl?: string;
  liveSiteVideoUrl?: string;

  createdAt: string;
}
