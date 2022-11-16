---
id: tiketfind
title: Tiket - Find
sidebar_label: Find
sidebar_position: 2
---

API to find tickets

## Data

|         |     |                                                                            |
| ------- | --- | -------------------------------------------------------------------------- |
| Method  | :   | GET                                                                        |
| URL     | :   | {host}/api/ticketrz?sinceId=&limit=&offset=                                |
| Example | :   | https://onecloud.ciptadrasoft.net/api/ticketrz?sinceId=1&limit=10&offset=0 |
| Return  | :   | JSON                                                                       |

## Header

|                 Key                 |                                                                                                                                                                               Value                                                                                                                                                                               |                                      Description                                      |
| :---------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| Authorization: Bearer &lt;token&gt; | Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.<br/>eyJpc3MiOiJvbmVjbG91ZC5jaXB0YWRyYXNvZ<br/>nQubmV0Iiwic3ViIjoiNTUiLCJleHAiOjE1<br/>Nzg5ODY5NzcsIm5iZiI6MTUa3ODk4NjA3Ny<br/>wdfgiaWF0IjoxNTc4OTg2MDc3LCJqdG<br/>kiOiI4emIwenEzYnlLRUtQQzF0d3FiZU1KV<br/>XZtckFiT3RtdzlBajNXYkhsYjBr<br/>PSIsInNpZCI6IjE2OSJ9.<br/>bpNCJaWghspRpKZkuTATc0q<br/>XWHMFMZJMF5j3KGm_DjI | This token be used as a mandatory parameter for each API, obtained from the token API |

## Paramter

|   Key   | Value |              Description               |
| :-----: | :---: | :------------------------------------: |
| sinceId |   1   |               Last date                |
|  limit  |   2   | Limit the row to be taken (default 20) |
| offset  |   0   |      Taken starting from the row       |
| paging  |   0   |             Format paging              |

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
   	"limit": "2",
   	"offset": 0,
   	"count": 3,
   	"total": 1914,
   	"data": [
   		{
   			"Id": "12250",
   			"Requestor": "Dinni",
   			"Assignee": "admin22",
   			"Subject": "brosur",
   			"Description": "",
   			"Viewer": "268",
   			"DueDate": null,
   			"CreateDate": "2017-07-10 07:08:46",
   			"ModifyDate": "2018-10-17 01:53:21",
   			"Media": "Email",
   			"Product": null,
   			"Region": null,
   			"Category": "Question",
   			"Status": "Closed",
   			"Priority": "Low",
   			"Attachments": [],
   			"Tags": ""
   		},
   		{
   			"Id": "12254",
   			"Requestor": "Nunik",
   			"Assignee": "admin22",
   			"Subject": "request brosur 30 exmplr",
   			"Description": "",
   			"Viewer": "268",
   			"DueDate": "2017-07-12 17:00:00",
   			"CreateDate": "2017-07-10 07:58:13",
   			"ModifyDate": "2018-10-17 01:53:29",
   			"Media": "Walk In",
   			"Product": null,
   			"Region": null,
   			"Category": "Question",
   			"Status": "Closed",
   			"Priority": "Low",
   			"Attachments": [],
   			"Tags": ""
   		},
   		{
   			"Id": "12272",
   			"Requestor": "wiwiw",
   			"Assignee": "admin22",
   			"Subject": "sddf",
   			"Description": "Junk",
   			"Viewer": "268",
   			"DueDate": "2017-07-12 17:00:00",
   			"CreateDate": "2017-07-11 07:20:51",
   			"ModifyDate": "2018-10-17 01:53:41",
   			"Media": "LiveChat",
   			"Product": null,
   			"Region": null,
   			"Category": "Other",
   			"Status": "Closed",
   			"Priority": "Low",
   			"Attachments": [],
   			"Tags": ""
   		}
   	]
   }
   ```

  </p></details>
