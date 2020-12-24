import NumberTimer from "../util/number";
import {getRandom} from '../util/radColor'
import radColor from '../util/radColor'
var divcontainer = document.getElementById('divContainer')
var divcenter = document.getElementById('divCenter')
export default function (n, isPrime) {
    var span = document.createElement('span')
    span.innerText = n
    if (isPrime) {
        var color = radColor()
        span.style.color = color
        createCenterisPrimeNumber(n, color)
    }
    divcontainer.appendChild(span)
    //产生中间的数字
    createCenterNumber(n)
}

/**
 * 用来生成中间的数字
 * @param {*} n 
 */
function createCenterNumber(n) {
    divcenter.innerText = n
}

function createCenterisPrimeNumber(n, color) {
    var div = document.createElement("div")
    div.className = "center";
    div.style.color = color;
    div.innerText = n;
    document.body.appendChild(div)
    getComputedStyle(div).left;
    div.style.transform = `translate(${getRandom(-666,666)}px, ${getRandom(-666,666)}px)`;
    div.style.opacity= 0 ;
}