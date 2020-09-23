import { Friend } from "../helpers/dbconnect.ts";

// This is the function that gets the data of a friend from the database.
export const getFriend: any = async (context: any) => {
  try {
    // accessing the id of friend from the request params
    let id: string = context.params.id;

    // searching the db for a friend with the given id
    const data: any = await Friend.findOne({ _id: { "$oid": id } });
    if (data) { // Response if friend is found
      context.response.body = data;
      context.response.status = 200;
    } else { // Response if no friend exits with the given id
      context.response.body = "not found";
      context.response.status = 204;
    }
  } // if some error occurred while searching the db
  catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};
