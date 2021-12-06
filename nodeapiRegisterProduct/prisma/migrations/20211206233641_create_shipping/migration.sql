-- CreateTable
CREATE TABLE "Shipping" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amout" INTEGER NOT NULL,
    "adress" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProductsOnShipping" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amout" INTEGER NOT NULL,
    "product_id" TEXT NOT NULL,
    "shipping_id" TEXT NOT NULL,
    CONSTRAINT "ProductsOnShipping_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductsOnShipping_shipping_id_fkey" FOREIGN KEY ("shipping_id") REFERENCES "Shipping" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
