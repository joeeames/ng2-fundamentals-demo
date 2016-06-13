import { Injectable, OpaqueToken } from '@angular/core';

export let TOASTR_TOKEN = new OpaqueToken('toastr');

export interface Toastr {
  success (msg: string, title?: string): void;
  info (msg: string, title?: string): void;
  warning (msg: string, title?: string): void;
  error (msg: string, title?: string): void;
}

/*
originally, just create the wrapper class and use it like so:
then talk about how we like the additional functionality of the console.log
but what if we didn't care about new functionality
and just wanted to use the underlying functionality? in that case
we can use provide() to just provide the underlying class

*/

// interface ToastrGlobal {
//   success (msg: string, title?: string): void;
//   info (msg: string, title?: string): void;
//   warning (msg: string, title?: string): void;
//   error (msg: string, title?: string): void;
// }

// @Injectable()
// export class ToastrService {
  
//   success(message: string, title?: string) {
//     // console.log('success');
//     // toastr.success(message, title, options);
//   }
//   info(message: string, title?: string) {
//     // console.log('success');
//     // toastr.info(message, title, options);
//   }
//   warning(message: string, title?: string) {
//     // console.log('success');
//     // toastr.warning(message, title, options);
//   }
//   error(message: string, title?: string) {
//     // console.log('success');
//     // toastr.error(message, title, options);
//   }
// }
