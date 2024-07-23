-- CreateTable
CREATE TABLE "Contact" (
    "id" SMALLSERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Contact" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education_Exp" (
    "id" SMALLSERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "description" TEXT,
    "Date De Debut" DATE,
    "Date De Fin" DATE,

    CONSTRAINT "Education/Exp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SMALLSERIAL NOT NULL,
    "Title" TEXT,
    "Description" TEXT,
    "webUrl" TEXT,
    "gitUrl" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectSkills" (
    "id" SMALLSERIAL NOT NULL,
    "skills_id" SMALLINT NOT NULL,
    "project_id" SMALLINT NOT NULL,

    CONSTRAINT "ProjectSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" SMALLSERIAL NOT NULL,
    "title" TEXT,
    "imageUrl" TEXT,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectSkills" ADD CONSTRAINT "public_ProjectSkills_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProjectSkills" ADD CONSTRAINT "public_ProjectSkills_skills_id_fkey" FOREIGN KEY ("skills_id") REFERENCES "Skills"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

