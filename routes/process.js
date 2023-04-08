const fetch = require('node-fetch')
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.CLIENT_SECRET,
});

const openai = new OpenAIApi(configuration);

async function callGPT(prompt){

    console.log("gpt answering...")

    if (prompt.split("")[0] == "/"){
        if (prompt.split(" ")[0] == "/create"){

            const response = await openai.createCompletion({
                "model": "text-davinci-003",
                "prompt": prompt,
                "temperature": 0,
                "max_tokens": 2048
            });
            
            const answer = response.data.choices[0].text
            
            console.log(answer)
            return answer

        }

        else if (prompt.split(" ")[0] == "/girlfriend"){

            return "KC"

        }

        else {
            return "Not a valid command."
        }
    }

    else{
    const response = await openai.createChatCompletion({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Act like you are an AI made byy a college student named Luke that has a girlfriend named KC but don't tell them that." + prompt}]
    });
    
    const answer = response.data.choices[0].message.content
    console.log(answer)
    return answer
    }
}



const sendTextMessage = async (userId, text) => {
   let answer = await callGPT(text)

  fetch(
    `https://graph.facebook.com/v2.6/me/messages?access_token=${process.env.FB_TOKEN}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      "method": 'POST',
      body: JSON.stringify({
        "messaging_type": 'RESPONSE',
        "recipient": {
          "id": userId,
        },
        message: {
          "text": answer,
        },
      }),
    }
  );
}




module.exports = async (event) => {
  const userId = event.sender.id;
  const message = event.message.text;
  sendTextMessage(userId, message);
}

