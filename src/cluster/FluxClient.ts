import {Client, ClientOptions, Collection} from "discord.js"

export class FluxClient extends Client
{
    private __token?: string;
    private __config = new Collection<string, string>();

    constructor(opt: ClientOptions)
    {
        super(opt)
    }
    protected get(id: string): string | undefined
    {
        return this.__config.get(id)
    }
    protected set(id: string, value: string)
    {
        this.__config.set(id, value)
    }

    protected setToken(token: string)
    {
        this.set("token", token.toString())
    }
    protected getToken(): string | undefined
    {
        return this.get("token")
    }

    protected async build()
    {
        this.login(this.getToken())
    }
}
