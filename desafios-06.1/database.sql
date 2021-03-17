CREATE TABLE "custumers" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "email" text NOT NULL,
  "phone" text NOT NULL,
  "age" timestamp NOT NULL
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "order_id" int,
  "addresses_id" int UNIQUE,
  "name" text NOT NULL,
  "cnpj" text NOT NULL
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "street" text NOT NULL,
  "number" text NOT NULL,
  "district" text NOT NULL,
  "city" text NOT NULL,
  "cep" text NOT NULL
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "models_id" int,
  "color" text NOT NULL,
  "license" text NOT NULL,
  "number_seats" integer NOT NULL,
  "ar" integer NOT NULL DEFAULT 0,
  "hydraulic_steering" integer NOT NULL DEFAULT 0
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "brand" text NOT NULL,
  "model" text NOT NULL,
  "power" int NOT NULL
);

CREATE TABLE "orders" (
  "number" SERIAL PRIMARY KEY,
  "models_id" int,
  "cars_id" int,
  "custumers_id" int,
  "agencies_id" int,
  "created_at" timestamp DEFAULT 'now()'
);

CREATE TABLE "orders_cars" (
  "car_id" int,
  "order_number" int
);

ALTER TABLE "addresses" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("addresses_id");

ALTER TABLE "cars" ADD FOREIGN KEY ("models_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("custumers_id") REFERENCES "custumers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agencies_id") REFERENCES "agencies" ("id");

ALTER TABLE "orders_cars" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");

ALTER TABLE "orders_cars" ADD FOREIGN KEY ("order_number") REFERENCES "orders" ("number");
