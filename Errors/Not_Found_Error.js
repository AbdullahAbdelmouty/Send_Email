class Not_Found_Error extends Error {
    constructor(message) {
        super(message);
        this.status = 404;
    }
}

module.exports = Not_Found_Error;