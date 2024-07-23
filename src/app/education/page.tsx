import getEducation from "../../libs/getEducation";

export default async function Education() {
  const allEducation = await getEducation();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-8">
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-purple-700">
          Éducation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allEducation.map((education) => (
            <div
              key={education.id}
              className="bg-gray-200 rounded p-6 hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              <p className="text-lg font-semibold mb-2">{education.Title}</p>
              <p className="text-gray-700">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
