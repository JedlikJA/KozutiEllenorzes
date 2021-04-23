export default class jarmu {
    private _ora: number;
    private _perc: number;
    private _sec: number;
    private _rendszam: string;
    private _adat: string;

    public get ora(): number {
        return this._ora;
    }

    public get perc(): number {
        return this._perc;
    }

    public get sec(): number {
        return this._sec;
    }

    public get rendszam(): string {
        return this._rendszam;
    }

    public get adat(): string {
        return this._adat;
    }

    constructor(sor: string) {
        const k: string[] = sor.split(" ");

        this._ora = parseInt(k[0]);
        this._perc = parseInt(k[1]);
        this._sec = parseInt(k[3]);
        this._rendszam = k[4];
        this._adat = k[5];
    }
}
