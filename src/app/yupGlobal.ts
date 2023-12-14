import * as Yup from "yup";

Yup.addMethod(Yup.string, "jpPhone", function (message) {
  const JP_PHONE_REGEX = /^\d{2,3}(?:-\d{4}-\d{4}|\d{8}|\d-\d{3,4}-\d{4})$/;
  return this.matches(JP_PHONE_REGEX, { message, excludeEmptyString: true });
});

Yup.addMethod(Yup.string, "hiragana", function (message) {
  const HIRAGANA = /^[\u3040-\u309F 　]+$/;

  return this.matches(HIRAGANA, { message, excludeEmptyString: true });
});

declare module "yup" {
  interface StringSchema {
    jpPhone(message: string): StringSchema;
    hiragana(message: string): StringSchema;
  }
}

export default Yup;
