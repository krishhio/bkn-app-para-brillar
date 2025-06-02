CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE "User" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  uid_firebase TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user',
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Subscription" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  userId UUID NOT NULL,
  plan TEXT NOT NULL,
  status TEXT NOT NULL,
  startDate TIMESTAMP NOT NULL,
  endDate TIMESTAMP NOT NULL,
  CONSTRAINT fk_user_subscription FOREIGN KEY (userId) REFERENCES "User"(id) ON DELETE CASCADE
);

CREATE TABLE "Payment" (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  userId UUID NOT NULL,
  provider TEXT NOT NULL,
  amount NUMERIC(10, 2) NOT NULL,
  status TEXT NOT NULL,
  paymentDate TIMESTAMP NOT NULL,
  CONSTRAINT fk_user_payment FOREIGN KEY (userId) REFERENCES "User"(id) ON DELETE CASCADE
);
