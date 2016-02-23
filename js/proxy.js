/*
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
*/

window.addEventListener('load', function() {
	document.getElementById('proxy').value = localStorage["proxy"];
	var saveButton = document.getElementById('save');
	var proxySelect = document.getElementById('proxy');
	saveButton.onclick = function() {
		var select = document.getElementById('proxy');
		localStorage["proxy"] = select.options[select.selectedIndex].value;
		this.value = 'Saved!';
	};
	proxySelect.onclick = function() {
		saveButton.value = 'Save';
	};
});
