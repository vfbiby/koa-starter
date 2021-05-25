import mongoose from 'mongoose';
const User = require('./User');

describe('User Model', () => {
    beforeEach(() => {
        mongoose.connect('mongodb://localhost:27017/zhubo', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    it('should return empty array when user collection is not filled', async () => {
        const users = await User.find();
        users.should.deep.equal([]);
    });

    it('should store data', async () => {
        await new User({ name: 'vfbiby' }).save();
        const user = await User.find({ name: 'vfbiby' });
        user.toString().should.include('vfbiby');
    });

    afterEach(() => {
        mongoose.connection.db.dropCollection('users');
    });
});
