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

    const wl = bizapi.kakaoAttachment.createWL("Web Link", "http://www.daou.co.kr");
    const al = bizapi.kakaoAttachment.createAL("App Link").schemeandroid("examplescheme://").schemeios("examplescheme://");
    const image = bizapi.kakaoAttachment.createImage("http://www.daou.co.kr").imglink("http://www.daou.co.kr");

    // kakao + sms
    const smsResend = bizapi.sms.createResend("The maximum size of an sms message is 90 bytes.");
    const atAction1 = bizapi.at.sendAction("atAndSmsRef","01012341234","01012341234","The maximum size of an at message is 1000 length.","senderkey","templatecode")
                        .button(wl, al)
                        .resendFirst(smsResend);
    execute(atAction1);

    // kakao + lms
    const lmsResend = bizapi.lms.createResend("The maximum size of an sms message is 2000 bytes.").subject("subject");
    const atAction2 = bizapi.at.sendAction("atAndLmsRef","01012341234","01012341234","The maximum size of an at message is 1000 length.","senderkey","templatecode")
                        .button(wl, al)
                        .resendFirst(lmsResend);
    execute(atAction2);
    
    // kakao + mms
    const fileRes = await bizapi.mms.sendFileAction("d:/bg.jpg").execute();
    const mmsResend = bizapi.mms.createResend("The maximum size of an mms message is 2000 bytes.").filekey(fileRes.filekey);
    const atAction3 = bizapi.at.sendAction("atAndMmsRef","01012341234","01012341234","The maximum size of an at message is 1000 length.","senderkey","templatecode")
                        .button(wl, al)
                        .resendFirst(mmsResend);
    execute(atAction3);
        
    const openUrl = bizapi.rcsButton.openUrl("openUrl","http://www.daou.co.kr");
    const copyToClipboard = bizapi.rcsButton.CopyToClipboard("CopyToClipboard", "CopyToClipboard");
    const suggestions1 = bizapi.rcsButton.createSuggestions(openUrl);
    const suggestions2 = bizapi.rcsButton.createSuggestions(openUrl, copyToClipboard);

    // kakao + rcs
    const rcsResend = bizapi.rcs.createResend({"message":"test"},"SS000000", "chatbotid", "0").button(suggestions1);
    const atAction4 = bizapi.at.sendAction("atAndRcsRef","01012341234","01012341234","The maximum size of an at message is 1000 length.","senderkey","templatecode")
                        .button(wl, al)
                        .resendFirst(rcsResend);
    execute(atAction4);

    // kakao + rcs + sms
    const atAction5 = bizapi.at.sendAction("atAndRcsAndSmsRef","01012341234","01012341234","The maximum size of an at message is 1000 length.","senderkey","templatecode")
                        .button(wl, al)
                        .resendFirst(rcsResend)
                        .resendSecond(smsResend);
    execute(atAction5);
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