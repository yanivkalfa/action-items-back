import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value || !value.dob) {
      return value
    }
    let tempValue = { ...value };
    let dob = new Date(value.dob);
    let isValidDate = (date: Date) => {
      return date.toString() !== 'Invalid Date';
    }

    if (isValidDate(dob)) {
      tempValue.dob = dob;
    }

    return tempValue;
  }
}