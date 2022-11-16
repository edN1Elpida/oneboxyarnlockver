---
id: test
title: Test
sidebar_label: Test
---

<!-- |                                                              f1                                                               | f2  | f3  |   f4    |
| :---------------------------------------------------------------------------------------------------------------------------: | :-: | :-: | :-----: |
| dan foryou <details><summary></summary><p> Cc string, optional N Other message recipients, used only for email </p></details> |  y  | cuy | lorem20 |

./docs/api/test.md
Module build failed (from ./node_modules/@docusaurus/mdx-loader/src/index.js
):
SyntaxError: unknown: Expected corresponding JSX closing tag for <p> (19:90)

  17 | <tbody parentName="table">
  18 | <tr parentName="tbody">
> 19 | <td parentName="tr" {...{"align":"center"}}>{`dan foryou `}<details><summary></summary><p></td>
     |                     ^
  20 | <td parentName="tr" {...{"align":"center"}}>{`Cc`}</td>
  21 | <td parentName="tr" {...{"align":"center"}}>{`string, optional`}</td>
  22 | <td parentName="tr" {...{"align":"center"}}>{`N`}</td>

| Cell1       | Cell2 | Cell3  |
| ----------- | ----- | ------ |
| merge right |       |        |
| merge       |       |        |
| below       | ^     | ^      |
| merge both  |       | value1 |
| ^           |       | value2 |

| | Grouping ||

| First Header | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
| Content      |   Long Cell   |              |
| Content      |     Cell      |         Cell |

| One | Two | Three | Four |
| --- | --- | ----- | ---- |
| One | Two | Three | Four |

| One         | Two | Three | Four |
| ----------- | --- | ----- | ---- |
| Span Across |     |       |      |

<table>
  <tr>
    <td>One</td>
    <td>Two</td>
  </tr>
  <tr>
    <td colspan="2">Three</td>
  </tr>
</table>

| One   | Two |
| ----- | --- |
| Three |

<table>
    <tr>
        <td colspan="3">One</td>
        <td>**Two**</td>
        <td>**One**</td>
        <td>**Two**</td>
    </tr>
    <tr>
        <td colspan="3">**Three**</td>
        <td>**Two**</td>
        <td>**One**</td>
        <td>**Two**</td>
    </tr>
    <tr>
        <td></td>
        <td colspan="2">aaaaa</td>
        <td>**Two**</td>
        <td>**One**</td>
        <td>**Two**</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>aufhjannnnnnnn</td>
        <td>**Two**</td>
        <td>**One**</td>
        <td>**Two**</td>
    </tr>
</table>

| foo   | bar |
| ----- | --- |
| ^^^^^ | baz |
| ^     | ^   |
| quz   | ^^^ |

| foo                                                                                                                                                                                                                                                                                   | bar   | f        | fff        | e        | ghjkl      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | -------- | ---------- | -------- | ---------- |
| baz                                                                                                                                                                                                                                                                                   | <<<<< | <        | quz        | avgbhjkl | scgfhjnkmc |
| Test <br/><table><br/><tr><br/><td colspan="3">One</td><br/><td>**Two**</td><br/><td>**One**</td><br/><td>**Two**</td><br/></tr><br/><tr><br/><td colspan="3">ssssssss</td><br/><td>**Two**</td><br/><td>**sssssssssssssssssssssss**</td><br/><td>**Two**</td><br/></tr><br/></table> | quz   | avgbhjkl | scgfhjnkmc |

| Head A | Spanned Header ||
| Head B | Head C | Head D |
|:-------|:------:|:------:|
| 1A | 1B | 1C |
| 2A ^| 2B | 2C |
| 3A ^| 3B 3C ||
| 4A | 4B 4C^||
| 5A ^| 5B | 5C |
| 6A | 6B ^| 6C |

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
        <td>Id of messages sender:<br/>- Email: email address<br/>- Whatsapp: Whatsapp/ phone number<br/>- Facebook :<details><summary></summary><p><br/>a. Post: facebook user id<br/>a. Comment: facebook user id<br/>a. Private Message: facebook user id</p></details>- Instagram: instagram/fb user id<br/>- Twitter :<details><summary></summary><p><br/>a. Post: twitter screen name<br/>a. Mention: twitter screen name<br/>a. Reply: twitter screen name</p></details><br/>Please see below for example.</td>
    </tr>
    <tr>
        <td colspan="3">To</td>
        <td>string, depends on channel and method</td>
        <td>Y</td>
        <td>Id of messages recipient:<br/>- Email: email address<br/>- Whatsapp: Whatsapp/ phone number<br/>- Facebook :<details><summary></summary><p><br/>a. Post: facebook user id<br/>a. Comment: facebook user id<br/>a. Private Message: facebook user id</p></details>- Instagram: instagram/fb user id<br/>- Twitter :<details><summary></summary><p><br/>a. Post: twitter screen name<br/>a. Mention: twitter screen name<br/>a. Reply: twitter screen name</p></details><br/>Please see below for example.</td>
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
</table> -->

# test
## test
### test
#### test