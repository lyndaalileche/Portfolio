import getProjects from "../../libs/getProjects";
export default async function Projet() {
  const allContact = await getProjects();
  return (
    <div>
      <div className=" flex-wrap justify-center flex gap-10    ">
        {allContact.map((value, index) => (
          <div key={index}>
            <a
              href={value.webUrl ?? undefined}
              target="_blank"
              className="text-2xl font-bold text-center my-8 hover:bg-black hover:text-gray-50 bg-purple-400 rounded-md"
            >
              <span>{value.Title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
