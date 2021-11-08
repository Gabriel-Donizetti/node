-- CreateTable
CREATE TABLE "Shipping" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "product_amout" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "amout" INTEGER NOT NULL,
    "product_category" TEXT NOT NULL,
    "shipping_id" TEXT,
    CONSTRAINT "product_product_category_fkey" FOREIGN KEY ("product_category") REFERENCES "category" ("category") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "product_shipping_id_fkey" FOREIGN KEY ("shipping_id") REFERENCES "Shipping" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_product" ("amout", "id", "name", "price", "product_category") SELECT "amout", "id", "name", "price", "product_category" FROM "product";
DROP TABLE "product";
ALTER TABLE "new_product" RENAME TO "product";
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");
CREATE UNIQUE INDEX "product_shipping_id_key" ON "product"("shipping_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
