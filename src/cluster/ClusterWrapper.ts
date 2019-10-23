import {SharderOptions, ShardingManager} from "kurasuta"
import {join} from "path"

export class ClusterWrapper
{
    protected __sharded: ShardingManager;

    constructor(protected __path: string, protected __options: SharderOptions)
    {
        this.__sharded = new ShardingManager(
            join(__dirname, __path),
            __options
            )
    }

    protected async build()
    {
        await this.__sharded.spawn()
    }
}
