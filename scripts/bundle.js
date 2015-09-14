(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

	$redTab.click(function () {
		$redContent.show();
		$blueContent.hide();
		$greenContent.hide();
		this.style.backgroundColor = '#D3D3D3';
	});

	$greenTab.click(function () {
		$greenContent.show();
		$redContent.hide();
		$blueContent.hide();
		this.style.backgroundColor = '#D3D3D3';
	});

	$blueTab.click(function () {
		$blueContent.show();
		$redContent.hide();
		$greenContent.hide();
		this.style.backgroundColor = '#D3D3D3';
	});
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map