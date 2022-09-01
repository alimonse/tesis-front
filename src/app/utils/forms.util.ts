import { FormControl } from '@angular/forms';

export class FormsUtil {
  private static validateInputText(
    input: string | boolean | number[] | number,
    minLength?: number,
    maxLength?: number
  ): boolean {
    if (typeof input === 'boolean') {
      return input;
    }

    if (Array.isArray(input) && input.length) {
      return true;
    }

    if (typeof input === 'number') {
      return true;
    }

    let stringValue = '';

    if (input && typeof input === 'string') {
      stringValue = input?.trim() || '';
    }

    if (!stringValue) {
      return false;
    }
    return !(
      !stringValue ||
      (minLength && stringValue.length < minLength) ||
      (maxLength && stringValue.length > maxLength)
    );
  }

  static requiredValidator(inputName: string): any {
    return (control: FormControl) => {
      if (!inputName || !FormsUtil.validateInputText(control.value)) {
        return {
          required: `El campo ${inputName.toLowerCase()} es requerido.`,
        };
      }
      return null;
    };
  }

  static maxLengthValidator(inputName = '', maxLength: number): any {
    return (control: FormControl) => {
      if (
        inputName &&
        !FormsUtil.validateInputText(control.value, 0, maxLength)
      ) {
        return {
          maxlength: `El campo ${inputName.toLowerCase()} no puede ser mayor a ${maxLength} caracteres.`,
        };
      }
      return null;
    };
  }

  static minLengthValidator(inputName = '', minLength: number): any {
    return (control: FormControl) => {
      if (
        control.value &&
        !FormsUtil.validateInputText(control.value, minLength)
      ) {
        return {
          minlength: `El campo ${inputName.toLowerCase()} debe tener al menos ${minLength} caracteres.`,
        };
      }
      return null;
    };
  }

  static emailValidator: any = (control: FormControl) => {
    const regexEmail =
      /^([a-z0-9_\-.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
    if (control.value && !regexEmail.test(control.value)) {
      return {
        email: 'El correo electrónico no es válido.',
      };
    }
    return null;
  };

  static passwordValidator(inputName = ''): any {
    return (control: FormControl) => {
      if (
        control.value &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_])[A-Za-z\d@$!%*?&-_]{8,50}$/.test(
          control.value
        )
      ) {
        return {
          password: `${inputName.toLowerCase()} debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.`,
        };
      }
      return null;
    };
  }

  static stringValidator: any = (control: FormControl) => {
    const regexString = /^[A-Za-z]+$/;
    if (control.value && !regexString.test(control.value)) {
      return {
        email: 'Ingrese solo caracteres alfabéticos',
      };
    }
    return null;
  };

  static numberStringValidator: any = (control: FormControl) => {
    const regexString = /^[0-9]+$/;
    return (control: FormControl) => {
      if (control.value && !regexString.test(control.value)) {
        return {
          path: 'Ingrese solo caracteres numéricos',
        };
      }
      return null;
    };
  };
}
