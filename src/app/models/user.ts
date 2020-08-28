export class User {
    id: string;
    email: string;
    password: string;
    // tslint:disable-next-line:variable-name
    private _list_tasks: [];
    public get list_tasks(): [] {
        return this._list_tasks;
    }
    public set list_tasks(value: []) {
        this._list_tasks = value;
    }
}
