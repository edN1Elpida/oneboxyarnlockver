---
id: newscreate
title: News - Create
sidebar_label: Create
sidebar_position: 1
---

API to add new news

## Data

|         |     |                                                   |
| ------- | --- | ------------------------------------------------- |
| Method  | :   | POST                                              |
| URL     | :   | {host}/api/news/create                            |
| Example | :   | https://onecloud.ciptadrasoft.net/api/news/create |
| Body    | :   | -                                                 |
| Return  | :   | JSON                                              |

## Header

|                 Key                 |                                                                                                                                                                          Value                                                                                                                                                                          |                                      Description                                      |
| :---------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| Authorization: Bearer &lt;token&gt; | Bearer eyJ0eXAiOiJKV1QiLCJhbGciOi<br/>JIUzI1NiJ9.eyJpc3MiOiJvbmVjbG91ZC5jaXB0YWRyYX<br/>NvZnQubmV0Iiwic3ViIjoiNTUiLCJleHAiOjE1Nzg5ODY5<br/>NzcsIm5iZiI6MTUa3ODk4NjA3NywdfgiaWF0IjoxNTc4<br/>OTg2MDc3LCJqdGkiOiI4emIwenEzYnlLRUtQQzF0d3F<br/>iZU1KVXZtckFiT3RtdzlBajNXYkhsYjBrPSIsInNpZCI6IjE<br/>2OSJ9.bpNCJaWghspRpKZkuTATc0qXWHM<br/>FMZJMF5j3KGm_DjI | This token be used as a mandatory parameter for each API, obtained from the token API |
|            Content-Type             |                                                                                                                                                                    application/json                                                                                                                                                                     | The MIME media type for JSON text is application/json. The default encoding is UTF-8. |

## Parameter

|     Key     |                                                     Value                                                      | Mandatory |                Description                |
| :---------: | :------------------------------------------------------------------------------------------------------------: | :-------: | :---------------------------------------: |
|  MediaDate  |                                              2020-07-21 21:08:00                                               |     Y     |   Tanggal waktu kejadian (Y-m-d H:i:s)    |
|   Subject   |                                   Kodim 0504 Jaksel Gelar Vaksinasi COVID-19                                   |     Y     |               judul berita                |
| Description |                                             Create Ticket From API                                             |     Y     |             Deskripsi berita              |
|   Content   | https://news.detik.com/berita/d-5477312/kodim-0504-jaksel-gelar-vaksinasi-covid-19-untuk-prajurit-asn-hari-ini |     Y     |               URL Referensi               |
|   Remarks   |                                            Kadek Melda - detikNews                                             |     Y     |               Sumber berita               |
|  RegionId   |                                                      113                                                       |     Y     | Id wilayah kejadian (cth: 113=Jawa Barat) |
|  Location   |                                             Kodim Jakarta Selatan                                              |     Y     |           nama lokasi kejadian            |
| Coordinate  |                                        106.83403778076, -6.36801147461                                         |     Y     |                 Long, Lat                 |
|    Actor    |                                    Kolonel Ucu Yustiana, Kepala Kodim 0504                                     |     Y     |     tokoh/ aktor, separator by comma      |
|     Tag     |                                           ASN, COVID-19, Kodim 0504                                            |     Y     |      tag berita, separator by comma       |
|   RefKey    |                                                      123                                                       |     Y     |              Nomor referensi              |

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
