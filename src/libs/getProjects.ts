// getProjects.js
import prisma from "@/libs/prismadb";

export default async function getProjects() {
  try {
    const allProjects = await prisma.project.findMany();
    return allProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}





