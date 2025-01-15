import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function PasswordMatchValidator(ctrl_passworld_name: string, ctrl_confirm_passworld_name: string): ValidatorFn {
    return function (formGroup: AbstractControl): ValidationErrors | null {
        const ctrlPassworld = formGroup.get(ctrl_confirm_passworld_name)
        const ctrlConfirmPassworld = formGroup.get(ctrl_confirm_passworld_name)
        if (ctrlPassworld && ctrlConfirmPassworld) {

            if (ctrlPassworld.value !== ctrlConfirmPassworld.value)
                ctrlConfirmPassworld.setErrors({ Mismatch: true })
            else
                ctrlConfirmPassworld.setErrors(null)
        }
        return null
    }
}