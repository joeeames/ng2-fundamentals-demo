import { Injectable } from '@angular/core';

declare var toastr: ToastrGlobal; 

interface ToastrGlobal {
  success (msg: string, title?: string, options?: Object): void;
  info (msg: string, title?: string, options?: Object): void;
  warning (msg: string, title?: string, options?: Object): void;
  error (msg: string, title?: string, options?: Object): void;
}

@Injectable()
export class ToastrService {
  
  success(message: string, title?: string, options?: Object) {
    console.log('success');
    toastr.success(message, title, options);
  }
  info(message: string, title?: string, options?: Object) {
    console.log('success');
    toastr.info(message, title, options);
  }
  warning(message: string, title?: string, options?: Object) {
    console.log('success');
    toastr.warning(message, title, options);
  }
  error(message: string, title?: string, options?: Object) {
    console.log('success');
    toastr.error(message, title, options);
  }
}
