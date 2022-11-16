---
id: connectionfind
title: Connection - Find
sidebar_label: Find
sidebar_position: 2
---

API to find connections

## Data

|         |     |                                                           |
| ------- | --- | --------------------------------------------------------- |
| Method  | :   | GET                                                       |
| URL     | :   | {host}/api/connection?sinceId=                            |
| Example | :   | https://ocdev.ciptadrasoft.net/api/connection?sinceId=646 |
| Return  | :   | JSON                                                      |

## Header

|      Key      |     Value      |                                      Description                                      |
| :-----------: | :------------: | :-----------------------------------------------------------------------------------: |
| Authorization | Bearer {token} | This token be used as a mandatory parameter for each API, obtained from the token API |

## Parameter

|    Key     |      Value       |              Description               |
| :--------: | :--------------: | :------------------------------------: |
|  sinceId   |        10        |            Last message id             |
|   since    | 2020-01-01 00:00 |           Last created date            |
| lastUpdate | 2020-01-01 00:00 |           Last modified date           |
|   limit    |        10        | Limit the row to be taken (default 20) |
|   offset   |        0         |      Taken starting from the row       |
|   paging   |        0         |             Format paging              |

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
       "limit": 20,
       "offset": 0,
       "count": 1,
       "total": 1,
       "data": [
           {
               "Id": "647",
               "SiteId": "169",
               "MediaId": "INST",
               "ProviderId": "PVD28",
               "Code": null,
               "Name": "itzmyproduct",
               "UserId": "113734423801138",
               "Password": "EAAG73PZBL8q4BACaAO7eALsI5TaCImCnkAnRf566L0r9gPP0oeOxp8LTRnZBmOUD9FZAPM1GCUIlde01mn1S1fAspK7qt7CA3g5Wy0aF7CzN9vZCfkg0uIRs55M2DPD5ZCH6ZAJhyNr1NPjT9jhwOlkMCH6OEANNXLCpjjZAGEcWwZDZD",
               "Host": null,
               "Database": null,
               "Port": "0",
               "Url": null,
               "From": "3055212001267611",
               "Token": "EAAG73PZBL8q4BAKydYNp89JfwiZBUnLWbJWBNoHZAiZBQHzOpZBWERjhBwAhoXJKFW9IHACxyB2bgCcGJ3ZBZA6YkMODKANaeRNNMz4uKk07UawzfF8ENZBWh38MxIzPY7nrPjhWcS7pa2XG4GzXvWoinNP8v8fiTNocYMiwzzNcEcGLpYEWZCXK7",
               "StartDate": null,
               "EndDate": null,
               "Priority": "1",
               "Enabled": "1",
               "Error": "0",
               "Remarks": null,
               "StatusId": "CNS1",
               "TargetId": "3055212001267611",
               "TypeId": null,
               "ParentId": null,
               "LastActivity": null,
               "ActivityDate": null,
               "Position": null,
               "Incoming": null,
               "Outgoing": null,
               "AgentId": null,
               "CreateDate": "2020-09-08 10:47:01",
               "ModifyDate": "2020-09-08 10:47:01"
           }
       ]
   }
   ```

  </p></details>
