---
id: authenticationtoken
title: Authentication - Token
sidebar_label: Token
sidebar_position: 1
---

The token API is used to create tokens for one site. This token will later be used as a mandatory parameter for each API (example: List).

The token will expire within a certain period. Re-generate token if it has expired.

---

## Data

|         |     |                                             |
| ------- | --- | ------------------------------------------- |
| Method  | :   | POST                                        |
| URL     | :   | {host}/api/authenticate                     |
| Example | :   | https://cloud.onebox.co.id/api/authenticate |
| Return  | :   | JSON                                        |

---

## Parameter

|   Key    |           Value            | Description |
| :------: | :------------------------: | :---------: |
|  {host}  | https://cloud.onebox.co.id |             |
|  email   |     userdemo@gmail.com     |             |
| password |          userdemo          |             |
|  siteId  |            123             |             |

---

## Response

1.  **Code 401**

    <details><summary>invalid email or password</summary><p>

    ```jsx title="Body"
    {
      "_meta": {
        	"status": "ERROR",
        	"count": 1
      },
      "records": {
        	"errorCode": "401",
        	"userMessage": "you are not authorized to log into this site 1691",
        	"devMessage": "",
        	"more": "",
        	"applicationCode": ""
      }
    }
    ```

    </p></details>

2.  **Code 200**

    <details><summary>Success</summary><p>

    ```jsx title="Body"
    	{
    		"response_code": "200",
    		"response_status": "Success",
    		"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJvbmVjbG91ZC5jaXB0YWRyYXNvZnQubmV0Iiwic3ViIjoiNTUiLCJleHAiOjE1Nzg5ODU3ODAsIm5iZiI6MTU3ODk4NDg4MCwiaWF0IjoxNTc4OTg0ODgwLCJqdGkiOiJwYkpHSk5sXC9RVUppNEVLSFd1dFwvQk9cL0pneG9QZ2c3YlQ2UWZaNVAwT0swPSIsInNpZCI6IjE2OSJ9.W0R0qxWHU25sqeMObsLiFWT5WKkL-Oeae-yc4BlYZX8"
    	}
    ```

    </p></details>
