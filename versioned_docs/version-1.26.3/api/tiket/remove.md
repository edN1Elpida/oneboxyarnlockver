---
id: tiketremove
title: Tiket - Remove
sidebar_label: Remove
sidebar_position: 5
---

API to remove existing ticket

## Data

|         |     |                                                    |
| ------- | --- | -------------------------------------------------- |
| Method  | :   | DELETE                                             |
| URL     | :   | {host}/api/ticketrz/&lt;ticket-id>                 |
| Example | :   | https://onecloud.ciptadrasoft.net/api/ticketrz/121 |
| Return  | :   | JSON                                               |

## Header

|                 Key                 |                                                                                                                                                                            Value                                                                                                                                                                             |                                      Description                                      |
| :---------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| Authorization: Bearer &lt;token&gt; | Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.<br/>eyJpc3MiOiJvbmVjbG91ZC5jaXB0YWRyYXN<br/>vZnQubmV0Iiwic3ViIjoiNTUiLCJle<br/>HAiOjE1Nzg5ODY5NzcsIm5iZiI6MTUa3ODk4N<br/>jA3NywdfgiaWF0IjoxNTc4OTg2MDc3LCJq<br/>dGkiOiI4emIwenEzYnlLRUtQQzF0d3FiZU1<br/>KVXZtckFiT3RtdzlBajNXYkhsYjBrPSIsIn<br/>NpZCI6IjE2OSJ9.bpNCJaWghspRpKZkuTATc0qXWHMFM<br/>ZJMF5j3KGm_DjI | This token be used as a mandatory parameter for each API, obtained from the token API |

## Parameter

| Key | Value | Description |
| :-: | :---: | :---------: |
| {1} | 1234  | Contact Id  |

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
   }
   ```

  </p></details>
