---
id: connectionpatch
title: Connection - Patch
sidebar_label: Patch
sidebar_position: 4
---

API to a update connection fields

## Data

|         |     |                                                   |
| ------- | --- | ------------------------------------------------- |
| Method  | :   | PATCH                                             |
| URL     | :   | {host}/api/connection/{connection-id}             |
| Example | :   | https://ocdev.ciptadrasoft.net/api/connection/123 |
| Body    | :   | JSON                                              |
| Return  | :   | JSON                                              |

## Header

|      Key      |      Value       |                                      Description                                      |
| :-----------: | :--------------: | :-----------------------------------------------------------------------------------: |
| Authorization |  Bearer {token}  | This token be used as a mandatory parameter for each API, obtained from the token API |
| Content-Type  | application/json | The MIME media type for JSON text is application/json. The default encoding is UTF-8. |

## Parameter

| Key | Value | Description |
| :-: | :---: | :---------: |
|  -  |   -   |      -      |

## Body

### Example

  <details><summary>Example</summary><p>

```jsx title="Body"
{
    "Name": "trycloudy",
    "UserId": "241794770143249",
    "Password": "EAAOtXtsFLPEBADkRNJ1zVUpGfexDNeFnXECPPApKusgJzthbNn3pQBIT55StSMR5fyZCwZBm912AEqN9NhO8x6bsBh7VxcAZCmakgA9EcfFZAGLybCDZBrfFz3Xe6wWrY9hxLBhuvaEcbkZBg6TmsiSREZClUDOvwPxKCEEzaX1BAZDZD",
    "From": "17841439754602482",
    "Token": "EAAOtXtsFLPEBAPZBnBZBtBrezsqzmMqc18HXSSdUKqPnZCXgZBWT2O7MPYHwSv1MB2RP7v44GnAVThzfh3TJUiNIvUpY1z4C3JaJhHwwAWaYLZAZB0kJWO2MgKiLARUkDdW087Pwtz3NJE5q4SoWyWCsYq8YpW7KRmYhcySXhJ6AZDZD",
    "TargetId": "17841439754602482"
 }
```

  </p></details>

### Description

