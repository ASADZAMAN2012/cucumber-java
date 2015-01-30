$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("artOfTesting\\test\\googleCalc.feature");
formatter.feature({
  "line": 1,
  "name": "Check addition in Google calculator",
  "description": " In order to verify that google calculator work correctly\r\n As a user of google\r\n I should be able to get correct addition result",
  "id": "check-addition-in-google-calculator",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Addition",
  "description": "",
  "id": "check-addition-in-google-calculator;addition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I open google",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter \"2+2\" in search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get result as \"4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "googleCalcStepDefinition.I_open_google()"
});
formatter.result({
  "duration": 982992387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2+2",
      "offset": 9
    }
  ],
  "location": "googleCalcStepDefinition.I_enter_in_search_textbox(String)"
});
formatter.result({
  "duration": 307496912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "googleCalcStepDefinition.I_should_get_correct_result(String)"
});
formatter.result({
  "duration": 833898665,
  "status": "passed"
});
});