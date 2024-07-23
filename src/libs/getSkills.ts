import prisma from "@/libs/prismadb";

export default async function getSkills() {
  try {
    const skills = await prisma.skills.findMany();
    return skills;
  } catch (error) {
    // Gérer l'erreur ici
    console.error("Erreur lors de la récupération des compétences :", error);
    return []; // Retourner une liste vide en cas d'erreur
  }
}

