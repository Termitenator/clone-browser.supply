import { db } from "@/lib/firebase";
import { Template } from "@/types/template";

export async function getTemplates(options?: {
  limit?: number;
}): Promise<Template[]> {
  let query: FirebaseFirestore.Query = db
    .collection("templates")
    .orderBy("createdAt", "desc");

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const snapshot = await query.get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Template, "id">),
  }));
}

export async function getTemplateById(id: string): Promise<Template | null> {
  const doc = await db.collection("templates").doc(id).get();
  if (!doc.exists) return null;

  return {
    id: doc.id,
    ...(doc.data() as Omit<Template, "id">),
  };
}
