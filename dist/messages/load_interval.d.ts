export interface Params {
    itemId: number;
    timeFrom: number;
    timeTo: number;
    flags: number;
    flagsMask: number;
    loadCount: number;
}
export interface Response<Message> {
    count: number;
    messages: Message[];
}
