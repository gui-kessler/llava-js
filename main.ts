import { Ollama, ChatRequest } from 'npm:ollama';

const ollama = new Ollama();

const msg: ChatRequest = {
  model: "llava:13b",
  messages: [
    {
      role: "user",
      content: "what breed is this cat?",
      images: ["./gato.jpeg"]
    },
  ],
};

ollama.chat(msg).then(message => console.log(message.message.content));