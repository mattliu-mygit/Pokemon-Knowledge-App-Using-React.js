"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidException = exports.DuplicateException = void 0;

// A custom error for duplicated Pokemon.
function DuplicateError(message) {
  const error = new Error(message);
  error.code = 'duplicate';
  return error;
} // A custom error for an invalid Pokemon guess.


function InvalidError(message) {
  const error = new Error(message);
  error.code = 'invalid';
  return error;
} // const Exception = () => {
//     function DuplicateException(message) {
//         const error = new Error(message);
//         error.code = 'duplicate';
//         return error;
//     }
//     function InvalidException(message) {
//         const error = new Error(message);
//         error.code = 'invalid';
//         return error;
//     }
// }


const DuplicateException = DuplicateError('');
exports.DuplicateException = DuplicateException;
const InvalidException = InvalidError(''); //export default Exception;

exports.InvalidException = InvalidException;