import { Friend } from "../helpers/dbconnect.ts";

// This is the function that adds a friend to the database.
export const addFriend = async (context: any) => {
  try {
    // acessing data from the request body
    let body: any = await context.request.body();
    const { name, pno, email } = await body.value;

    // inserting into the db
    console.log(name, pno, email);
    const id = await Friend.insertOne({
      name,
      pno,
      email,
    });

    // sending the response
    context.response.body = id;
    context.response.status = 201;
  } 
  // when the insertion fails
  catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};
