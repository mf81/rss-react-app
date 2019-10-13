import Joi from "joi-browser";

const JoiSchema = {
  _id: Joi.string()
    .optional()
    .allow(""),
  __v: Joi.number()
    .optional()
    .allow(""),
  nr: Joi.string()
    .required()
    .max(30)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.empty":
            err.message = "Pole nie może być puste...";
            break;
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  rok: Joi.string()
    .required()
    .max(10)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.empty":
            err.message = "Pole nie może być puste...";
            break;
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  kodLokalu: Joi.string()
    .allow("")
    .max(10)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  nrDW: Joi.string()
    .allow("")
    .max(20)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  rokDW: Joi.string()
    .allow("")
    .max(10)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  polaczono: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  rodzaj: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  imieNazwisko: Joi.string()
    .required()
    .max(300)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "any.empty":
            err.message = "Pole nie może być puste...";
            break;
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  adres: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  ADM: Joi.string()
    .allow("")
    .max(13)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  wartosc: Joi.string()
    .allow("")
    .max(30)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  okresDochodzony: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  wniesieniePozwu: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  sygnaturaNakaz: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  orzeczenieNakaz: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  sygnaturaSprzeciw: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  orzeczenieSprzeciw: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  sygnaturaApelacja: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  orzeczenieApelacja: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  wystapienieOklauzule: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  wniosekMajatku: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  sygnAktWyjawienia: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  orzeczenieWyjawienia: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  etapPostEgz: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  uwagi: Joi.string()
    .allow("")
    .max(500)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  przekazanoDoDP: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  radcaPrawny: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  rozliczoneZastepstwa: Joi.string()
    .allow("")
    .max(50)
    .error(errors => {
      errors.forEach(err => {
        switch (err.type) {
          case "string.max":
            err.message = `Pole nie może mieć wiecje niż ${err.context.limit} znaków!`;
            break;
          default:
            break;
        }
      });
      return errors;
    })
};

export default JoiSchema;
