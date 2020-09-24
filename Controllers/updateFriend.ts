import { Friend } from "../helpers/dbconnect.ts";

// This is the function that updates the data of a friend in the database.
export const updateFriend: any = async (context: any) => {
  try {
    // accessing the id of friend from the request params
    const id: string = context.params.id;
    // accessing data from the request body
    let body: any = await context.request.body();
    let value: any = await body.value
    // creating the data object which has the updated values
    let data: { email?: String; pno?: String } = {};
    if (value.email) { // if an updated email id is sent
      data["email"] = value.email;
    }
    if (value.pno) { // if an updated phone no is sent
      data["pno"] = value.pno;
    }

    // Updating the database
    console.log(data)
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
