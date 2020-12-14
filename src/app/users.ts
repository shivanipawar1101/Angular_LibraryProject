export class Users {
    id: number;
    title: string;
    author: string;
    subject_category: string;
    constructor(id, title, author, subject_category) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.subject_category = subject_category;
    }
}
