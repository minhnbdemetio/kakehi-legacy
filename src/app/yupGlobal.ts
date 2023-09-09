import * as Yup from "yup";

Yup.addMethod(Yup.string, "jpPhone", function (message) {
  const JP_PHONE_REGEX = /^\d{2}(?:-\d{4}-\d{4}|\d{8}|\d-\d{3,4}-\d{4})$/;
  return this.matches(JP_PHONE_REGEX, { message, excludeEmptyString: true });
});

export default Yup;
