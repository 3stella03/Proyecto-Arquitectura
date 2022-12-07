import { SubjectModel } from "./subject.model";

export class AlumnoModel {
    constructor(
        public _id:   string,
        public nombre:  string,
        public nlista:  string,
        public asignaturas: SubjectModel[],
        public __v: number
    ){}
}
