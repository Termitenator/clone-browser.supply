import { db } from "@/lib/firebase";
import { Customer } from "@/types/customer";

export async function getCustomers(options?: {
  limit?: number;
  templateId?: string;
}): Promise<Customer[]> {
  let query: FirebaseFirestore.Query = db
    .collection("customers")
    .orderBy("createdAt", "desc");

  if (options?.templateId) {
    query = query.where("templateUsed.templateId", "==", options.templateId);
  }
  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const snapshot = await query.get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Customer, "id">),
  }));
}

export async function getCustomerById(id: string): Promise<Customer | null> {
  const doc = await db.collection("customers").doc(id).get();
  if (!doc.exists) return null;

  return {
    id: doc.id,
    ...(doc.data() as Omit<Customer, "id">),
  };
}
