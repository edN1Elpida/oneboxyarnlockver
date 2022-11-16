---
id: messagecreate
title: Message - Create
sidebar_label: Create
sidebar_position: 3
---

API to create or send messages, etc..

## Data

|         |     |                                            |
| ------- | --- | ------------------------------------------ |
| Method  | :   | POST                                       |
| URL     | :   | {host}/api/message                         |
| Example | :   | https://ocdev.ciptadrasoft.net/api/message |
| Body    | :   | JSON                                       |
| Return  | :   | JSON                                       |

## Header

|      Key      |      Value       |                                      Description                                      |
| :-----------: | :--------------: | :-----------------------------------------------------------------------------------: |
| Authorization |  Bearer {token}  | This token be used as a mandatory parameter for each API, obtained from the token API |
| Content-Type  | application/json | The MIME media type for JSON text is application/json. The default encoding is UTF-8. |

## Parameter

| Key | Value | Description |
| :-: | :---: | :---------: |
|  -  |   -   |      -      |

## Body(Belom Fixs)

### Example

<details><summary>Body</summary><p>

```jsx title="Body"
{
	"ConnectionId": 572,
	"Subject": "Send via api - test 3",
	"From": "test1@onebox.co.id",
	"To": "unggul.wijayadi@gmail.com",
	"Cc": null,
	"Bcc": null,
	"ConversationId": null,
	"PreviousId": null,
	"PrevRemoteId": null,
	"Attachments": [
		{
			"Description": "adesc1",
			"File": {
				"Date": "2020-04-01 00:00:00",
				"Name": "file1.csv",
				"Content": "file content encoded as base64"
			}
		}
	],
	"Users": [{
			"IdentityId": "test1@onebox.co.id",
			"Name": "Onebox",
			"RoleId": "MSR1"
	}, {
			"IdentityId": "unggul.wijayadi@gmail.com",
			"Name": "Unggul W",
			"RoleId": "MSR2"
	}],
	"Content": {
		"Body": "Hello <html></html>",
		"BodyText": "Hello",
		"ContentType": "text/html",
		"Encoding": "UTF-8"
	}
}
```

</p></details>

### Description

