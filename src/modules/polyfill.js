/* eslint-disable */
/* This file is a collection of functions copied from the Mozilla
 * Developer Network website that add various pieces of functionality missing
 * from the JScript core.
 */


/* Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *       Reference/Global_Objects/Array/forEach
 * Production steps of ECMA-262, Edition 5, 15.4.4.18
 * Reference: http://es5.github.io/#x15.4.4.18
 */
if (!Array.prototype.forEach) {
    
    Array.prototype.forEach = function(callback, thisArg) {
        
        var T, k;
        
        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }
        
        // 1. Let O be the result of calling toObject() passing the
        // |this| value as the argument.
        var O = Object(this);
        
            // 2. Let lenValue be the result of calling the Get() internal
            // method of O with the argument "length".
            // 3. Let len be toUint32(lenValue).
            var len = O.length >>> 0;
        
        // 4. If isCallable(callback) is false, throw a TypeError
        // exception.  See: http://es5.github.com/#x9.11
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }
        
        // 5. If thisArg was supplied, let T be thisArg; else let
        // T be undefined.
        if (arguments.length > 1) {
            T = thisArg;
        }
        
        // 6. Let k be 0
        k = 0;
        
        // 7. Repeat, while k < len
        while (k < len) {
        
            var kValue;
            
            // a. Let Pk be ToString(k).
            //    This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty
            //    internal method of O with argument Pk.
            //    This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {
                
                // i. Let kValue be the result of calling the Get internal
                // method of O with argument Pk.
                kValue = O[k];
                
                /* ii. Call the Call internal method of callback with T as
                 * the this value and argument list containing kValue, k, and
                 * O.
                 */
                callback.call(T, kValue, k, O);
            }
            
            // d. Increase k by 1.
            k++;
            
        }
        // 8. return undefined
    };
}

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *          Reference/Global_Objects/Array/isArray
 */
if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}


/* Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *          Reference/Global_Objects/Array/every
 */
if (!Array.prototype.every) {
//if (false) {
    Array.prototype.every = function(callbackfn, thisArg) {
        'use strict';
        var T, k;
        
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        
        // 1. Let O be the result of calling ToObject passing the this
        //    value as the argument.
        var O = Object(this);
        
            // 2. Let lenValue be the result of calling the Get internal method
            //    of O with the argument "length".
            // 3. Let len be ToUint32(lenValue).
            var len = O.length >>> 0;
        
            // 4. If IsCallable(callbackfn) is false, throw a TypeError
            // exception.
            if (typeof callbackfn !== 'function') {
                throw new TypeError();
            }
            
            // 5. If thisArg was supplied, let T be thisArg; else let T be
            // undefined.
            if (arguments.length > 1) {
                T = thisArg;
            }
            
            // 6. Let k be 0.
            k = 0;
            
            // 7. Repeat, while k < len
            while (k < len) {
                
                var kValue;
                
                /* a. Let Pk be ToString(k).
                 *   This is implicit for LHS operands of the in operator
                 * b. Let kPresent be the result of calling the HasProperty
                 *    internal method of O with argument Pk.  This step can be
                 *    combined with c
                 * c. If kPresent is true, then
                 */
                if (k in O) {
                    
                    /* i. Let kValue be the result of calling the Get internal
                     *    method of O with argument Pk.
                     */
                    kValue = O[k];
                     
                    /* ii. Let testResult be the result of calling the Call
                     *     internal method of callbackfn with T as the this
                     *     value and argument list containing kValue, k, and O.
                     */
                    var testResult = callbackfn.call(T, kValue, k, O);
                    
                    // iii. If ToBoolean(testResult) is false, return false.
                    if (!testResult) {
                        return false;
                    }
                }
                k++;
            }
        return true;
    };
}


/* Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *      Reference/Global_Objects/Array/indexOf
 * Production steps of ECMA-262, Edition 5, 15.4.4.14
 * Reference: http://es5.github.io/#x15.4.4.14
 */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement, fromIndex) {
        
        var k;
        
        // 1. Let o be the result of calling ToObject passing
        //    the this value as the argument.
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        
        var o = Object(this);
        
        // 2. Let lenValue be the result of calling the Get
        //    internal method of o with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        var len = o.length >>> 0;
        
        // 4. If len is 0, return -1.
        if (len === 0) {
            return -1;
        }
        
        // 5. If argument fromIndex was passed let n be
        //    ToInteger(fromIndex); else let n be 0.
        var n = +fromIndex || 0;
        
        if (Math.abs(n) === Infinity) {
            n = 0;
        }
        
        // 6. If n >= len, return -1.
        if (n >= len) {
            return -1;
        }
        
        // 7. If n >= 0, then Let k be n.
        // 8. Else, n<0, Let k be len - abs(n).
        //    If k is less than 0, then let k be 0.
        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        
        // 9. Repeat, while k < len
        while (k < len) {
            // a. Let Pk be ToString(k).
            //   This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the
            //    HasProperty internal method of o with argument Pk.
            //   This step can be combined with c
            // c. If kPresent is true, then
            //    i.  Let elementK be the result of calling the Get
            //        internal method of o with the argument ToString(k).
            //   ii.  Let same be the result of applying the
            //        Strict Equality Comparison Algorithm to
            //        searchElement and elementK.
            //  iii.  If same is true, return k.
            if (k in o && o[k] === searchElement) {
                return k;
            }
            k++;
        }
        return -1;
    };
}


/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *          Reference/Global_Objects/Array/some
 * Production steps of ECMA-262, Edition 5, 15.4.4.17
 * Reference: http://es5.github.io/#x15.4.4.17
 */
if (!Array.prototype.some) {
    Array.prototype.some = function(fun/*, thisArg*/) {
        'use strict';
        
        if (this == null) {
            throw new TypeError('Array.prototype.some called on null or undefined');
        }
        
        if (typeof fun !== 'function') {
            throw new TypeError();
        }
        
        var t = Object(this);
        var len = t.length >>> 0;
        
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(thisArg, t[i], i, t)) {
                return true;
            }
        }
        
        return false;
    };
}


/* Copied from  https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *          Reference/Global_Objects/Array/lastIndexOf
 * Production steps of ECMA-262, Edition 5, 15.4.4.15
 * Reference: http://es5.github.io/#x15.4.4.15
 */
if (!Array.prototype.lastIndexOf) {
    Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
        'use strict';
        
        if (this === void 0 || this === null) {
            throw new TypeError();
        }
        
        var n, k,
        t = Object(this),
        len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        
        n = len - 1;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) {
                n = 0;
            }
            else if (n != 0 && n != (1 / 0) && n != -(1 / 0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        
        for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);
                k >= 0; k--) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}


/* Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *        Reference/Global_Objects/String/Trim
 */
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}


/* Copied rom https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *          Reference/Global_Objects/Object/keys
 */
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;
    
    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }
      
      var result = [];
      var prop;
      var i;
      
      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }
      
      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}


/* Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *          Reference/Global_Objects/Array/Reduce
 * Production steps of ECMA-262, Edition 5, 15.4.4.21
 * Reference: http://es5.github.io/#x15.4.4.21
 */
if (!Array.prototype.reduce) {
    
    Array.prototype.reduce = function(callback /*, initialValue*/) {
        
        'use strict';
        
        if (this == null) {
            
            throw new TypeError('Array.prototype.reduce called on' +
                    ' null or undefined');
            
        }
        
        if (typeof callback !== 'function') {
            
            throw new TypeError(callback + ' is not a function');
            
        }
        
        var t = Object(this), len = t.length >>> 0, k = 0, value;
        
        if (arguments.length == 2) {
            
            value = arguments[1];
            
        } else {
            
            while (k < len && !(k in t)) {
                
                k++;
                
            }
            
        if (k >= len) {
            
            throw new TypeError('Reduce of empty array with' +
                    'no initial value');
                    
        }
        
        value = t[k++];
        
    }
    
    for (; k < len; k++) {
        
        if (k in t) {
            
            value = callback(value, t[k], k, t);
            
      }
    }
    
    return value;
    
  };
}


Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];
         
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
};

/* Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *      Reference/Global_Objects/Number/isNaN
 */
Number.isNaN = Number.isNaN || function(value) {
    return typeof value === "number" && isNaN(value);
};


/* Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *      Reference/Global_Objects/Array/map
 * Production steps of ECMA-262, Edition 5, 15.4.4.19
 * Reference: http://es5.github.io/#x15.4.4.19
 */
if (!Array.prototype.map) {

  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this|
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let A be a new array created as if by the expression new Array(len)
    //    where Array is the standard built-in constructor with that name and
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal
        //     method of callback with T as the this value and argument
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}

/*
 * Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *      Reference/Global_Objects/Number/isInteger
 */
Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
            isFinite(value) &&
            Math.floor(value) === value;
};

/*
 * Copied frm https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *      Reference/Global_Objects/Number/isFinite
 */
Number.isFinite = Number.isFinite || function(value) {
    return typeof value === "number" && isFinite(value);
};

/*
 * Copied frm https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *      Reference/Global_Objects/Math/round
 */
(function() {
    /**
     * Decimal adjustment of a number.
     *
     * @param {String}  type  The type of adjustment.
     * @param {Number}  value The number.
     * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
     * @returns {Number} The adjusted value.
     */
    function decimalAdjust(type, value, exp) {
      // If the exp is undefined or zero...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // If the value is not a number or the exp is not an integer...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Shift
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      // Shift back
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }
    
    // Decimal round
    if (!Math.round10) {
      Math.round10 = function(value, exp) {
        return decimalAdjust('round', value, exp);
      };
    }
    // Decimal floor
    if (!Math.floor10) {
      Math.floor10 = function(value, exp) {
        return decimalAdjust('floor', value, exp);
      };
    }
    // Decimal ceil
    if (!Math.ceil10) {
      Math.ceil10 = function(value, exp) {
        return decimalAdjust('ceil', value, exp);
      };
    }
})();

/*
 * Copied frm https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *      Reference/Global_Objects/Array/filter
 */
if (!Array.prototype.filter) {
    Array.prototype.filter = function(fun/*, thisArg*/) {
      'use strict';
      
      if (this === void 0 || this === null) {
        throw new TypeError();
      }
      
      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== 'function') {
        throw new TypeError();
      }
      
      var res = [];
      var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
      for (var i = 0; i < len; i++) {
        if (i in t) {
          var val = t[i];
          
          // NOTE: Technically this should Object.defineProperty at
          //       the next index, as push can be affected by
          //       properties on Object.prototype and Array.prototype.
          //       But that method's new, and collisions should be
          //       rare, so use the more-compatible alternative.
          if (fun.call(thisArg, val, i, t)) {
            res.push(val);
          }
        }
      }
      
      return res;
    };
}

/*
 * Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *      Reference/Global_Objects/Array/fill
 */
if (!Array.prototype.fill) {
  Array.prototype.fill = function(value) {

    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length >>> 0;

    // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0;

    // Step 8.
    var k = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ?
      len : end >> 0;

    // Step 11.
    var final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Step 12.
    while (k < final) {
      O[k] = value;
      k++;
    }

    // Step 13.
    return O;
  };
}


/*
 * Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *      Reference/Global_Objects/Array/includes
 */
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }

    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}


/*
 * Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *      Reference/Global_Objects/Function/bind
 */
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}

if (!Object.defineProperty) {
    
    Object.defineProperty = function (obj, propName, {value}) {
        
        obj[propName] = value;
        
    };
    
}

/*
 * Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *      Reference/Global_Objects/Object/assign
 */
if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }
        
        var to = Object(target);
        
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
          
          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
}


/*
 * Copied from https://stackoverflow.com/questions/10919915/
 *      ie8-getprototypeof-method
 */
if (typeof Object.getPrototypeOf !== "function")
Object.getPrototypeOf = "".__proto__ === String.prototype
    ? function (object) {
        return object.__proto__;
    }
    : function (object) {
        // May break if the constructor has been tampered with
        return object.constructor.prototype;
    };

/*
 * Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 * Reference/Global_Objects/String/repeat
 */
if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (var i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
  }
}

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/
//    Reference/Global_Objects/String/padEnd
if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String(padString || ' ');
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return String(this) + padString.slice(0,targetLength);
        }
    };
  }
