# bizapi-javascript-lib
## Installation 
```sh
npm install bizapi-javasciprt-lib --save
```
## Usage

For additional examples, refer to the examples folder.

```javascript
import { BIZAPI } from 'bizapi-javascript-lib';

const bizapi = new BIZAPI("account", "password");
// staging server setting (Testing)
// Please remove the code when you send it to the operation server.
bizapi.tokenIssuer.setOptions({
    domain = bizapi.bizDomain.staging,
    rejectUnauthorized: false
})

// Tokens must be issued.
// Tokens are maintained 24 hours a day.
const tokenResponse = await bizapi.tokenIssuer.execute();

// required parameter (refkey, to, from, message)
bizapi.sms.sendAction("refkey","01012341234","01012341234","message").execute().then(res=>{
    console.log(res)
})

// builder pattern
bizapi.sms.sendAction()
    .refkey("refkey")
    .to("01012341234")
    .from("01012341234")
    .message("message")
    .execute()
    .then(res=>{
    	console.log(res)
})
```