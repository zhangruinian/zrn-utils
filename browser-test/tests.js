// 浏览器环境下的测试
var expect = chai.expect;

// 测试 使用成功
describe('数组加法的测试', function() {
    it('[1,2,3,5]等于 11', function() {
        expect(sumArr([1,2,3,5])).to.be.equal(11);
    });
});




