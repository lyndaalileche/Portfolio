import React, { useState, useEffect } from 'react';
import getSkills from "../../libs/getSkills";
import Image from "next/image";

interface Skill {
  id: number;
  title: string | null;
  imageUrl: string | null;
}

export default async function Skills() {
  const skills = await getSkills();

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-purple-700 shadow-md py-2 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600">Mes Compétences</h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-white rounded p-4 shadow hover:shadow-lg transition duration-300 ease-in-out flex flex-col justify-center items-center" style={{ background: 'linear-gradient(135deg, #f6ad55 0%, #f9edc7 100%)' }}>
            <p className="text-lg font-semibold mb-2">{skill.title}</p>
            {skill.imageUrl && (
              <div className="w-24 h-24 rounded-md overflow-hidden flex justify-center items-center">
                <Image src={skill.imageUrl} alt="image" width={100} height={100} layout="intrinsic" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
