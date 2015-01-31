'use strict';

describe('Test setupDefaultInputElement', function() {
	var setupDefaultInputElement = KW.__testonly__.setupDefaultInputElement;
	beforeEach(function() {
		this.inputElement = document.createElement('input');
		this.inputElement.style.position = 'fixed';
		this.inputElement.style.top = 100; 
		this.inputElement.style.left = 100; 
		this.inputElement.style.background = 'black';
	});
	it('sets position top to zero', function() {
		this.inputElement.style.top = '1px';
		setupDefaultInputElement(this.inputElement);
		expect(this.inputElement.style.top).toBe('0px');	
	});
	it('sets position left to zero', function() {
		this.inputElement.style.left = '1px';
		setupDefaultInputElement(this.inputElement);
		expect(this.inputElement.style.left).toBe('0px');	
	});
	it('sets position background to transparent', function() {
		this.inputElement.style.background = 'black';
		setupDefaultInputElement(this.inputElement);
		expect(this.inputElement.style.background).toBe('transparent');	
	});
});

describe('Test setupInputElement', function() {
	var setupInputElement = KW.__testonly__.setupInputElement;
	beforeEach(function() {
		this.inputElement = document.createElement('input');
	});
	xit('implicitly calls setup default on element', function(){
		spyOn(KW.__testonly__, 'setupDefaultInputElement');
		setupInputElement(this.inputElement);
		expect(KW.__testonly__.setupDefaultInputElement).toHaveBeenCalledWith(this.inputElement);	
	});
	it('sets z-index to 0 if one is zero', function(){
		this.inputElement.style['z-index'] = 0;
		setupInputElement(this.inputElement);
		expect(this.inputElement.style['z-index']).toBe('0');		
	});
	it('sets z-index to 0 if one is not found', function(){
		delete this.inputElement.style['z-index'];
		setupInputElement(this.inputElement);
		expect(this.inputElement.style['z-index']).toBe('0');		
	});
	it('does not override z-index if not zero and set', function(){
		this.inputElement.style['z-index'] = -1;
		setupInputElement(this.inputElement);
		expect(this.inputElement.style['z-index']).toBe('-1');
		
		this.inputElement.style['z-index'] = 1;
		setupInputElement(this.inputElement);
		expect(this.inputElement.style['z-index']).toBe('1');		
	});	
});

describe('Test createAutoCompleteElement', function() {
	var createAutoCompleteElement = KW.__testonly__.createAutoCompleteElement;
	beforeEach(function() {
		this.inputElement = document.createElement('input');
	});
	it('clones and sets opacity to 0.4', function() {
		var element = createAutoCompleteElement(this.inputElement);
		expect(element.style.opacity).toBe('0.4');
	});
	it('sets position to absolute', function() {
		this.inputElement.style.position = 'fixed';
		var element = createAutoCompleteElement(this.inputElement);
		expect(element.style.position).toBe('absolute');	
	});
	it('clones and sets disabled to true', function() {
		var element = createAutoCompleteElement(this.inputElement);
		expect(element.getAttribute('disabled')).toBe('disabled');
	});
	it('clones and suffixes id with "-autocomplete"', function() {
		this.inputElement.setAttribute('id', 'test-id');
		var element = createAutoCompleteElement(this.inputElement);
		expect(element.getAttribute('id')).toBe('test-id-autocomplete');
	});
	it('clones and suffixes id with "-autocomplete"', function() {
		var element = createAutoCompleteElement(this.inputElement);
		expect(element.getAttribute('id')).toBe(null);
	});
	it('clones and sets index to one less than input', function() {
		this.inputElement.style['z-index'] = -1;
		var element = createAutoCompleteElement(this.inputElement);
		expect(element.style['z-index']).toBe('-2');
		
		this.inputElement.style['z-index'] = 0;
		element = createAutoCompleteElement(this.inputElement);
		expect(element.style['z-index']).toBe('-1');
		
		this.inputElement.style['z-index'] = 1;
		element = createAutoCompleteElement(this.inputElement);
		expect(element.style['z-index']).toBe('0');
	});	
});

describe('Test createParentElement', function() {
	var createParentElement = KW.__testonly__.createParentElement;
	beforeEach(function() {
		this.inputElement = document.createElement('input');
	});
	it('creates parent with position set to from element or default "relative"', function() {
		delete this.inputElement.style.position;
		var parentElement = createParentElement(this.inputElement);
		expect(parentElement.style.position).toBe('relative');
		
		this.inputElement.style.position = 'static';
		var parentElement = createParentElement(this.inputElement);
		expect(parentElement.style.position).toBe('static');	
	});
});

describe('Test updateUI', function() {
	var updateUI = KW.__testonly__.updateUI;
	beforeEach(function() {
		this.inputElement = document.createElement('input');
		this.autoCompleteElement = document.createElement('input');
	});
	it('updates the auto complete element text correctly', function() {
		this.inputElement.value = 'start';
		updateUI(this.inputElement, this.autoCompleteElement, function() {
			return 'end';
		});
		expect(this.autoCompleteElement.value).toBe('startend');
	});
	it('passes correct text into builder function', function() {
		this.inputElement.value = 'repeat';
		updateUI(this.inputElement, this.autoCompleteElement, function(text) {
			return text;
		});
		expect(this.autoCompleteElement.value).toBe('repeatrepeat');
	});
});
