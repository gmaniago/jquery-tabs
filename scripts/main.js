'use strict';

$(document).ready(start);

function start() {

var $redTab = $('#redtab');
var $greenTab = $('#greentab');
var $blueTab = $('#bluetab');

var $redContent = $('#red-content');
var $greenContent = $('#green-content');
var $blueContent = $('#blue-content');

// $redTab.on('click', getRed);
// $greenTab.on('click', getRed);
// $blueTab.on('click', getRed);

$redTab.click(function() {
	$redContent.show();
	$blueContent.hide();
	$greenContent.hide();
	this.style.backgroundColor = '#D3D3D3';
});

$greenTab.click(function() {
	$greenContent.show();
	$redContent.hide();
	$blueContent.hide();
	this.style.backgroundColor = '#D3D3D3';
});

$blueTab.click(function() {
	$blueContent.show();
	$redContent.hide();
	$greenContent.hide();
	this.style.backgroundColor = '#D3D3D3';
});

}