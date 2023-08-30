import { MongoClient } from "mongodb";

async function connectToDB() {
  const { username, password, cluster, database } = process.env;
  const connectionLink = `mongodb+srv://${username}:${password}@${cluster}.dy9ror9.mongodb.net/${database}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(connectionLink);
  return client;
}

async function inserting(client, documents) {
  const db = await client.db();
  const data = await db.collection("messages").insertOne(documents);
  return data;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(500).json({ message: "Invalid Inputs" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await connectToDB();
    } catch (error) {
      res.status(502).json({ message: "Connecting to the db failed!" });
      return;
    }

    try {
      const data = await inserting(client, newMessage);
      newMessage.id = data.insertedId;
    } catch (error) {
      res.status(504).json({ message: "Inserting to the db failed!" });
      client.close();
      return;
    }

    client.close();
    res.status(200).json({ message: "Test", result: newMessage });
  }
}
