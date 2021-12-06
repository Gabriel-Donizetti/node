-- CreateTable
CREATE TABLE "category" (
    "category" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "amout" INTEGER NOT NULL,
    "product_category" TEXT NOT NULL,
    CONSTRAINT "product_product_category_fkey" FOREIGN KEY ("product_category") REFERENCES "category" ("category") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "category_category_key" ON "category"("category");

-- CreateIndex
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");
