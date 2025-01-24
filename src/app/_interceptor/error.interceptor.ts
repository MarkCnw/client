import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { catchError } from 'rxjs'
import { ErrorService } from '../_services/error.service'

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService)
  return next(req).pipe(
    catchError(err => errorService.handleError(err))
  )
}