<table>
    <tr>
        <th colspan="3">Key</th>
        <th>Value</th>
        <th>Mandatory</th>
        <th>Description</th>
    </tr>
    <tr>
        <td colspan="3">ConnectionId</td>
        <td>number</td>
        <td>Y</td>
        <td>Id of preregistered channel of communication, eg. Facebook, Instagram, Twitter, etc.<br/><br/>Please see below for details.</td>
    </tr>
    <tr>
        <td colspan="3">MethodId</td>
        <td>string</td>
        <td>Y</td>
        <td>Sub channel of communication, possible values:<br/>         - null<br/>- DIRECT<br/>- POST<br/>- MENTION<br/>- COMMENT</td>
    </tr>
    <tr>
        <td colspan="3">Subject</td>
        <td>string</td>
        <td>Y</td>
        <td>Subject of message</td>
    </tr>
    <tr>
        <td colspan="3">From</td>
        <td>string, depends on channel and method</td>
        <td>Y</td>
        <td>Id of messages sender:<br/>- Email: email address<br/>- Whatsapp: Whatsapp/ phone number<br/><details><summary>Facebook :</summary><p>a. Post: facebook user id<br/>b. Comment: facebook user id<br/>c. Private Message: facebook user id</p></details>- Instagram: instagram/fb user id<br/><details><summary>Twitter :</summary><p>a. Post: twitter screen name<br/>b. Mention: twitter screen name<br/>c. Reply: twitter screen name</p></details><br/>Please see below for example.</td>
    </tr>
    <tr>
        <td colspan="3">To</td>
        <td>string, depends on channel and method</td>
        <td>Y</td>
        <td>Id of messages recipient:<br/>- Email: email address<br/>- Whatsapp: Whatsapp/ phone number<br/><details><summary>Facebook :</summary><p>a. Post: facebook user id<br/>b. Comment: facebook user id<br/>c. Private Message: facebook user id</p></details>- Instagram: instagram/fb user id<br/><details><summary>Twitter : :</summary><p>a.  Post: twitter screen name<br/>b. Mention: twitter screen name<br/>c. Reply: twitter screen name</p></details><br/>Please see below for example.</td>
    </tr>
    <tr>
        <td colspan="3">Cc</td>
        <td>string, optional</td>
        <td>N</td>
        <td>Other message recipients, used only for email</td>
    </tr>
    <tr>
        <td colspan="3">Bcc</td>
        <td>string, optional</td>
        <td>N</td>
        <td>Other message recipients, used only for email</td>
    </tr>
    <tr>
        <td colspan="3">ConversationId</td>
        <td>number</td>
        <td>Y</td>
        <td>Id of conversations to participates to, used in:<br/> - Facebook Direct Message<br/> - Twitter Direct Message<br/> - Other (chatting type channels)<br/><br/>Mandatory only for the above interaction, which requires a private interaction reply </td>
    </tr>
    <tr>
        <td colspan="3">PreviousId</td>
        <td>number</td>
        <td>Y</td>
        <td>Id of message to be replied, used in:<br/> - Facebook Comment<br/> - Instagram Comment<br/> - Twitter Mention<br/> - Other (discussion type channels)<br/><br/>Mandatory only for the above interaction, which requires a public interaction reply</td>
    </tr>
    <tr>
        <td colspan="3">Attachments</td>
        <td>array</td>
        <td>Y/N</td>
        <td>Message attachments, for some channel and methods only first message that will be sent.<br/><br/>If there are files, the description and file including its attributes become mandatory. Default is not mandatory</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2">Description</td>
        <td>string</td>
        <td>N</td>
        <td>Description of attachment</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2">File</td>
        <td></td>
        <td></td>
        <td>Attachment file</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>Date</td>
        <td>string</td>
        <td>N</td>
        <td>File creation date</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>Name</td>
        <td>string</td>
        <td>N</td>
        <td>Name of the files</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>Path</td>
        <td>string</td>
        <td>N</td>
        <td>Content of file as public downloadable url</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>Content</td>
        <td>string</td>
        <td>N</td>
        <td>Content of file encoded in base64.<br/><br/>Alternatively if not using a public downloadable url</td>
    </tr>
    <tr>
        <td colspan="3">Users</td>
        <td>array</td>
        <td>Y/N</td>
        <td>Other contact information, used for emails<br/><br/>Mandatory only for the email interaction. For email, Users including its attributes become mandatory. Default is not mandatory</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2">IdentityId</td>
        <td>string, depends on channels</td>
        <td>N</td>
        <td>Identity of contact in message, eg.<br/>EMAIL: email addresses</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2">Name</td>
        <td>string</td>
        <td>N</td>
        <td>Name of contact</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2">RoleId</td>
        <td>string</td>
        <td>N</td>
        <td>Role of contact in message, possible values are:<br/>- MSR1: sender<br/>- MSR2: recipients<br/>- MSR3: cc<br/>- MSR4: bcc</td>
    </tr>
    <tr>
        <td colspan="3">Content</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2">Body</td>
        <td>string</td>
        <td>Y</td>
        <td>Message content with html type<br/><br/>To reply to mention Twitter, you need to include the Customer Twitter username that will be responded to. For example: @agung4ldiana</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2">BodyText</td>
        <td>string</td>
        <td>Y</td>
        <td>Message content with plain text type<br/><br/>To reply to mention Twitter, you need to include the Customer Twitter username that will be responded to. For example: @agung4ldiana</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2">ContentType</td>
        <td>string</td>
        <td>Y</td>
        <td>text/<br/>text/plain</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2">Encoding</td>
        <td>string</td>
        <td>Y</td>
        <td>Character encoding that can be as compact as ASCII (if the file is just plain English text) but can also contain any unicode characters</td>
    </tr>
