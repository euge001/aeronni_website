const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default: {
        SECRET: 'PASS123',
        DATABASE: 'mongodb://localhost:27017/aeronni'
    }
}

exports.get = function get(env) {
    return config[env] || config.default
}