|   Key    | Value  | Mandatory |                                                                                                                                                                              Description                                                                                                                                                                              |
| :------: | :----: | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   Name   | String |     Y     | Name of connection<br/> - Facebook : Result of get session API, Page name: accounts[].name<br/> - Instagram : Result of get session API, Instagram name: accounts[].instagram_business_account.name Or accounts[].instagram_accounts[].name<br/> - Twitter : Result of get session API, User Screen name: profile. screen_name<br/><br/>Please see below for details. |
|  UserId  | String |     Y     |                    Name or id of media account :<br/> - Email account username<br/> - Facebook : Result of get session API, Page id: accounts[].id<br/> - Instagram : Result of get session API, Page id: accounts[].id<br/> - Twitter : Result of get session API, User Screen name: profile. screen_name<br/><br/>Please see below for details.                     |
| Password | String |     Y     |                        Password of media account :<br/> - Facebook : Result of get session API, Page access token: accounts[].access_token<br/> - Instagram : Result of get session API, User access token: token <br/> - Twitter : Result of get session API, Token secret: profile.oauth_token_secret<br/><br/>Please see below for details.                        |
|   Host   | String |     Y     |                                                                                                                                                  Server name of email account<br/><br/>Please see below for details.                                                                                                                                                  |
|   Port   | String |     Y     |                                     Port of webmail<br/><br/>Imap:<br/> - Requires SSL: Yes<br/> - Port: 993<br/><br/>SMTP:<br/> - Requires SSL: Yes<br/> - Requires TLS: Yes (if available)<br/> - Requires Authentication: Yes<br/><br/>Port for SSL: 465<br/>Port for TLS/STARTTLS: 587<br/><br/>Please see below for details.                                     |
|   From   | String |     Y     |                                        Sender name<br/> - Instagram : Result of get session API, Instagram username: accounts[].instagram_business_account.id Or accounts[].instagram_accounts[].id<br/> - Twitter : Result of get session API, User Screen name: profile. screen_name<br/><br/>Please see below for details.                                         |
|  Token   | String |     Y     |                            Credential for connection<br/> - Facebook : Result of get session API, User access token: token <br/> - Instagram : Result of get session API, Page access token: accounts[].access_token<br/> - Twitter : Result of get session API, Access token: profile.oauth_token<br/><br/>Please see below for details.                             |
| TargetId | String |     Y     |                                     Identity of account on remote provider<br/> - Instagram : Result of get session API, Instagram Id: accounts[].instagram_business_account.id Or accounts[].instagram_accounts[].id<br/> - Twitter : Result of get session API, User id: profile.user_id<br/><br/>Please see below for details.                                     |

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
    "Id": "646",
    "LastActivity": null,
    "ActivityDate": null,
    "Position": null,
    "SiteId": "169",
    "MediaId": "INST",
    "ProviderId": "PVD28",
    "Code": null,
    "Name": "trycloudy",
    "UserId": "241794770143249",
    "Password": "EAAOtXtsFLPEBADkRNJ1zVUpGfexDNeFnXECPPApKusgJzthbNn3pQBIT55StSMR5fyZCwZBm912AEqN9NhO8x6bsBh7VxcAZCmakgA9EcfFZAGLybCDZBrfFz3Xe6wWrY9hxLBhuvaEcbkZBg6TmsiSREZClUDOvwPxKCEEzaX1BAZDZD",
    "Host": null,
    "Database": null,
    "Port": "0",
    "Url": null,
    "From": "17841439754602482",
    "Token": "EAAOtXtsFLPEBAPZBnBZBtBrezsqzmMqc18HXSSdUKqPnZCXgZBWT2O7MPYHwSv1MB2RP7v44GnAVThzfh3TJUiNIvUpY1z4C3JaJhHwwAWaYLZAZB0kJWO2MgKiLARUkDdW087Pwtz3NJE5q4SoWyWCsYq8YpW7KRmYhcySXhJ6AZDZD",
    "StartDate": null,
    "EndDate": null,
    "Priority": "1",
    "Enabled": "1",
    "StatusId": "CNS1",
    "TargetId": "17841439754602482",
    "TypeId": null,
    "ParentId": null,
    "Incoming": null,
    "Outgoing": null,
    "CreateDate": "2020-09-09 09:45:05",
    "ModifyDate": "2020-09-09 09:52:57",
    "Error": "0",
    "Remarks": null,
    "AgentId": null
   }
   ```

  </p></details>

## Example For Each Channel

1. Email - Patch Connection (Inbound)

    <details><summary>Example</summary><p>

   ```jsx title="Body"
   {
    "Name": "test2-email-in",
    "UserId": "test2@onebox.co.id",
    "Password": "one_box#123",
    "Host": "mail.onebox.co.id",
    "Port": "993",
    "From": "test2@onebox.co.id"
   }
   ```

  </p></details>

2. Email - Patch Connection (Outbound)

    <details><summary>Example</summary><p>

   ```jsx title="Body"
   {
    "Name": "test2-email-out",
    "UserId": "test2@onebox.co.id",
    "Password": "one_box#123",
    "Host": "mail.onebox.co.id",
    "Port": "587",
    "From": "test2@onebox.co.id",
    "ParentId": "612"
   }
   ```

  </p></details>

3. Facebook - Patch Connection

    <details><summary>Example</summary><p>

   ```jsx title="Body"
   {
    "Name": "Mydin22 Page",
    "UserId": "469218373611012",
    "Password": "EAAG73PZBL8q4BAIEGZCOcVLrREgSemRNpRWI94ePZCzcOoT4yHZBsSUGMEy9zwYERZADEdnfRsNQ1r4bPOxSCa07ksBYc9BYeY19wRK3HhWB9EpcNNlewJRAbgoKO69pkQQtvpUujNfs5odUO6JIIiDlpJSbgC75fQanUNLrkrxgfvlVxuvX2iaLOHT7604AZD",
    "From": "469218373611012",
    "Token": "EAAG73PZBL8q4BAHeu0JZAZC877jXpPx2el0EsFZBQh0ygfatXzxuhBKZAZBfdfpkODPtOtgLe1ekvxhKpqDx07kMHr0XEWOloHxoVfN9CINhZATqPMA6TZB1r2Lom4pz4gnQR8tbeLJbCYbEIjLKENmBWoSZCeo6pdoP1o5CarawbdQhK4l9k1U9n"
   }
   ```

  </p></details>

4. Instagram - Patch Connection

    <details><summary>Example</summary><p>

   ```jsx title="Body"
   {
    "Name": "onebox DEMO",
    "UserId": "110334703943674",
    "Password": "EAAOtXtsFLPEBALcza4QrHuow1lFkBaNCYAyGZA5qmPErW4ljQTDiFRiYVNtafOwbfLOXncQHYqZC0lgMFtFlQCfh1tlLTescrdjkpyNtnnt712ZCcbu1hSHtVcZA9RzVsPDUY3YmYTqLH7fYZAYASbYN3XfBQ3tXTHa6ZCZAsenkQZDZD",
    "From": "onebox.demo",
    "Token": "EAAOtXtsFLPEBAFVG0oERZCkoPBqV6TKRJnM1kkbFsriCkUp4BElMoeF8fIUkWm6ZAccsStTuT4i9liQ65SXZCQnpid3i1c8ZAHlq3lE2H37QhkX9fXcH1GUZCux3lSdfxCc0C9iliDaNpZBnuZC3dpSkZBOvWWoff0opZAFPo5F7ZALQZDZD",
    "TargetId": "17841432079529884"
   }
   ```

  </p></details>

5. Twitter - Patch Connection

    <details><summary>Example</summary><p>

   ```jsx title="Body"
   {
    "Name": "trial_corp Official",
    "UserId": "trial_corp",
    "Password": "7ak255up33fdfRtjdvlkhAxfOBBJC6N7fCdQ348D0pMcf",
    "From": "trial_corp",
    "Token": "738567483435556864-KB0qrr127DjUL4p3K99M8CkH1LGXvFQ",
    "TargetId": "738567483435556864"
   }
   ```

  </p></details>
