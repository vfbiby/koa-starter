import mongoose from 'mongoose';
import User from './User';

describe('User Model', () => {
    beforeEach(async () => {
        await mongoose.connect('mongodb://localhost:27017/zhubo', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        clearDatabase();
    });

    it('应该在每次启动时返回空的collection', async () => {
        const users = await User.find();
        users.should.deep.equal([]);
    });

    it('应该存储在model上定义过的列', async () => {
        await new User({ name: 'vfbiby' }).save();
        const user = await User.find({ name: 'vfbiby' });
        user.toString().should.include('vfbiby');
    });

    it('应该忽略没有在model定义过的属性', async () => {
        await new User({ name: 'vfbiby', propertyNotOnTheModel: 20 }).save();
        const user = await User.find({ name: 'vfbiby' });
        user.toString().should.not.include(20);
    });
});

function clearDatabase(): void {
    mongoose.connection.db.dropCollection('users');
}
