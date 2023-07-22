class Bad_Request extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

module.exports = Bad_Request;