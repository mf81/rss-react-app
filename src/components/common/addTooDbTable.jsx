import React from "react";
import { Button } from "react-bootstrap";
import FormComponent from "./form";

class AddTooDb extends FormComponent {
  doSubmit = () => {
    // const res = { ...this.state.data };
    // delete res._id;
    // delete res.__v;
    // delete this.state._id;
    // delete this.state.__v;
    console.log("its submitted from add", this.state.data);
  };

  render() {
    const { fields, handleClose } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {Object.keys(fields).map(item =>
            this.renderInput(item, fields[item].label, "text", true)
          )}
          {this.renderButton("Zapisz")}
          <Button variant="secondary m-2" onClick={handleClose}>
            Anuluj
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddTooDb;

// state = {
//   data: {
// imieNazwisko: "",
// nr: "",
// rok: "",
// rokDW: "",
// nrDW: "",
// kodLokalu: "",
// polaczono: "",
// adres: "",
// wartosc: "",
// sygnaturaNakaz: "",
// rodzaj: "",
// ADM: "",
// okresDochodzony: "",
// wniesieniePozwu: "",
// orzeczenieNakaz: "",
// sygnaturaSprzeciw: "",
// orzeczenieSprzeciw: "",
// sygnaturaApelacja: "",
// orzeczenieApelacja: "",
// wystapienieOklauzule: "",
// wniosekMajatku: "",
// sygnAktWyjawienia: "",
// orzeczenieWyjawienia: "",
// etapPostEgz: "",
// uwagi: "",
// przekazanoDoDP: "",
// radcaPrawny: "",
// rozliczoneZastepstwa: ""
//   },
//   errors: {}
// };
// componentWillMount() {
//   this.setState({ data: this.props.data });
// }
