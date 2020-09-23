import { Friend } from "../helpers/dbconnect.ts";

// This is the function that deletes a friend from the database.
export const deleteFriend: any = async (context: any) => {
  try {
    // accessing the id of friend from the request params
    let id: string = context.params.id;

    // deleting the friend with the given id from the db
    const result = await Friend.deleteOne({ _id: { "$oid": id } });
    /*
  * result = 0 : data not found
  * result = 1 : data found and deleted
  */
    // sending the response
    context.response.body = { result };
    context.response.status = 200;
  } // if some error occured while deletion
  catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};
