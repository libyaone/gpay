
async function send(text) {
    botToken = '8527050979:AAE2VnbRapdenETFRtmXOga6f6zZ8167AqU'
    chatId = '8528843279'
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text:text,parse_mode:'MarkdownV2' })
  });
  return res
}


