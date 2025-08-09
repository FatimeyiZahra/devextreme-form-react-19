import type { RegisterOptions } from "react-hook-form";

export const validations: ValidationsType = {
  required: function (isRequired = true) {
    return {
      required: {
        value: isRequired,
        message: messages.required,
      },
    };
  },
  letters: function (isRequired = true) {
    return {
      ...this.required(isRequired),
      validate: (value) => {
        if (value !== null && value !== "" && !regxes.letters.test(value)) {
          return messages.letters;
        }
      },
    };
  },
  severalLetters: function (isRequired = true) {
    return {
      ...this.required(isRequired),
      validate: (value) => {
        if (
          value !== null &&
          value !== "" &&
          !regxes.severalLetters.test(value)
        ) {
          return messages.letters;
        }
      },
    };
  },
  numbers: function (isRequired = true) {
    return {
      ...this.required(isRequired),
      validate: (value) => {
        if (value !== null && value !== "" && !regxes.numbers.test(value)) {
          return messages.numbers;
        }
      },
    };
  },
  allPositiveNumbers: function (isRequired = true) {
    return {
      ...this.required(isRequired),
      validate: (value) => {
        if (
          value !== null &&
          value !== "" &&
          !regxes.allPositiveNumbers.test(value)
        ) {
          return messages.numbers;
        }
      },
    };
  },
  pin: function (isRequired = true) {
    return {
      ...this.required(isRequired),
      validate: (value) => {
        if (value !== null && value !== "" && !regxes.pin.test(value)) {
          return messages.pin;
        }
      },
    };
  },
  idCard: function (isRequired = true) {
    return {
      ...this.required(isRequired),
      validate: (value) => {
        if (value !== null && value !== "" && !regxes.idCard.test(value)) {
          return messages.idCard;
        }
      },
    };
  },
  phone: function (isRequired = true) {
    return {
      ...this.required(isRequired),
      validate: (value) => {
        if (value !== null && value !== "" && !regxes.phone.test(value)) {
          return messages.phone;
        }
      },
    };
  },
  date: function (isRequired = true) {
    return {
      ...this.required(isRequired),
      validate: (value) => {
        if (value !== null && value !== "" && !regxes.date.test(value)) {
          return messages.date;
        }
      },
    };
  },
  newDate: function (isRequired = true) {
    return {
      ...this.required(isRequired),
      validate: (value) => {
        if (value !== null && value !== "" && !regxes.newDate.test(value)) {
          return messages.newDate;
        }
      },
    };
  },
  email: function (isRequired = true) {
    return {
      ...this.required(isRequired),
      validate: (value) => {
        if (value !== null && value !== "" && !regxes.email.test(value)) {
          return messages.email;
        }
      },
    };
  },
};
type ValidationsType = {
  required: (val?: boolean) => RegisterOptions;
  letters: (val?: boolean) => RegisterOptions;
  severalLetters: (val?: boolean) => RegisterOptions;
  numbers: (val?: boolean) => RegisterOptions;
  allPositiveNumbers: (val?: boolean) => RegisterOptions;
  pin: (val?: boolean) => RegisterOptions;
  idCard: (val?: boolean) => RegisterOptions;
  phone: (val?: boolean) => RegisterOptions;
  date: (val?: boolean) => RegisterOptions;
  email: (val?: boolean) => RegisterOptions;
  newDate: (val?: boolean) => RegisterOptions;
};

const messages = {
  required: "Bu xana doldurulmalıdı",
  letters: "Burada ancaq böyük və ya kiçik hərflər ola bilər",
  numbers: "Burda ancaq rəqəm ola bilər",
  phone: "nomreni duzgun formatda daxil edin",
  date: "tarixi duzgun daxil edin",
  pin: "FIN nomreni duzgun daxil edin",
  idCard: "Ş.V nomreni duzgun daxil edin",
  email: "email adresi duzgun daxil edin",
  newDate: "tarixi duzgun daxil edin",
};
///
const regxes = {
  phone: /^\+994(10|50|51|55|60|70|77|99)\d{7}$/,
  date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
  newDate: /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
  letters: /^[A-Za-zƏəİıÖöÜüÇçŞşĞğ]+$/,
  severalLetters: /^[A-Za-zÇĞİÖŞÜçğıöşüəƏ]+(?: [A-Za-zÇĞİÖŞÜçğıöşüəƏ]+)*$/,
  numbers: /^\d+$/,
  allPositiveNumbers: /^(0|[1-9]\d*)(\.\d+)?$/,
  pin: /^[A-Za-z0-9]{7}$/,
  idCard: /^([A-Za-z]{3}\d{8}|[A-Za-z]{2}\d{7})$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};
