export default class Entry {

    public constructor (
        private _date: Date,
        private _contents: string
    ) {}

    public get date(): Date { return this._date }
    public set date(date: Date) { this._date = date}

    public get dateStr(): string { return this._date.toLocaleString() }

    public get contents(): string { return this._contents}
    public set contents(contents: string) { this._contents = contents}

}