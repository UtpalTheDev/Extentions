
browser.browserAction.onClicked.addListener(handleClick);

function handleClick(tab){
let msg={
    txt: "hello"
}

browser.tabs.sendMessage(tab.id, msg);
}