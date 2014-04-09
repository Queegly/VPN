/*
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
*/

// Update Message

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "update" || "install"){
            if(localStorage.getItem("proxy") === null){
            var proxy = "http://translate.google.com/translate?sl=ja&tl=en&u=";
            localStorage["proxy"] = proxy;
            console.log("no proxy selected, defaulting to google translate");
        }
    }
    chrome.tabs.create({'url': chrome.extension.getURL('welcome.html')});
});

// OmniProxy

chrome.omnibox.onInputEntered.addListener(function (text) {
    var proxy = localStorage["proxy"];
    var createProperties = {
        url : proxy + encodeURIComponent(text)
    };
    chrome.tabs.update(createProperties);
});
chrome.omnibox.onInputStarted
.addListener(function () {
    var suggestion = {
        description : "Open in OmniProxy: %s "
    }
    chrome.omnibox.setDefaultSuggestion(suggestion);
});