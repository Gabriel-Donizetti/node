-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" INTEGER
);

-- CreateTable
CREATE TABLE "Votes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_filme" INTEGER NOT NULL,
    "id_diretor" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "Votes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
