---
id: tiketget
title: Tiket - Get
sidebar_label: Get
sidebar_position: 1
---

API to get single ticket

## Data

|         |     |                                                     |
| ------- | --- | --------------------------------------------------- |
| Method  | :   | GET                                                 |
| URL     | :   | {host}/api/ticketrz/&lt;ticket-id>                  |
| Example | :   | https://onecloud.ciptadrasoft.net/api/ticketrz/1212 |
| Return  | :   | JSON                                                |

## Header

|                 Key                 |                                                                                                                                                            Value                                                                                                                                                            | Description                                                                           |
| :---------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------ |
| Authorization: Bearer &lt;token&gt; | Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9. eyJpc3MiOiJvbmVjbG91ZC5jaXB0YWRyYXN vZnQubmV0Iiwic3ViIjoiNTUiLCJleHAiO jE1Nzg5ODY5NzcsIm5iZiI6MTUa3ODk4NjA3Ny wdfgiaWF0IjoxNTc4OTg2MDc3LCJqdGk iOiI4emIwenEzYnlLRUtQQzF0d3FiZ U1KVXZtckFiT3RtdzlBajNXYkhsYjBrPSIsInNpZCI6IjE2OSJ9. bpNCJaWghspRpKZkuTATc0qXWHMFMZJMF5j3KGm_DjI | This token be used as a mandatory parameter for each API, obtained from the token API |

## Parameter

| Key               | Value | Description |
| :---------------- | :---: | :---------: |
| &lt;ticket-id&gt; | 1234  |  Ticket Id  |

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
   	"errorCode": "401",
   	"userMessage": "time limit reached please try again tomorrow at 18:00 - 06:00",
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
   		"Id": "1234",
   		"SiteId": "169",
   		"Requestor": "31329",
   		"Assignee": null,
   		"Cc": null,
   		"Subject": "brosur",
   		"Content": "xxx",
   		"Description": "",
   		"Solution": null,
   		"Remarks": "",
   		"ProductId": null,
   		"ProjectId": null,
   		"RegionId": null,
   		"ContactId": "31329",
   		"PriorityId": "TP1",
   		"PriorityValue": "0",
   		"CategoryId": "332",
   		"Progress": "0",
   		"OrganizationId": "245",
   		"BranchId": null,
   		"DueDate": null,
   		"ViewDate": "2017-07-10 07:48:55",
   		"OpenDate": "2017-07-12 09:18:16",
   		"OpenUser": "268",
   		"ReOpenDate": null,
   		"SolveDate": null,
   		"CloseDate": "2018-10-17 01:53:21",
   		"PendingDate": null,
   		"Comment": "1",
   		"Viewer": "268",
   		"LocationId": null,
   		"MessageId": "53370",
   		"TypeId": "TT1",
   		"MediaId": "EMAIL",
   		"StatusId": "TS7",
   		"Responder": "268",
   		"Handler": null,
   		"CommentDate": "2017-07-10 07:08:46",
   		"UnseenComment": "0",
   		"IsAgentSaveContact": "1",
   		"ModifyDate": "2018-10-17 01:53:21",
   		"ResponseTime": null,
   		"ResolutionTime": "40070675",
   		"HandlingTime": null,
   		"WaitingTime": null,
   		"CloseUser": "55",
   		"SolveUser": "55",
   		"StatusDate": "2018-10-17 01:53:21",
   		"Modifier": "55",
   		"Creator": "1",
   		"CreateDate": "2017-07-10 07:08:46",
   		"ExpireDate": "3000-01-01 00:00:00",
   		"AssignDate": null,
   		"AssigneeList": "268",
   		"AssigneeTextList": "admin22"
   	}
   ```

  </p></details>
