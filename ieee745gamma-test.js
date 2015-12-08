var vows = require('vows');
var assert = require('assert');

var g = require('./ieee745gamma');

vows.describe('IEEE-754 lngamma').addBatch({
   'Gamma':{
      topic: [
              g.gamma(-177.5),
              g.gamma(-177.4),
              g.gamma(-171.1),
              g.gamma(-0.5),
              g.gamma(-1),
              g.gamma(0),
              g.gamma(1),
              g.gamma(2),
              g.gamma(3),
              g.gamma(11),
              g.gamma(171.6),
              g.gamma(171.7)
             ],
      'gamma(-177.5) (subnormal output)': function (x){
        assert.equal (x[0], 5e-324);
      },
      'gamma(-177.4) (subnormal output)': function (x){
        assert.equal (x[1], 1e-323);
      },
      'gamma(-171.1)': function (x){
        assert.equal (x[2], 4.897227395141096e-309);
      },
      'gamma(-0.5)': function (x){
        assert.equal (x[3], 3.5449077018110318);
      },
      'gamma(-1)': function (x){
        assert.equal (x[4], Infinity);
      },
      'gamma(0)': function (x){
        assert.equal (x[5], Infinity);
      },
      'gamma(1)': function (x){
        assert.equal (x[6], 1);
      },
      'gamma(2)': function (x){
        assert.equal (x[7], 1);
      },
      'gamma(3)': function (x){
        assert.equal (x[8], 2);
      },
      'gamma(11)': function (x){
        assert.equal (x[9], 3628800.0000000084);
      },
      'gamma(171.6)': function (x){
        assert.equal (x[10], 1.5858969096672583e+308);
      },
      'gamma(171.7)': function (x){
        assert.equal (x[11], Infinity);
      }
    },
    'LnGamma':{
      topic: [
               g.lngamma(-99999999999999.98),
               g.lngamma(-2.5),
               g.lngamma(-1.5),
               g.lngamma(-1e-323),
               g.lngamma(-5e-324),
               g.lngamma(-0.5),
               g.lngamma(0),
               g.lngamma(1),
               g.lngamma(2),
               g.lngamma(3),
               g.lngamma(1.0000000000000005e+305)
             ],
      'lngamma(-99999999999999.98)': function (x){
        assert.equal (x[0], -3123619130191676.5);
      },
      'lngamma(-2.5)': function (x){
        assert.equal (x[1], -0.05624371649767412);
      },
      'lngamma(-1.5)': function (x){
        assert.equal (x[2], 0.8600470153764809);
      },
      'lngamma(-1e-323) (subnormal input)': function (x){
        assert.equal (x[3], 743.7469247408213);
      },
      'lngamma(-5e-324) (subnormal input)': function (x){
        assert.equal (x[4], 744.4400719213812);
      },
      'lngamma(-0.5)': function (x){
        assert.equal (x[5], 1.2655121234846454);
      },
      'lngamma(0)': function (x){
        assert.equal (x[6], Infinity);
      },
      'lngamma(1)': function (x){
        assert.equal (x[7], 0);
      },
      'lngamma(2)': function (x){
        assert.equal (x[8], 0);
      },
      'lngamma(3)': function (x){
        assert.equal (x[9], 0.6931471805599453);
      },
      'lngamma(1.0000000000000005e+305)': function (x){
        assert.equal (x[10], 7.012884533631844e+307);
      }
    }

}).export(module);
