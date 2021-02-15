
export type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};

export function callback(err: Error, result?: undefined): Error;
export function callback(err: null, result: number): number;

export function callback(err: Error | null, result: any): Error | number {
    if (err) {
        console.log(err.message);
        return err;
    }
    console.log(`Result: ${result}`);
    return result;
}

function superComputer(nb1: number, operation: string, nb2: number, callback: Callback) {
    if (operation == "-") {
        callback(null, nb1 - nb2);
    }
    if (operation == "/") {
        callback(null, nb1 / nb2);
    }
    if (operation == null) {
        callback(new Error("bad operation"));
    }
    if (operation == "*") {
        callback(null, nb1 * nb2);
    }
    if (operation == "/") {
        if (nb2 == 0 && nb1 == 0) {
            callback(new Error("Division 0"));
        }
    }
} 
export default superComputer;