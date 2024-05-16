interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string //it return string
    getCoupon(couponname: string, value: number): number
}

//reopening of interface (inherit)
interface User {
    githubToken: string
}


const hitesh = { dbId: 22, email: "h@h.com", userId: 2211,
githubToken: "github",
startTrail: (name: "hitesh10", off: 10) => {
    return name
},
getCoupon: () => {
    return 10
}
}
hitesh.email = "h@hc.com"
// hitesh.dbId = 33


interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const hiteshExtend: Admin = { dbId: 22, email: "h@h.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "hitesh10", off: 10) => {
    return 10
}
}

export {}