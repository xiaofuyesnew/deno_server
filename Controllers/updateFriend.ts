import { Friend } from "../helpers/dbconnect.ts";

// This is the function that updates the data of a friend in the database.
export const updateFriend: any = async (context: any) => {
  try {
    // accessing the id of friend from the request params
    const id: string = context.params.id;
    // accessing data from the request body
    let body: any = await context.request.body();

    // creating the data object which has the updated values
    let data: { email?: String; pno?: String } = {};
    if (body.value.email) { // if an updated email id is sent
      data["email"] = body.value.email;
    }
    if (body.value.pno) { // if an updated phone no is sent
      data["pno"] = body.value.pno;
    }

    // Updating the database
    const result = await Friend.updateOne(
      { _id: { "$oid": id } },
      { $set: data },
    );

    // sending the response
    context.response.body = result;
    context.response.status = 200;
  } // if some error occurred while updating
  catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};
