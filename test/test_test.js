/**
 * Created by doub on 2015/9/25 0025.
 */
var assert = require("assert");
describe('Array', function() {
    var vleft = require('../src/components/v-left.vue')
    it('should be a function',function(){
        assert.equal('function',typeof vleft.methods.expandList)
    })
});