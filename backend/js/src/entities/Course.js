export class Course {
    id;
    name;
    description;
    img;
    link;
    expired;
    constructor(id, name, description, link, expired, img) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.link = link;
        this.expired = expired;
        this.img = img;
    }
    getImg() {
        return this.img;
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
