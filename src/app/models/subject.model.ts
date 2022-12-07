import { AsistenciaModel } from "./asistencia.model";
import { NotaModel } from "./nota.model";

export class SubjectModel {
    constructor(
        public _id:        string,
        public nombre:     string,
        public notas:      NotaModel[],
        public asistencia: AsistenciaModel[],
    ){}
}
