import getContact from "@/libs/getContact";

export async function GET() {
  const contacts = await getContact();
  return Response.json(contacts);
}