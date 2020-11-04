export interface IQuestion {
    resolve: (value?: any) => void;
    peerId: number;
    startTime: number;
}