import mongoose from 'mongoose';
const User = require('./User');

describe('User Model', () => {
    beforeEach(async () => {
        await mongoose.connect('mongodb://localhost:27017/zhubo', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        clearDatabase();
    });

    it('should return empty array when user collection is not filled', async () => {
        const users = await User.find();
        users.should.deep.equal([]);
    });

    it('should store data which fields on the model', async () => {
        await new User({ name: 'vfbiby' }).save();
        const user = await User.find({ name: 'vfbiby' });
        user.toString().should.include('vfbiby');
    });

    it('should ingore column when saving the data', async () => {
        await new User({ name: 'vfbiby', propertyNotOnTheModel: 20 }).save();
        const user = await User.find({ name: 'vfbiby' });
        user.toString().should.not.include(20);
    });
});

function clearDatabase(): void {
    mongoose.connection.db.dropCollection('users');
}
