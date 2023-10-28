import { Client } from "discord.js";
import ready from "./listeners/ready";

const token = "Token";

console.log("Bot Starting");

const client = new Client({
    intents: []
});

ready(client);

client.login(token);

//console.log(client);