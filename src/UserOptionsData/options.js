export const arrayItems = [
    {
      name: "Q&A",
      id: "q&a",
      description: "Answer questions based on existing knowledge",
      option: {
        model: "text-davinci-003",
      
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
    },
    {
        name: "Image Generator",
        id:"imgGen",
        description: "Generate any image based on input with AI",
        option: {
            n: 1,
            size: '1024x1024',
        },

    },
    {
      name: "Grammer Correction",
      id: "grammerCorrection",
      description: "Corrects sentences into standard English.",
      option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
    },
   
    {
      name: "English to Other languages",
      id: "translate",
      description: "Translates English text into French, Spanish and Japanese.",
      option: {
        model: "text-davinci-003",
        temperature: 0.3,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
    },
    {
      name: "Chat with AI",
      id: "chatwtAI",
      description: "Open ended conversation with an AI assistant.",
      option: {
        model: "text-davinci-003",
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
      },
    },
    {
      name: "Explain code",
      id: "explainCode",
      description: "Explain a complicated piece of code.",
      option: {
        model: "code-davinci-002",
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
    },
    {
      name: "Translate programming languages",
      id: "trslt1to2",
      description: "To translate from one programming language to another we can use the comments to specify the source and target languages.",
      option: {
        model: "code-davinci-002",
        temperature: 0,
        max_tokens: 54,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["###"],
      },
    },
    {
      name: "Text to Program",
      id: "txttocmd",
      description: "Convert this text to a programmatic command",
      option: {
        model: "text-davinci-003",
        temperature: 0,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.2,
        presence_penalty: 0.0,

      },
    },
    {
      name: "Python to Natural Language",
      id: "pytolang",
      description: "Explain a piece of Python code in human understandable language.",
      option:{
        model: "code-davinci-002",
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,

      },
    },
    {
      name: "Product name generator",
      id: "prodname",
      description: "Create product names from examples words.",
      option: {
        model: "text-davinci-003",
        temperature: 0.8,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,

      },
    },
    {
      name: "Interview questions",
      id: "intr",
      description: "Create interview questions for a particular role.",
      option: {
        model: "text-davinci-003",
        temperature: 0.5,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,

      },
    },
    {
      name: "Create study notes",
      id: "studynote",
      description: "Provide a topic and get study notes.",
      option:{
        model: "text-davinci-003",
        temperature: 0.3,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,

      },
    }
  ];