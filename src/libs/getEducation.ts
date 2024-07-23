import prisma from "@/libs/prismadb";

export default async function getEducation() {
  try {
    const allEducation = await prisma.education_Exp.findMany()
    return allEducation;
  } catch (error) {
    // Gérer l'erreur ici
    console.error("Erreur lors de la récupération de l'éducation :", error);
    return []; // Retourner une liste vide en cas d'erreur
  }
}
