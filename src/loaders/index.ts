import { Application } from "express";
import expressLoader from "./express";
import { Server } from "socket.io";

export default async function (app: Application, io: Server) {
  await expressLoader(app, io);
}
