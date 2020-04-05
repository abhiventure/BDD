$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyTest1.feature");
formatter.feature({
  "line": 1,
  "name": "Reset functionality on login page of Application",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Verification of reset button with numbers of credential",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open the Firefox and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter the Username \u003cusername\u003eand Password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Reset the credential",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;1"
    },
    {
      "cells": [
        "User1",
        "password1"
      ],
      "line": 17,
      "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Verification of reset button with numbers of credential",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open the Firefox and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter the Username User1and Password password1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Reset the credential",
  "keyword": "Then "
});
formatter.match({
  "location": "Tester.open_the_Firefox_and_launch_the_application()"
});
formatter.result({
  "duration": 20040793600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "1",
      "offset": 45
    }
  ],
  "location": "Tester.enter_the_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 350265600,
  "status": "passed"
});
formatter.match({
  "location": "Tester.reset_the_credential()"
});
formatter.result({
  "duration": 161991400,
  "status": "passed"
});
});