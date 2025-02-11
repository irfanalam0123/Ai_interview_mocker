
import {
  pgTable,
  text,
  integer,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";


export const MockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("jsonMockresp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createdAt: varchar("createdAt").notNull(),
  createdBy: varchar("createdBy").notNull(),

  mockId: varchar("mockId").notNull(),
});

// export const UserAnswer = pgTable('userAnswer',{
//   id:serial('id').primaryKey(),
//   mockId:varchar('mockId').notNull(),
//   question:varchar('question').notNull(),
//   correctAns:text('correctAns'),
//   userAns:text('userAns'),
//   feedback:text('feedback'),
//   rating:varchar('rating'),
//   userEmail:varchar('userEmail'),
//   createdAt:varchar('createdAt'),


// })


export const UserAnswer = pgTable("userAnswer", {
  id: serial("id").primaryKey(),
  mockId: varchar("mockId").notNull(),
  question: text("question").notNull(),
  correctAns: text("correctAns"),
  userAns: text("userAns"),
  feedback: text("feedback"),
  rating: integer("rating"),
  userEmail: varchar("userEmail"),
  createdAt: timestamp("createdAt").defaultNow(),
});