import {EventEmitter} from "events";
import {Client} from "zerorpc"


export class ZeroRpcClient extends EventEmitter
{
    constructor(public endpoint: string)
    {
        super();

    }

    async build()
    {
        return new Client().connect(this.endpoint)
    }

}
