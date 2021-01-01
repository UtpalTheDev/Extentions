
import {data1} from './data/data1.js';
import {data2} from './data/data2.js';
import {data3} from './data/data3.js';
import {data4} from './data/data4.js';




var dat1=data1.concat(data2);
var dat2=data3.concat(data4);
var dat3=dat1.concat(dat2);




function cancel(requestDetails) {
  console.log("Canceling: " + requestDetails.url);
  return {cancel: true};
}

browser.webRequest.onBeforeRequest.addListener(
    cancel,
    {urls: dat3},
    ["blocking"]
  );
