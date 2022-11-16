---
id: messageget
title: Message - Get
sidebar_label: Get
sidebar_position: 1
---

API to get single message

## Data

|         |     |                                                  |
| ------- | --- | ------------------------------------------------ |
| Method  | :   | GET                                              |
| URL     | :   | {host}/api/message/{message-id}                  |
| Example | :   | https://ocdev.ciptadrasoft.net/api/message/75684 |
| Return  | :   | JSON                                             |

## Header

|      Key      |     Value      |                                      Description                                      |
| :-----------: | :------------: | :-----------------------------------------------------------------------------------: |
| Authorization | Bearer {token} | This token be used as a mandatory parameter for each API, obtained from the token API |

## Parameter

|     Key      | Value | Description |
| :----------: | :---: | :---------: |
| {message-id} | 75684 | Message Id  |

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
   ```

  </p></details>
