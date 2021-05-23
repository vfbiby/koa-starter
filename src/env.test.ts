describe('env', () => {
    it('should read env config from env file', () => {
        expect(process.env.DB_TEST).to.eq('127.0.0.1');
        expect(process.env.NODE_ENV).to.eq('test');
    });
});