</table>

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
   		"limit": "1",
   		"offset": 0,
   		"count": 2,
   		"total": 707,
   		"data": [
    	{
        "Id": "75702",
        "SiteId": "169",
        "ConnectionId": "588",
        "Subject": "Hey",
        "Description": null,
        "Remarks": null,
      	"Date": "2020-03-19 07:38:46",
      	"ReceiveDate": "2020-03-19 07:38:46",
      	"SendDate": null,
      	"MediaId": "WHATP",
      	"MethodId": "DIRECT",
      	"PriorityValue": "0",
      	"PriorityId": "MSP1",
      	"TypeId": "MST2",
      	"SecrecyId": null,
        "Incoming": "1",
      	"From": "6282210695424",
      	"To": "628111020197",
      	"Cc": null,
      	"Bcc": null,
      	"StatusId": "MSS3",
      	"Retry": "0",
      	"Attachment": "0",
      	"BatchId": null,
      	"Spam": "0",
      	"Processing": "1",
      	"RemoteId": "ABGHYoIhBpVCTwIKPrAljYHE0wcVZQ",
      	"ParentId": null,
      	"PreviousId": "75701",
      	"SourceId": null,
      	"CreateDate": "2020-03-19 07:38:46",
      	"ModifyDate": "2020-03-19 07:38:46",
      	"ViewDate": null,
      	"ConversationId": null,
      	"Reply": "0",
      	"Users": [
        	{
           	"ContactId": "41607",
          	"RoleId": "MSR1",
           	"OrganizationId": null,
           	"Contact": {
                "Id": "41607",
              	"Code": null,
               	"Name": "Boy",
               	"ShortName": "Boy",
              	"PrintName": "Boy",
              	"Phone": null,
              	"Fax": null,
               	"Email": null,
               	"Url": null,
              	"Mobile": null,
               	"TwitterId": null,
              	"FacebookId": null,
              	"LineId": null,
               	"ChatApp": null,
              	"IsPerson": "1",
              	"MediaId": "WHATP",
               	"TypeId": "CT1",
              	"ParentId": null,
              	"AddressId": null,
               	"LevelId": "CL1",
              	"StatusId": "CS1",
               	"PersonId": "40032",
              	"UserId": null,
              	"Priority": "0",
              	"Enabled": "1",
              	"RegionId": null,
              	"LocationId": null,
              	"LocationDesc": null,
              	"Remarks": null,
               	"PrefMediaId": null,
              	"TypeLastUpdate": null,
               	"Handler": null,
              	"LchatId": null,
              	"InstagramId": null,
              	"TelegramId": null,
              	"YoutubeId": null,
              	"WhatsAppId"6282210695424",
              	"ReferenceId": null
          	}
      		},
          {
        		"ContactId": "41545",
          	"RoleId": "MSR2",
          	"OrganizationId": null,
          	"Contact": {
              	"Id": "41545",
               	"Code": null,
               	"Name": "628111020197",
              	"ShortName": "628111020197",
              	"PrintName": "628111020197",
                "Phone": null,
                "Fax": null,
              	"Email": null,
              	"Url": null,
              	"Mobile": null,
              	"TwitterId": null,
              	"FacebookId": null,
              	"LineId": null,
              	"ChatApp": null,
               	"IsPerson": "1",
              	"MediaId": "WHATP",
              	"TypeId": "CT1",
              	"ParentId": null,
              	"AddressId": null,
              	"LevelId": "CL1",
               	"StatusId": "CS1",
              	"PersonId": "39976",
              	"UserId": null,
              	"Priority": "0",
              	"Enabled": "1",
              	"RegionId": null,
              	"LocationId": null,
              	"LocationDesc": null,
              	"Remarks": null,
              	"PrefMediaId": null,
              	"TypeLastUpdate": null,
              	"Handler": null,
              	"LchatId": null,
              	"InstagramId": null,
              	"TelegramId": null,
              	"YoutubeId": null,
              	"WhatsAppId": "628111020197",
              	"ReferenceId": null
           	}
      		}
   				],
        "Content": {
        	"Body": "Hey",
        	"BodyText": "Hey",
        	"Meta": null,
        	"TemplateId": null,
        	"ContentType": "text/html",
        	"Encoding": null
        	},
        	"Attachments": []
    	}
   			]
   		}
   ```

  </p></details>

## Connection

| ConnectionId | MediaName |      MediaId       |    Description     |
| :----------: | :-------: | :----------------: | :----------------: |
|     583      | Facebook  |  469218373611012   |  [Mydin22.](###)   |
|     576      |  Twitter  | 738567483435556864 | [trial_corp](###)  |
|     584      | Instagram |  243092266557469   | [trial_corpp](###) |

## Example for each channel

### 1. Facebook - Send Post

<details><summary>Example</summary><p>

```jsx title="Body"
{
  "ConnectionId": 583,
  "Subject": "Send via api to FB POST - test 1",
  "MethodId": "POST",
  "From": "469218373611012",
  "To": "469218373611012",
  "Attachments": [],
  "Content": {
    "Body": "Send via api to FB POST - test 1",
    "BodyText": "Send via api to FB POST - test 1",
    "ContentType": "text/html",
    "Encoding": "UTF-8"
    }
}
```

</p></details>

### 2. Facebook - Send Comment

<details><summary>Example</summary><p>

```jsx title="Body"
{
  "ConnectionId": 583,
  "Subject": "Send via api to FB Comment - test 1",
  "MethodId": "COMMENT",
  "From": "469218373611012",
  "To": "389961471775568",
  "PreviousId": 63964,
  "Attachments": [],
  "Content": {
    "Body": "Send via api to FB Comment - test 1",
    "BodyText": "Send via api to FB Comment - test 1",
    "ContentType": "text/plain",
    "Encoding": "UTF-8"
    }
}
```

</p></details>

### 3. Facebook - Send Direct Message

<details><summary>Example</summary><p>

```jsx title="Body"
{
  "ConnectionId": 583,
  "Subject": "Send via api to FB DIRECT - test 1",
  "MethodId": "DIRECT",
  "From": "469218373611012",
  "To": "389961471775568",
  "ConversationId": 222536,
  "Attachments": [],
  "Content": {
    "Body": "Send via api to FB DIRECT - test 1",
    "BodyText": "Send via api to FB DIRECT - test 1",
    "ContentType": "text/plain",
    "Encoding": "UTF-8"
    }
}
```

</p></details>

### 4. Instagram - Send Comment

<details><summary>Example</summary><p>

```jsx title="Body"
{
  "ConnectionId": 584,
  "Subject": "Send via api to Instagram Comment - test 1",
  "MethodId": "COMMENT",
  "From": "demo.onebox",
  "To": "azmnurami",
  "PreviousId": 75406,
  "Attachments": [],
  "Content": {
    "Body": "Send via api to Instagram - test 1",
    "BodyText": "Send via api to Instagram - test 1",
    "ContentType": "text/plain",
    "Encoding": "UTF-8"
    }
}
```

</p></details>

### 5. Twitter - Send Tweet

<details><summary>Example</summary><p>

```jsx title="Body"
{
  "ConnectionId": 576,
  "Subject": "Send twitter tweet",
  "MethodId": "POST",
  "From": "trial_corp",
  "To": "trial_corp",
  "Attachments": [],
  "Content": {
    "Body": "Send twitter tweet",
    "BodyText": "Send twitter tweet",
    "ContentType": "text/html",
    "Encoding": "UTF-8"
    }
}
```

</p></details>

### 6. Twitter - Send Mention

<details><summary>Example</summary><p>

```jsx title="Body"
{
  "ConnectionId": 576,
  "Subject": "Send Twitter mention @trial_corp - test 1",
  "MethodId": "MENTION",
  "From": "738567483435556864",
  "To": "927743274869125122",
  "Attachments": [],
  "Content": {
    "Body": "Send Twitter mention @trial_corp- test 1",
	  "BodyText": "Send Twitter mention @trial_corp- test 1",
    "ContentType": "text/html",
    "Encoding": "UTF-8"
    }
}
```

</p></details>

### 7. Twitter - Reply Tweet

<details><summary>Example</summary><p>

```jsx title="Body"
{
  "ConnectionId": 576,
  "Subject": "Selamat beraktivitas",
  "MethodId": "MENTION",
  "From": "738567483435556864",
  "To": "712571190812868608",
  "PreviousId": "76428",
  "Attachments": [],
  "Content": {
	  "Body": "@agung4ldiana Selamat beraktivitas",
    "BodyText": "@agung4ldiana Selamat beraktivitas",
	  "ContentType": "text/html",
	  "Encoding": "UTF-8"
    }
}
```

</p></details>

### 8. Twitter - Reply Direct Message

<details><summary>Example</summary><p>

```jsx title="Body"
{
  "ConnectionId": 576,
  "Subject": "Reply to Twitter DM - test 1",
  "MethodId": "DIRECT",
  "From": "738567483435556864",
  "To": "927743274869125122",
  "PreviousId": "75495",
  "Attachments": [],
  "Content": {
 	  "Body": "Reply to Twitter DM- test 1",
 	  "BodyText": "Reply to Twitter DM - test 1",
 	  "ContentType": "text/html",
 	  "Encoding": "UTF-8"
 	  }
}
```

</p></details>
