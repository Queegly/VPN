/*
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
*/

function save_options() {
	var select = document.getElementById('proxy');
	var proxy = select.children[select.selectedIndex].value;
	localStorage.proxy = proxy;
}

function restore_options() {
	var favorite = localStorage.proxy;
	if (!favorite) {
		return;
	}
	var select = document.getElementById('proxy');
	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == favorite) {
			child.selected = 'true';
			break;
		}
	}
}

window.addEventListener('load', function() {
	var favorite = localStorage.proxy;
	if (!favorite) {
		return;
	}
	var select = document.getElementById('proxy');
	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == favorite) {
			child.selected = 'true';
			break;
		}
	}
});

window.onload = function() {
	var saveButton = document.getElementById('saveButton');
	var proxySelect = document.getElementById('proxy');
	saveButton.onclick = function() {
		save_options();
		this.value = 'Saved!';
	};
	proxySelect.onclick = function() {
		saveButton.value = 'Save';
	};
};
