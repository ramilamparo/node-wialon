export interface MessageWithData {
    t: number;
    f: number;
    tp: "ud";
    pos: {
        y: number;
        x: number;
        z: number;
        s: number;
        c: number;
        sc: number;
    };
    i: number;
    o: number;
    p: {
        [key: string]: number;
    };
    lc: number;
    rt: number;
}
export interface SMS {
    t: number;
    f: number;
    tp: "us";
    st: string;
    mp: string;
    p: {};
}
export interface Command {
    t: number;
    f: number;
    tp: "ucr";
    ca: string;
    cn: string;
    cp: string;
    ui: number;
    ln: string;
    lt: string;
    et: number;
    p: {};
}
export interface Event {
    t: number;
    f: number;
    tp: "evt";
    et: string;
    x: number;
    y: number;
    p: {};
}
export interface Notification {
    t: number;
    f: number;
    tp: "xx";
    p: {};
}
export interface BillingMessage {
    t: number;
    f: number;
    tp: "xx";
    p: {};
}
export interface SMSForDriver {
    t: number;
    f: number;
    tp: "xx";
    p: {
        phone: string;
        sms_text: string;
        driver_name: string;
        driver_id: number;
    };
}
export interface Log {
    t: number;
    f: 4096;
    tp: "xx";
    p: {
        user: string;
        action: string;
        host: string;
        p1: string;
        [key: string]: string;
    };
}
