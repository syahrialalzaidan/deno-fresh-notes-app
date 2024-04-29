//please make POST, PUT, DELETE request to this endpoint and use function in utils
//to send request to this endpoint
import { addJournal, deleteJournal, updateJournal } from "../../utils/db.ts";

export const handler = async (
  req: Request,
): Promise<Response> => {
  const { method } = req;

  switch (method) {
    case "POST": {
      const data = await addJournal();
      return new Response(data?.[0]);
    }
    case "PUT": {
      const { id, title, content } = await req.json();
      const data = await updateJournal(id, title, content);
      return new Response(data);
    }
    case "DELETE": {
      const { id } = await req.json();
      const data = await deleteJournal(id);
      return new Response(data);
    }
    default:
      return new Response("Method not allowed", { status: 405 });
  }
};
