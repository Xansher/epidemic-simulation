export interface simulationDTO{
    id: number;
    name: string;
    p: number;
    i: number;
    r: number;
    m: number;
    ti: number;
    tm: number;
    ts: number;
}

export interface resultDTO{
    day:number;
    infected: number;
    healthy: number;
    dead: number;
    cured: number;
}