export default class Entry {
    constructor(
        private _date: Date,
        private _firstname: string,
        private _lastname: string,
        private _birthday: Date
    ) {}

    public get firstname(): string { return this._firstname }
    public set firstname(value: string) { this._firstname = value }

    public get lastname(): string { return this._lastname }
    public set lastname(value: string) { this._lastname = value }

    public get birthday(): Date { return this._birthday }
    public set birthday(value: Date) { this._birthday = value }

    public get date(): Date { return this._date }
    public set date(value: Date) { this._date = value }

    public get dateStr(): string { return this._date.toLocaleString() }
}
