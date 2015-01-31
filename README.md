# KWAutoComplete

Simple HTML input auto-complete text.

![](https://github.com/KurtWagner/KWAutoComplete/blob/master/demo/demo.gif "KWTransitionStyleBounceIn")

## Installation

Bower:

    bower install kw-auto-complete
    
Manual:

    <script src="./kw-auto-complete.min.js" type="text/javascript"></script>

## Example

HTML:

    <input id="main" class="my-custom-class" style="font-weight: bold" type="text">

JS:

    KW.autoComplete('#main', function(text) {
        console.log(text); // prints input value
        return 'suggested text';         
    });
    
See demo folder for sample in action.

## TODO

1. Implement `kw-auto-complete-angular.js` as per [issue](https://github.com/KurtWagner/KWAutoComplete/issues/1).
2. Finish off tests
