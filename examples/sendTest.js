const { BIZAPI } = require("bizapi-javascript-lib");

/* setting */
const bizapi = new BIZAPI("account", "password");
// 검수 서버 설정 (default : production)
bizapi.tokenIssuer.setOptions({
    rejectUnauthorized: false,
    domain: bizapi.bizDomain.staging
});

(async () => {    
    /* 토큰 발급 */
    // 메시지 발송 전 토큰 발급 필수
    try {
        console.log('\r\n[token]')
        const tokenRes = await bizapi.tokenIssuer.execute();
        if (tokenRes.responseCode == 200) {
            console.log(`[OK] ${JSON.stringify(tokenRes)}`);
        } else {
            console.log(`[FAIL] ${JSON.stringify(tokenRes)}`);
        }
    } catch (error) {
        console.log(error)
    }

    // sms 발송 1
    const smsAction1 = bizapi.sms.sendAction("smsRef1","01012341234","01012341234","The maximum size of an sms message is 90 bytes.");
    execute(smsAction1);    
    // sms 발송 2
    const smsAction2 = bizapi.sms.sendAction().refkey("smsRef2").to("01012341234").from("01012341234").message("The maximum size of an sms message is 90 bytes.");
    execute(smsAction2);
    // lms 발송
    const lmsAction = bizapi.lms.sendAction("lmsRef","01012341234","01012341234","The maximum size of an lms message is 2000 bytes.").subject("subject");
    execute(lmsAction);
    // mms 발송
    const fileRes = await bizapi.mms.sendFileAction("d:/bg.jpg").execute();
    const mmsAction = bizapi.mms.sendAction("mmsRef","01012341234","01012341234","The maximum size of an mms message is 2000 bytes.").filekey(fileRes.filekey);
    execute(mmsAction);

    const wl = bizapi.kakaoAttachment.createWL("Web Link", "http://www.daou.co.kr");
    const al = bizapi.kakaoAttachment.createAL("App Link").schemeandroid("examplescheme://").schemeios("examplescheme://");
    const image = bizapi.kakaoAttachment.createImage("http://www.daou.co.kr").imglink("http://www.daou.co.kr");

    // at 발송
    const atAction = bizapi.at.sendAction("atRef","01012341234","01012341234","The maximum size of an at message is 1000 length.","senderkey","templatecode").button(wl, al);
    execute(atAction);
    // ft 발송
    const ftAction = bizapi.ft.sendAction("ftRef","01012341234","01012341234","The maximum size of an at message is 1000 length.","senderkey").userkey("userkey").image(image);
    execute(ftAction)

    const openUrl = bizapi.rcsButton.openUrl("openUrl","http://www.daou.co.kr");
    const copyToClipboard = bizapi.rcsButton.CopyToClipboard("CopyToClipboard", "CopyToClipboard");
    const suggestions1 = bizapi.rcsButton.createSuggestions(openUrl);
    const suggestions2 = bizapi.rcsButton.createSuggestions(openUrl, copyToClipboard);

    // rcs 기본 포맷 + button (1) 발송
    const rcsAction1 = bizapi.rcs.sendAction("rcsRef1", "01012341234", "01012341234", 
        {
            "message":"test"
        }
        ,"SS000000", "chatbotid", "0").button(suggestions1);
    execute(rcsAction1)

    // rcs 기본 포맷 (card) + buttons (2, 0, 1) 발송
    const rcsAction2 = bizapi.rcs.sendAction().message(
        {
            "message1":"test1",
            "message2":"test2",
            "message3":"test3"
        })
        .refkey("rcsRef2").to("01012341234").from("01012341234").messagebaseid("CMwMhM0300").chatbotid("chatbotid").header("0").button(suggestions1,{},suggestions2);
    execute(rcsAction2);

    // rcs 템플릿 발송
    const rcsAction3 = bizapi.rcs.sendAction().message(
        {
            "date":"2021-01-01",
            "name":"홍길동"
        })
        .refkey("rcsRef3").to("01012341234").from("01012341234").messagebaseid("templateID").chatbotid("chatbotid").header("0");
    execute(rcsAction3);
})()

function execute(action) {
    action.execute()
        .then(res => {
            console.log(`\r\n[${action.requestBody.refkey}]`)
            console.log(`requestBody => ${JSON.stringify(action.requestBody)}`)
            if (res.code == 1000) {
                console.log(`[OK] => ${JSON.stringify(res)}`);
            } else {
                console.log(`[FAIL] => ${JSON.stringify(res)}`);
            }
        })
        .catch(error => {
            console.log(error);
        })
}