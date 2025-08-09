"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var rules = {
    "check-author": {
        meta: {
            type: "problem",
            docs: {
                description: "Check if a file has an author tag",
                category: "Possible Errors",
                recommended: true
            },
            schema: []
        },
        create: function(context) {
            return {
                Program: function(node) {
                    // @ts-ignore
                    var comments = context.getAllComments();
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = comments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var comment = _step.value;
                            if (comment.type === "Block" && comment.value.includes("@author")) {
                                return;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    context.report({
                        node: node,
                        message: "Missing @author tag in file comments."
                    });
                }
            };
        }
    },
    "check-empty-file": {
        meta: {
            type: 'problem',
            docs: {
                description: 'Check if a file is empty',
                category: 'Possible Errors',
                recommended: false
            },
            schema: []
        },
        create: function(context) {
            return {
                Program: function(node) {
                    var sourceCode = context.getSourceCode();
                    var text = sourceCode.getText();
                    if (text.trim() === '') {
                        context.report({
                            node: node,
                            message: 'File is empty.'
                        });
                    }
                }
            };
        }
    }
};
var _default = rules;

