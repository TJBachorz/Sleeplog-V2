const { Sleeplog, User } = require("./models");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const JWT_SECRET = require("./constants");

const resolvers = {
    Query: {
        async current(_, args, { user }) {
            if (user) {
                return await User.findOne({ where: { id: user.id } });
            }
            throw new Error("Sorry, you're not an authenticated user!");
        },

        async findSleeplog(_, { id }) {
            if (id) {
                return Sleeplog.findOne({ where: { id: id } });
            }
            throw new Error("Sleeplog not found")
        },

        async getSleeplogs(_, { id }) {
            if (id) {
                return Sleeplog.findAll({ where: { userId: id } });
            }
            throw new Error("Sleeplog not found")
        }
    },

    Mutation: {
        async register(_, { email, password }) {
            const user = await User.create({
                email,
                password: await bcrypt.hash(password, 10),
            });

            return jsonwebtoken.sign({ id: user.id, email: user.email }, JWT_SECRET, {
                expiresIn: "3m",
            });
        },

        async login(_, { email, password }) {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                throw new Error(
                    "This user doesn't exist. Please, make sure to type the right email."
                );
            }

            const valid = await bcrypt.compare(password, user.password);

            if (!valid) {
                throw new Error("You password is incorrect!");
            }

            return jsonwebtoken.sign({ id: user.id, email: user.email }, JWT_SECRET, {
                expiresIn: "1d",
            });
        },

        async newSleeplog(_, { 
            nightOfDate,
            bedtime,
            approximateSleepTime,
            sleepInterrupted,
            sleepLostFromInterruptions,
            wakeUpTime,
            ateSpicy,
            drankAlcohol,
            sleepMeds,
            userId,
            notes
        }) {
            return Sleeplog.create({
                nightOfDate,
                bedtime,
                approximateSleepTime,
                sleepInterrupted,
                sleepLostFromInterruptions,
                wakeUpTime,
                ateSpicy,
                drankAlcohol,
                sleepMeds,
                userId,
                notes
            });
        },
    },
};

module.exports = resolvers;