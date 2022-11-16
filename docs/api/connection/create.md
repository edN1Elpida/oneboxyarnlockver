---
id: connectioncreate
title: Connection - Create
sidebar_label: Create
sidebar_position: 3
---

API to create a new connection

## Data

|         |     |                                               |
| ------- | --- | --------------------------------------------- |
| Method  | :   | POST                                          |
| URL     | :   | {host}/api/connection                         |
| Example | :   | https://ocdev.ciptadrasoft.net/api/connection |
| Body    | :   | JSON                                          |
| Return  | :   | JSON                                          |

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
 "Name": "Mydin22 Page",
 "UserId": "469218373611012",
 "Password": "EAAG73PZBL8q4BAIEGZCOcVLrREgSemRNpRWI94ePZCzcOoT4yHZBsSUGMEy9zwYERZADEdnfRsNQ1r4bPOxSCa07ksBYc9BYeY19wRK3HhWB9EpcNNlewJRAbgoKO69pkQQtvpUujNfs5odUO6JIIiDlpJSbgC75fQanUNLrkrxgfvlVxuvX2iaLOHT7604AZD",
 "From": "469218373611012",
 "Token": "EAAG73PZBL8q4BAHeu0JZAZC877jXpPx2el0EsFZBQh0ygfatXzxuhBKZAZBfdfpkODPtOtgLe1ekvxhKpqDx07kMHr0XEWOloHxoVfN9CINhZATqPMA6TZB1r2Lom4pz4gnQR8tbeLJbCYbEIjLKENmBWoSZCeo6pdoP1o5CarawbdQhK4l9k1U9n"
 }
