/**
 * @file KWSuggest  - Auto complete / suggested text input
 * @author Kurt Wagner
 * @copyright Kurt Wagner
 * @version 1.0.1
 * @license MIT
 */

(function(KW) {
	'use strict';
	
	/**
	 * @name setupDefaultInputElement
	 * @description
	 * Set the default attributes and style of an input. This should be used
	 * to setup both the original input and placeholder underlay input.
	 *
	 * @param {HTMLElement} input -
	 */
	var setupDefaultInputElement = function(input) {
		input.style.top = '0px'; 
		input.style.left = '0px'; 
		input.style.background = 'transparent';
	};
	
	/**
	 * @name setupInputElement
	 * @description
	 * Used to setup the original input element
	 *
	 * @param {HTMLElement} input -
	 */
	var setupInputElement = function(input) {
		setupDefaultInputElement(input);
		input.style['z-index'] = parseInt(input.style['z-index'], 10) || 0;
	};
	
	/**
	 * @name createAutoCompleteElement
	 * @description
	 * Creates the auto complete element that sits under the original from element.
	 *
	 * @param {HTMLElement} fromElement -
	 * @return {HTMLElement} auto complete input element prepared from original element
	 */
	var createAutoCompleteElement = function(fromElement) {
		setupInputElement(fromElement);
		var element = fromElement.cloneNode(true);
		setupDefaultInputElement(element);
		element.style['z-index'] = fromElement.style['z-index'] - 1;
		element.style.opacity = 0.4;
		element.style.position = 'absolute';
		element.setAttribute('disabled','disabled');
		
		var fromElementId = element.getAttribute('id');
		if (fromElementId && typeof fromElementId !== 'undefined') {
			element.setAttribute('id', fromElementId + '-autocomplete');
		}
		return element;
	};
	
	/**
	 * @name createParentElement
	 * @description
	 * Creates a parent element that will be used to contai the original input and suggestion
	 *
	 * @param {HTMLElement} fromElement -
	 * @return {HTMLElement} parent element -
	 */
	var createParentElement = function(fromElement) {
		var parent = document.createElement('div');
		parent.style.position = fromElement.style.position || 'relative';
		return parent;
	};
	
	/**
	 * @name updateUI
	 *
	 * @param {HTMLElement} inputElement -
	 * @param {HTMLElement} autoCompleteElement -
	 * @param {function} builder -
	 */
	var updateUI = function(inputElement, autoCompleteElement, builder) {
		var suggestion = builder(inputElement.value);
		autoCompleteElement.value = inputElement.value + suggestion;   
	};

	KW.suggest = function(selector, suggestionBuilder) {
		// we require a suggestion builder function
		if (typeof suggestionBuilder !== 'function') {
			throw new Error('suggestionBuilder must be a function');
		}
		
		// we require a valid element, if selector fails - BOOM
		var inputElement = document.querySelector(selector);
		if (!inputElement) {
			throw new Error('Could not find selector ' + selector);
		}
		
		var parentElement = createParentElement(inputElement);
		var autoCompleteElement = createAutoCompleteElement(inputElement);
		
		inputElement.parentNode.replaceChild(parentElement, inputElement);
		parentElement.appendChild(autoCompleteElement);
		parentElement.appendChild(inputElement);

		inputElement.addEventListener("keyup", function(){
			updateUI(inputElement, autoCompleteElement, suggestionBuilder);
		});
		inputElement.addEventListener("keydown", function(e){
			if (e.keyCode === 39) { // right
				inputElement.value = inputElement.value + suggestionBuilder(inputElement.value);
			} else {
				setTimeout(function() {
					updateUI(inputElement, autoCompleteElement, suggestionBuilder);
				});
			}
		});
	};
	
}(window.KW = window.KW || {}));
