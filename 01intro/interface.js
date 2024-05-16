"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hitesh = { dbId: 22, email: "h@h.com", userId: 2211,
    githubToken: "github",
    startTrail: function (name, off) {
        return name;
    },
    getCoupon: function () {
        return 10;
    }
};
hitesh.email = "h@hc.com";
var hiteshExtend = { dbId: 22, email: "h@h.com", userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
