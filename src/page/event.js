import pushNumber from './pushNumber';
import NumberTimer from "../util/number";

var isStart = false;
var n = new NumberTimer(100)
n.onNumberCreated = function (n, isPrime) {
    pushNumber(n, isPrime)
}
document.onclick = function () {
    if (isStart) {
        n.stop()
        isStart = false
    } else {
        n.start()
        isStart = true
    }
}