export interface Template {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  badge?: "NEW" | "POPULAR" | null;
  headline: string;
  description: string;
  quote: string;
  thumbnailUrl: string;
  demoUrl: string;
  purchaseUrl?: string;
  createdAt: string;
}
