// /src/Api/getContact.ts
import prisma from "@/libs/prismadb";

export default async function getContact() {
  try {
    const allContact = await prisma.contact.findMany();
    return allContact;
  } catch (error) {
    console.error("Error fetching contact:", error);
    return [];
  }
}



