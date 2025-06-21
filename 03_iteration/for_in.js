let obj = {
    name: "tusar pal",
    gmail: "tusarpal@gmail.com",
    ph: 976543234,
    address: {
        vill: "changual",
        dist: "paschim medinipur",
        state: "west bangal",
        pin: 721301
    }
};

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key);
    }
}
