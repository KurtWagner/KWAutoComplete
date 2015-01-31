# KWSuggest

Simple HTML input suggest text.

![](https://github.com/KurtWagner/KWSuggest/blob/master/demo/demo.gif "KWTransitionStyleBounceIn")

## Installation

Bower:

    bower install kw-suggest
    
Manual:

    <script src="./kw-suggest.min.js" type="text/javascript"></script>

## Example

HTML:

    <input id="main" class="my-custom-class" style="font-weight: bold" type="text">

JS:

    KW.suggest('#main', function(text) {
        console.log(text); // prints input value
        return 'suggested text';         
    });
    
See demo folder for sample in action.

## TODO

1. Implement `kw-suggest-angular.js` as per [issue](https://github.com/KurtWagner/KWSuggest/issues/1).
2. Finish off tests
