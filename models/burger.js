const orm = require('../config/orm.js');

const burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.insertOne("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: function (id, cb) {
        let condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;