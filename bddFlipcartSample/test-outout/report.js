$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Implementation/Cucumber/FlipcartSample/bddFlipcartSample/src/main/java/Features/first.feature");
formatter.feature({
  "id": "flipcart-sample",
  "description": "",
  "name": "FlipCart Sample",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "flipcart-sample;search,-filter-and-get-first-product",
  "tags": [
    {
      "name": "@First",
      "line": 3
    }
  ],
  "description": "",
  "name": "Search, filter and get first product",
  "keyword": "Scenario Outline",
  "line": 4,
  "type": "scenario_outline"
});
formatter.step({
  "name": "flip cart url is loaded",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "verify the flipcart title",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "search criteria is \"\u003csearch\u003e\"",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "filter brand search \"\u003cbrandfilterkey\u003e\" and \"\u003cbrandfiltervalue\u003e\"",
  "keyword": "Then ",
  "line": 8
});
formatter.step({
  "name": "filter ram value \"\u003cramfiltervalue\u003e\"",
  "keyword": "Then ",
  "line": 9
});
formatter.examples({
  "id": "flipcart-sample;search,-filter-and-get-first-product;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 12,
  "rows": [
    {
      "id": "flipcart-sample;search,-filter-and-get-first-product;;1",
      "cells": [
        "search",
        "brandfilterkey",
        "brandfiltervalue",
        "ramfiltervalue"
      ],
      "line": 13
    },
    {
      "id": "flipcart-sample;search,-filter-and-get-first-product;;2",
      "cells": [
        "mobile",
        "Gi",
        "Gionee",
        "2 GB"
      ],
      "line": 14
    }
  ]
});
formatter.before({
  "duration": 231680,
  "status": "passed"
});
formatter.before({
  "duration": 82347,
  "status": "passed"
});
formatter.before({
  "duration": 80640,
  "status": "passed"
});
formatter.scenario({
  "id": "flipcart-sample;search,-filter-and-get-first-product;;2",
  "tags": [
    {
      "name": "@First",
      "line": 3
    }
  ],
  "description": "",
  "name": "Search, filter and get first product",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "flip cart url is loaded",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "verify the flipcart title",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "search criteria is \"mobile\"",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "filter brand search \"Gi\" and \"Gionee\"",
  "keyword": "Then ",
  "line": 8,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "filter ram value \"2 GB\"",
  "keyword": "Then ",
  "line": 9,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "location": "StepDefinition.this_is_the_first_step()"
});
formatter.result({
  "duration": 111234796,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.this_is_the_second_step()"
});
formatter.result({
  "duration": 52053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 20
    }
  ],
  "location": "StepDefinition.this_is_the_third_step(String)"
});
formatter.result({
  "duration": 1885436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gi",
      "offset": 21
    },
    {
      "val": "Gionee",
      "offset": 30
    }
  ],
  "location": "StepDefinition.this_is_the_fourth_step(String,String)"
});
formatter.result({
  "duration": 134826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 18
    }
  ],
  "location": "StepDefinition.this_is_the_fifth_step(String)"
});
formatter.result({
  "duration": 88319,
  "status": "passed"
});
formatter.after({
  "duration": 47360,
  "status": "passed"
});
formatter.after({
  "duration": 41813,
  "status": "passed"
});
formatter.after({
  "duration": 39253,
  "status": "passed"
});
});