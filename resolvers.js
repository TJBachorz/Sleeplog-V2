const dayjs = require('dayjs');

const { Sleeplog, User } = require('./models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const JWT_SECRET = require('./constants');

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

            return {
                userId: user.id,
                token: jsonwebtoken.sign({ id: user.id, email: user.email }, JWT_SECRET, {
                    expiresIn: "1d",
                })
            }
        },

        async newSleeplog(_, { 
            nightOfDate,
            bedtime,
            sleepDate,
            approximateSleepTime,
            sleepInterrupted,
            sleepLostFromInterruptions,
            wakeUpDate,
            wakeUpTime,
            ateSpicy,
            drankAlcohol,
            sleepMeds,
            userId,
            notes
        }) {

            const sleepDatetime = dayjs(sleepDate + ' ' + approximateSleepTime);
            const wakeDatetime = dayjs(wakeUpDate + ' ' + wakeUpTime);

            let points = (wakeDatetime.diff(sleepDatetime, 'h', true) - sleepLostFromInterruptions).toFixed(2);
            if (points < 0) {
                points = 0;
            }

            return Sleeplog.create({
                nightOfDate,
                bedtime,
                sleepDate,
                approximateSleepTime,
                sleepInterrupted,
                sleepLostFromInterruptions,
                wakeUpDate,
                wakeUpTime,
                ateSpicy,
                drankAlcohol,
                sleepMeds,
                userId,
                notes,
                points
            });
        },
    },
};

module.exports = resolvers;