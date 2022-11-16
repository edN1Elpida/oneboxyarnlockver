---
id: tiketcreate
title: Tiket - Create
sidebar_label: Create
sidebar_position: 3
---

API to add new ticket

## Data

|         |     |                                                     |
| ------- | --- | --------------------------------------------------- |
| Method  | :   | POST                                                |
| URL     | :   | {host}/api/ticket/create                            |
| Example | :   | https://onecloud.ciptadrasoft.net/api/ticket/create |
| Body    | :   | -                                                   |
| Return  | :   | JSON                                                |

## Header

|                 Key                 |                                                                                                                                                                            Value                                                                                                                                                                             |                                      Description                                      |
| :---------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| Authorization: Bearer &lt;token&gt; | Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.<br/>eyJpc3MiOiJvbmVjbG91ZC5jaXB0YWRyYXN<br/>vZnQubmV0Iiwic3ViIjoiNTUiLCJle<br/>HAiOjE1Nzg5ODY5NzcsIm5iZiI6MTUa3ODk4N<br/>jA3NywdfgiaWF0IjoxNTc4OTg2MDc3LCJq<br/>dGkiOiI4emIwenEzYnlLRUtQQzF0d3FiZU1<br/>KVXZtckFiT3RtdzlBajNXYkhsYjBrPSIsIn<br/>NpZCI6IjE2OSJ9.bpNCJaWghspRpKZkuTATc0qXWHMFM<br/>ZJMF5j3KGm_DjI | This token be used as a mandatory parameter for each API, obtained from the token API |
|            Content-Type             |                                                                                                                                                                       application/json                                                                                                                                                                       | The MIME media type for JSON text is application/json. The default encoding is UTF-8. |

## Parameter

|    Key     |                             Value                             | Mandatory |                                        Description                                         |
| :--------: | :-----------------------------------------------------------: | :-------: | :----------------------------------------------------------------------------------------: |
|  fullName  |                         Agung Januar                          |     Y     |                                     Customer full name                                     |
|  contact   |                        agung@email.com                        |     Y     |                                       Email address                                        |
|  subject   |                      Subscribe to onebox                      |     Y     |                                   Purpose of contacting                                    |
|  category  |                            Request                            |     Y     |                                   Category of contacting                                   |
|  content   | Hello, I want to subscribe to onebox, how to do it? thank you |     Y     |                                 Description of contacting                                  |
| attachment |                         (brocure.jpg)                         |     N     |                               Attachment of the description                                |
|    file    |                        (pricelist.jpg)                        |     N     | Additional file/ attachment. Support office file (doc,xls,pdf, etc), image file (jpg, png) |
| coordinate |                      37.0625,-95.677068                       |     N     |                                    Latitude, Longitude                                     |

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
    		"response_code": "200",
    		"response_status": "Success",
    		"ticketId": "515090"
    	}
    ```

    </p></details>
