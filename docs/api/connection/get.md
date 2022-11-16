---
id: connectionget
title: Connection - Get
sidebar_label: Get
sidebar_position: 1
---

API to get single connection

## Data

|         |     |                                                   |
| ------- | --- | ------------------------------------------------- |
| Method  | :   | GET                                               |
| URL     | :   | {host}/api/connection/{connection-id}             |
| Example | :   | https://ocdev.ciptadrasoft.net/api/connection/583 |
| Return  | :   | JSON                                              |

## Header

|      Key      |     Value      |                                      Description                                      |
| :-----------: | :------------: | :-----------------------------------------------------------------------------------: |
| Authorization | Bearer {token} | This token be used as a mandatory parameter for each API, obtained from the token API |

## Parameter

|       Key       | Value |  Description  |
| :-------------: | :---: | :-----------: |
| {connection-id} |  587  | Connection Id |

## Response

1. **Code 401**

    <details><summary>Expired token</summary><p>

   ```jsx title="Body"
   {
   	"_meta": {
   			"status": "ERROR",
   			"count": 1
   	},
   	"records": {
   			"errorCode": 401,
   			"userMessage": "Expired token",
   			"devMessage": null,
   			"more": null,
   			"applicationCode": null
   	}
   }
   ```

  </p></details>

2. **Code 401**

    <details><summary>Over limit quota</summary><p>

   ```jsx title="Body"
   {
   	"_meta": {
   			"status": "ERROR",
   			"count": 1
   	},
   	"records": {
   			"errorCode": 401,
            “userMessage": "time limit reached please try again tomorrow at 18:00 - 06:00",
   			"devMessage": "",
   			"more": null,
   			"applicationCode": ""
   	}
   }
   ```

  </p></details>

3. **Code 200**

    <details><summary>Success</summary><p>

   ```jsx title="Body"
   {
    "Id": "583",
    "LastActivity": "sending...",
    "ActivityDate": "2019-04-26 07:39:46",
    "Position": null,
    "SiteId": "169",
    "MediaId": "FCBK",
    "ProviderId": "PVD12",
    "Code": null,
    "Name": "Mydin22",
    "UserId": "469218373611012",
    "Password": "EAAG73PZBL8q4BAIEGZCOcVLrREgSemRNpRWI94ePZCzcOoT4yHZBsSUGMEy9zwYERZADEdnfRsNQ1r4bPOxSCa07ksBYc9BYeY19wRK3HhWB9EpcNNlewJRAbgoKO69pkQQtvpUujNfs5odUO6JIIiDlpJSbgC75fQanUNLrkrxgfvlVxuvX2iaLOHT7604AZD",
    "Host": null,
    "Database": null,
    "Port": "0",
    "Url": null,
    "From": "469218373611012",
    "Token": "EAAG73PZBL8q4BAHeu0JZAZC877jXpPx2el0EsFZBQh0ygfatXzxuhBKZAZBfdfpkODPtOtgLe1ekvxhKpqDx07kMHr0XEWOloHxoVfN9CINhZATqPMA6TZB1r2Lom4pz4gnQR8tbeLJbCYbEIjLKENmBWoSZCeo6pdoP1o5CarawbdQhK4l9k1U9n",
    "StartDate": null,
    "EndDate": null,
    "Priority": "0",
    "Enabled": "1",
    "StatusId": "CNS1",
    "TargetId": "469218373611012",
    "TypeId": null,
    "ParentId": null,
    "Incoming": "0",
    "Outgoing": null,
    "CreateDate": "2018-12-27 05:36:22",
    "ModifyDate": "2019-11-29 09:23:04",
    "Error": "0",
    "Remarks": "",
    "AgentId": null
    }
   ```

  </p></details>
