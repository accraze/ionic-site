System.register('rxjs/src/util/Symbol_iterator', ['./root'], function (_export) {
    'use strict';

    var root;
    return {
        setters: [function (_root) {
            root = _root.root;
        }],
        execute: function () {
            if (!root.Symbol) {
                root.Symbol = {};
            }
            if (!root.Symbol.iterator) {
                if (typeof root.Symbol['for'] === 'function') {
                    root.Symbol.iterator = root.Symbol['for']('iterator');
                } else if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
                    root.Symbol.iterator = '@@iterator';
                } else {
                    root.Symbol.iterator = '_es6shim_iterator_';
                }
            }

            _export('default', root.Symbol.iterator);

            // // Shim in iterator support
            // export var $iterator$ = (typeof Symbol === 'function' && Symbol.iterator) || '_es6shim_iterator_';
            // // Bug for mozilla version
            // if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
            //     $iterator$ = '@@iterator';
            // }
        }
    };
});