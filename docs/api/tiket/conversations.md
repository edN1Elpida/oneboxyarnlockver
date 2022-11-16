---
id: tiketconversations
title: Tiket - Conversations
sidebar_label: Conversations
sidebar_position: 6
---

Able to provide API to view certain ticket conversations

## Data

|         |     |                                                                 |
| ------- | --- | --------------------------------------------------------------- |
| Method  | :   | GET                                                             |
| URL     | :   | {host}/api/ticket/conversations/&lt;ticket-id>                  |
| Example | :   | https://onecloud.ciptadrasoft.net/api/ticket/conversations/1212 |
| Return  | :   | JSON                                                            |

## Header

|                 Key                 |                                                                                                                                                                            Value                                                                                                                                                                             |                                      Description                                      |
| :---------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| Authorization: Bearer &lt;token&gt; | Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.<br/>eyJpc3MiOiJvbmVjbG91ZC5jaXB0YWRyYXN<br/>vZnQubmV0Iiwic3ViIjoiNTUiLCJle<br/>HAiOjE1Nzg5ODY5NzcsIm5iZiI6MTUa3ODk4N<br/>jA3NywdfgiaWF0IjoxNTc4OTg2MDc3LCJq<br/>dGkiOiI4emIwenEzYnlLRUtQQzF0d3FiZU1<br/>KVXZtckFiT3RtdzlBajNXYkhsYjBrPSIsIn<br/>NpZCI6IjE2OSJ9.bpNCJaWghspRpKZkuTATc0qXWHMFM<br/>ZJMF5j3KGm_DjI | This token be used as a mandatory parameter for each API, obtained from the token API |

## Parameter

| Key | Value | Description |
| :-: | :---: | :---------: |
| {1} | 1234  |  Ticket Id  |

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
    "type": "message",
    "ticketId": "515090",
    "data": [{
        "Id": "2325772",
        "SiteId": "188",
        "ConnectionId": "630",
        "ObjectName": "Ticket",
        "ObjectId": "515090",
        "Subject": "Hello onebox",
        "Description": null,
        "Remarks": null,
        "Date": "2020-05-05 04:27:55",
        "ReceiveDate": "2020-05-05 04:27:55",
        "SendDate": null,
        "MediaId": "FCBK",
        "MethodId": "COMMENT",
        "PriorityValue": "0",
        "PriorityId": "MSP1",
        "TypeId": "MST2",
        "SecrecyId": null,
        "Incoming": "1",
        "From": "2771729186289939",
        "To": "143313725685117",
        "Cc": null,
        "Bcc": null,
        "StatusId": "MSS3",
        "Retry": "0",
        "Attachment": "0",
        "BatchId": null,
        "Spam": "0",
        "Processing": 1,
        "RemoteId": "3668099256539862_3668284189854702",
        "ParentId": null,
        "PreviousId": "2325221",
        "SourceId": null,
        "CreateDate": "2020-05-05 04:27:59",
        "Creator": "1",
        "ModifyDate": "2020-05-05 04:27:59",
        "Modifier": 1,
        "ExpireDate": "3000-01-01 00:00:00",
        "ViewDate": null,
        "ConversationId": "1244514",
        "Reply": "0",
        "PrevRemoteId": "143313725685117_3668099256539862",
        "ParentRemoteId": null,
        "Content": "Hello onebox",
        "Contents": [{
            "Id": "2325772",
            "ObjectName": null,
            "ObjectId": null,
            "Body": "Hello onebox",
            "BodyText": "Hello onebox",
            "Meta": null,
            "TemplateId": null,
            "ContentType": "text\/html",
            "Encoding": null
        }],
        "FromName": "Agung Januar"
    },{
        "type": "message",
        "ticketId": "515090",
        "data": [{
            "Id": "2325772",
            "SiteId": "188",
            "ConnectionId": "630",
            "ObjectName": "Ticket",
            "ObjectId": "515090",
            "Subject": "Hello onebox",
            "Description": null,
            "Remarks": null,
            "Date": "2020-05-05 04:27:55",
            "ReceiveDate": "2020-05-05 04:27:55",
            "SendDate": null,
            "MediaId": "FCBK",
            "MethodId": "COMMENT",
            "PriorityValue": "0",
            "PriorityId": "MSP1",
            "TypeId": "MST2",
            "SecrecyId": null,
            "Incoming": "0",
            "From": "143313725685117",
            "To": "2771729186289939",
            "Cc": null,
            "Bcc": null,
            "StatusId": "MSS3",
            "Retry": "0",
            "Attachment": "0",
            "BatchId": null,
            "Spam": "0",
            "Processing": 1,
            "RemoteId": "3668099256539862_3668284189854702",
            "ParentId": null,
            "PreviousId": "2325221",
            "SourceId": null,
            "CreateDate": "2020-05-05 04:27:59",
            "Creator": "1",
            "ModifyDate": "2020-05-05 04:27:59",
            "Modifier": 1,
            "ExpireDate": "3000-01-01 00:00:00",
            "ViewDate": null,
            "ConversationId": "1244514",
            "Reply": "0",
            "PrevRemoteId": "143313725685117_3668099256539862",
            "ParentRemoteId": null,
            "Content": "Ada yang bisa kami bantu?",
            "Contents": [{
                "Id": "2325772",
                "ObjectName": null,
                "ObjectId": null,
                "Body": "Ada yang bisa kami bantu",
                "BodyText": "Ada yang bisa kami bantu",
                "Meta": null,
                "TemplateId": null,
                "ContentType": "text\/html",
                "Encoding": null
            }],
            "FromName": null
          }]
        }]
    }
   ```

  </p></details>
