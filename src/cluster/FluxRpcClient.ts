import {EventEmitter} from "events";
import io from "socket.io-client";

export class FluxRpcClient extends EventEmitter
{
    public socket?: SocketIOClient.Socket;

    constructor(public endpoint: string)
    {
        super();

    }

    async build()
    {
        this.socket = io()
        this.socket.on("connect", (socket: SocketIOClient.Socket) => {
            socket.on("disconnect", () => {

            })
        })
    }

}
