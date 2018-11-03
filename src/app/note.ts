import {User} from './user';

export class Note {
    _id: String;
    userData:UserData = new UserData ;
    gestData: GestData = new GestData;
    idUser: String | User;
    statut: String = "en attente"; //"en attente", "acceptée" ou "refusée"
}
;
class UserData{
    intitule: String;
    montant: Number;
    devise: String;
    date: Date;
    commentaire: String;
}

class GestData{
    commentaire: String;
}
export class file {
    data: { data: any; type: String };
    contentType: string;
    name: string ;
}