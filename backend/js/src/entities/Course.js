export class Course {
    constructor(id, name, description, link, expired) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.link = link;
        this.expired = expired;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getLink() {
        return this.link;
    }
    getExpired() {
        return this.expired;
    }
}
