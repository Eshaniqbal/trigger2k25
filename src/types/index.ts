export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  imageHint?: string; // For data-ai-hint attribute
  formLink: string;
}
