export class User {
        public _id: string;
        public firstname: string = '';
        public lastname: string = '';
        public email: string;
        public password: string;
        public createdAt: Date = new Date();
        public updatedAt: Date = new Date();
    constructor(){}
}
