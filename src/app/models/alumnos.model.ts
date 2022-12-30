import { AsignaturaModel } from "./asignatura.model";

export class AlumnoModel {
    constructor(
        public _id:   string,
        public nombre:  string,
        public nlista:  string,
        public asignaturas: AsignaturaModel[],
        public asistencia: string[],
        public __v: number
    ){}
}

