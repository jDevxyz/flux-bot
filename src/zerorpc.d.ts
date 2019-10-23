declare module "zerorpc" {
    import {EventEmitter} from "events"

    export class Client {
        constructor(options?: ClientOptions)
        private _socket(): Socket
        public connect(endpoint: string): void
        public bind(endpoint: string): void
        public close(linger: any): void
        public closed(): any
        public invoke(options: Object, method: string, args: string[], callback: Function): void
    }
    export interface ClientOptions {
        timeout: number
        heartbeatInterval: number
    }
    export class Socket extends EventEmitter {
        constructor(zmqsocket: any)
    }
    export class Server {

    }
}
