import fs from "fs";
import { resolve } from "node:path";
import jarmu from "./jarmu";

export default class Megoldas {
    private _KR: jarmu[] = [];

    public get Meresek(): jarmu {
        let munkaido: number = (this.Meresek.ora -1) - this.Meresek.ora
            if ((this.Meresek.perc -1 ) == 0 && (this.Meresek.sec -1) == 0) {
                return res.write(`A munkaidő : ${munkaido}`);
            }
            else {
                return res.write(`A munkaidő: ${munkaido + 1}`);   
            }
        }
    }

    public get Tipus(): string {
        let tipus = ["Busz", "Kamion", "Motor", "Egyéb"]
        let db = [0, 0, 0, 0]
        for (const r in this_rendszam) {
            if (r._rendszam.startsWith("B")) {
                db[0]++;
            }
            if (r._rendszam.startsWith("K")) {
                db[1]++;
            }
            if (r._rendszam.startsWith("M")) {
                db[2]++;
            }
            else {
                db[3]++
            }
        }
        for (let i = 0; i < 4; i++) {
            return res.write(`${tipus[i]} , ${db[i]}\n`)        
        }
    }

    constructor(forrás: string) {
        const adatok: string[] = fs.readFileSync(forrás).toString().split("\n");
        for (let i = 0; i < adatok.length; i++) {
            this._KR.push(new jarmu(adatok[i]));           
        }
    }
}