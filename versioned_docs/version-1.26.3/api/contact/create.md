---
id: contactcreate
title: Contact - Create
sidebar_label: Create
sidebar_position: 3
---

API to add new contact

## Data

|         |     |                                                 |
| ------- | --- | ----------------------------------------------- |
| Method  | :   | POST                                            |
| URL     | :   | {host}/api/contactrz                            |
| Example | :   | https://onecloud.ciptadrasoft.net/api/contactrz |
| Body    | :   | JSON                                            |
| Return  | :   | JSON                                            |

## Header

|                 Key                 |                                                                                                                                                                          Value                                                                                                                                                                          |                                      Description                                      |
| :---------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| Authorization: Bearer &lt;token&gt; | Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJp<br/>c3MiOiJvbmVjbG91ZC5jaXB0YWRyYXNvZnQu<br/>bmV0Iiwic3ViIjoiNTUiLCJleHAiOjE1Nzg5ODY<br/>5NzcsIm5iZiI6MTUa3ODk4NjA3NywdfgiaWF0I<br/>joxNTc4OTg2MDc3LCJqdGkiOiI4emIwenEzYnlLR<br/>UtQQzF0d3FiZU1KVXZtckFiT3<br/>RtdzlBajNXYkhsYjBrPSIsInNpZCI6IjE2OSJ9.<br/>bpNCJaWghspRpKZkuTATc0qXWHMFMZJMF5j3KGm_DjI | This token be used as a mandatory parameter for each API, obtained from the token API |
|            Content-Type             |                                                                                                                                                                    application/json                                                                                                                                                                     | The MIME media type for JSON text is application/json. The default encoding is UTF-8. |

## Parameter

| Key | Value | Description |
| :-: | :---: | :---------: |
|  -  |   -   |      -      |

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
   	"Id": "31322",
   	"Name": "admin 22",
   	"Phone": "08567",
   	"Fax": "",
   	"Email": "dingirl@gmail.com",
   	"Mobile": "08567",
   	"TwitterId": "",
   	"FacebookId": "",
   	"Media": ""
   }
   ```

  </p></details>
