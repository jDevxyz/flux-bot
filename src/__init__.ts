import {BaseCluster} from "kurasuta";

export default class extends BaseCluster
{
    protected launch(): Promise<void> | void
    {
        this.client.login("uwu").then(r => console.log(r))
    }
}
