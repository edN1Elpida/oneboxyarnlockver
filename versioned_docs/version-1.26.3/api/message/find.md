---
id: messagefind
title: Message - Find
sidebar_label: Find
sidebar_position: 2
---

API to find message

## Data

|         |     |                                                          |
| ------- | --- | -------------------------------------------------------- |
| Method  | :   | GET                                                      |
| URL     | :   | {host}/api/message?sinceId=                              |
| Example | :   | https://ocdev.ciptadrasoft.net/api/message?sinceId=75684 |
| Return  | :   | JSON                                                     |

## Header

|      Key      |     Value      |                                      Description                                      |
| :-----------: | :------------: | :-----------------------------------------------------------------------------------: |
| Authorization | Bearer {token} | This token be used as a mandatory parameter for each API, obtained from the token API |

## Parameter

|    Key     |      Value       |              Description               |
| :--------: | :--------------: | :------------------------------------: |
|  sinceId   |      75684       |            Last message id             |
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
   ,
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
   	"count": 2,
   	"total": 1076,
   	"data": [
   		{
   			"Id": "75702",
   			"SiteId": "169",
   			"ConnectionId": "584",
   			"Subject": "Message subject",
   			"Description": null,
   			"Remarks": null,
   			"Date": null,
   			...
   			“Content”: { … },
   			“Conversation”: { … },
   			“Attachments: { … }
   		}
   			]
   		}
   ```

  </p></details>