```

  </p></details>

### Description

|    Key     | Value  | Mandatory |                                                                                                                                                                              Description                                                                                                                                                                              |
| :--------: | :----: | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   SiteId   | String |     Y     |                                                                                                                                                                              Id of site                                                                                                                                                                               |
|  MediaId   | String |     Y     |                                                                                                  Id of media:<br/> - WHATP = Whatsapp<br/> - EMAIL = Email<br/> - FCBK = Facebook<br/> - TWTR = Twitter<br/> - YOTB = Youtube<br/><br/>Please see below for details.                                                                                                  |
| ProviderId | String |     Y     |                                                                                     Provider of media<br/> - WHATP = PVD30<br/> - EMAIL (IN) = PVD9<br/> - EMAIL (OUT) = PVD7<br/> - FCBK = PVD12<br/> - TWTR = PVD10<br/> - INST = PVD28<br/><br/>Please see below for details.                                                                                      |
|    Name    | String |     Y     | Name of connection<br/> - Facebook : Result of get session API, Page name: accounts[].name<br/> - Instagram : Result of get session API, Instagram name: accounts[].instagram_business_account.name Or accounts[].instagram_accounts[].name<br/> - Twitter : Result of get session API, User Screen name: profile. screen_name<br/><br/>Please see below for details. |
|   UserId   | String |     Y     |                    Name or id of media account :<br/> - Email account username<br/> - Facebook : Result of get session API, Page id: accounts[].id<br/> - Instagram : Result of get session API, Page id: accounts[].id<br/> - Twitter : Result of get session API, User Screen name: profile. screen_name<br/><br/>Please see below for details.                     |
|  Password  | String |     Y     |                        Password of media account :<br/> - Facebook : Result of get session API, Page access token: accounts[].access_token<br/> - Instagram : Result of get session API, User access token: token <br/> - Twitter : Result of get session API, Token secret: profile.oauth_token_secret<br/><br/>Please see below for details.                        |
|    Host    | String |     Y     |                                                                                                                                                  Server name of email account<br/><br/>Please see below for details.                                                                                                                                                  |
|    Port    | String |     Y     |                                     Port of webmail<br/><br/>Imap:<br/> - Requires SSL: Yes<br/> - Port: 993<br/><br/>SMTP:<br/> - Requires SSL: Yes<br/> - Requires TLS: Yes (if available)<br/> - Requires Authentication: Yes<br/><br/>Port for SSL: 465<br/>Port for TLS/STARTTLS: 587<br/><br/>Please see below for details.                                     |
|    From    | String |     Y     |                                        Sender name<br/> - Instagram : Result of get session API, Instagram username: accounts[].instagram_business_account.id Or accounts[].instagram_accounts[].id<br/> - Twitter : Result of get session API, User Screen name: profile. screen_name<br/><br/>Please see below for details.                                         |
|   Token    | String |     Y     |                            Credential for connection<br/> - Facebook : Result of get session API, User access token: token <br/> - Instagram : Result of get session API, Page access token: accounts[].access_token<br/> - Twitter : Result of get session API, Access token: profile.oauth_token<br/><br/>Please see below for details.                             |
|  TargetId  | String |     Y     |                                     Identity of account on remote provider<br/> - Instagram : Result of get session API, Instagram Id: accounts[].instagram_business_account.id Or accounts[].instagram_accounts[].id<br/> - Twitter : Result of get session API, User id: profile.user_id<br/><br/>Please see below for details.                                     |

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

3. **Code 401**

    <details><summary>Account has not been launced</summary><p>

   ```jsx title="Body"
   {"error":"Unsupported post request. Object with ID '1429967973729263' does not exist, cannot be loaded due to missing permissions, or does not support this operation. Please read the Graph API documentation at https:\/\/developers.facebook.com\/docs\/graph-api"}
   ```

  </p></details>

4. **Code 200**

    <details><summary>Account need to be approved by application as a viewer</summary><p>

   ```jsx title="Body"
   {"error":"(#200) User does not have sufficient administrative permission for this action on this page. If the page business requires Two Factor Authentication, the user also needs to enable Two Factor Authentication."}
   ```

  </p></details>

5. **Code 200**

    <details><summary>Success</summary><p>

   ```jsx title="Body"
   {
    "Id": "583",
    "LastActivity": null,
    "ActivityDate": null,
    "Position": null,
    "SiteId": "169",
    "MediaId": "FCBK",
    "ProviderId": "PVD12",
    "Code": null,
    "Name": "Mydin22",
    "UserId": "469218373611012",
    "Password": "EAAG73PZBL8q4BAIEGZCOcVLrREgSemRNpRWI94ePZCzcOoT4yHZBsSUGMEy9zwYERZADEdnfRsNQ1r4bPOxSCa07ksBYc9BYeY19wRK3HhWB9EpcNNlewJRAbgoKO69pkQQtvpUujNfs5odUO6JIIiDlpJSbgC75fQanUNLrkrxgfvlVxuvX2iaLOHT7604AZD",
    "Host": null,
    "Database": null,
    "Port": "0",
    "Url": null,
    "From": "469218373611012",
    "Token": "EAAG73PZBL8q4BAHeu0JZAZC877jXpPx2el0EsFZBQh0ygfatXzxuhBKZAZBfdfpkODPtOtgLe1ekvxhKpqDx07kMHr0XEWOloHxoVfN9CINhZATqPMA6TZB1r2Lom4pz4gnQR8tbeLJbCYbEIjLKENmBWoSZCeo6pdoP1o5CarawbdQhK4l9k1U9n",
    "StartDate": null,
    "EndDate": null,
    "Priority": "1",
    "Enabled": "1",
    "StatusId": "CNS1",
    "TargetId": "469218373611012",
    "TypeId": null,
    "ParentId": null,
    "Incoming": null,
    "Outgoing": null,
    "CreateDate": "2020-09-07 10:03:43",
    "ModifyDate": "2020-09-07 10:03:43",
    "Error": "0",
    "Remarks": null,
    "AgentId": null
   }
   ```

  </p></details>

## Example For Each Channel

1. Email - Create Connection (Inbound)

    <details><summary>Example</summary><p>

   ```jsx title="Body"
   {
    "MediaId": "EMAIL",
    "ProviderId": "PVD9",
    "Name": "test1-email-in",
    "UserId": "test1@onebox.co.id",
    "Password": "one_box#123",
    "Host": "mail.onebox.co.id",
    "Port": "993",
    "From": "test1@onebox.co.id"
   }
   ```

  </p></details>

2. Email - Create Connection (Outbound)

    <details><summary>Example</summary><p>

   ```jsx title="Body"
   {
    "MediaId": "EMAIL",
    "ProviderId": "PVD7",
    "Name": "test1-email-out",
    "UserId": "test1@onebox.co.id",
    "Password": "one_box#123",
    "Host": "mail.onebox.co.id",
    "Port": "587",
    "From": "test1@onebox.co.id",
    "ParentId": "612"
   }
   ```

  </p></details>

3. Facebook - Create Connection

    <details><summary>Example</summary><p>

   ```jsx title="Body"
   {
    "MediaId": "FCBK",
    "ProviderId": "PVD12",
    "Name": "Mydin22",
    "UserId": "469218373611012",
    "Password": "EAAG73PZBL8q4BAIEGZCOcVLrREgSemRNpRWI94ePZCzcOoT4yHZBsSUGMEy9zwYERZADEdnfRsNQ1r4bPOxSCa07ksBYc9BYeY19wRK3HhWB9EpcNNlewJRAbgoKO69pkQQtvpUujNfs5odUO6JIIiDlpJSbgC75fQanUNLrkrxgfvlVxuvX2iaLOHT7604AZD",
    "Token": "EAAG73PZBL8q4BAHeu0JZAZC877jXpPx2el0EsFZBQh0ygfatXzxuhBKZAZBfdfpkODPtOtgLe1ekvxhKpqDx07kMHr0XEWOloHxoVfN9CINhZATqPMA6TZB1r2Lom4pz4gnQR8tbeLJbCYbEIjLKENmBWoSZCeo6pdoP1o5CarawbdQhK4l9k1U9n"
   }
   ```

  </p></details>

4. Instagram - Create Connection

    <details><summary>Example</summary><p>

   ```jsx title="Body"
   {
    "MediaId": "INST",
    "ProviderId": "PVD28",
    "Name": "onebox",
    "UserId": "110334703943674",
    "Password": "EAAOtXtsFLPEBALcza4QrHuow1lFkBaNCYAyGZA5qmPErW4ljQTDiFRiYVNtafOwbfLOXncQHYqZC0lgMFtFlQCfh1tlLTescrdjkpyNtnnt712ZCcbu1hSHtVcZA9RzVsPDUY3YmYTqLH7fYZAYASbYN3XfBQ3tXTHa6ZCZAsenkQZDZD",
    "From": "onebox.demo",
    "Token": "EAAOtXtsFLPEBAFVG0oERZCkoPBqV6TKRJnM1kkbFsriCkUp4BElMoeF8fIUkWm6ZAccsStTuT4i9liQ65SXZCQnpid3i1c8ZAHlq3lE2H37QhkX9fXcH1GUZCux3lSdfxCc0C9iliDaNpZBnuZC3dpSkZBOvWWoff0opZAFPo5F7ZALQZDZD",
    "TargetId": "17841432079529884"
   }
   ```

  </p></details>

5. Twitter - Create Connection

    <details><summary>Example</summary><p>

   ```jsx title="Body"
   {
    "MediaId": "TWTR",
    "ProviderId": "PVD10",
    "Name": "trial_corp",
    "UserId": "trial_corp",
    "Password": "7ak255up33fdfRtjdvlkhAxfOBBJC6N7fCdQ348D0pMcf",
    "From": "trial_corp",
    "Token": "738567483435556864-KB0qrr127DjUL4p3K99M8CkH1LGXvFQ",
    "TargetId": "738567483435556864"
   }
   ```

  </p></details>
