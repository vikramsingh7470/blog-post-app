const initialState = [
  {
    id: 0,
    like: 0,
    title: "Artificial Inteligence ",
    technology: "science",
    description: "I am a AI Blog I am a AI Blog I am a AI Blog",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jp",
  },
  {
    id: 1,
    like: 0,
    title: "Machine Learning",
    technology: "Science",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image:
      "https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?format=jpg&width=960",
  },
  {
    id: 2,
    like: 0,
    title: "Microsoft and OpenAI extend partnership",
    technology: "Tech",
    image: "https://blogs.microsoft.com/wp-content/uploads/prod/2023/01/PNG-openai-microsoft_960x540.png",
    description: "Today, we are announcing the third phase of our long-term partnership with OpenAI through a multiyear, multibillion dollar investment to accelerate AI breakthroughs to ensure these benefits are broadly shared with the world. This agreement follows our previous investments in 2019 and 2021. It extends our ongoing collaboration across AI supercomputing and research and enables each of us to independently commercialize the resulting advanced AI technologies. Supercomputing at scale – Microsoft will increase our investments in the development and deployment of specialized supercomputing systems to accelerate OpenAI’s groundbreaking independent AI research. We will also continue to build out Azure’s leading AI infrastructure to help customers build and deploy their AI applications on a global scale. New AI-powered experiences – Microsoft will deploy OpenAI’s models across our consumer and enterprise products and introduce new categories of digital experiences built on OpenAI’s technology. This includes Microsoft’s Azure OpenAI Service, which empowers developers to build cutting-edge AI applications through direct access to OpenAI models backed by Azure’s trusted, enterprise-grade capabilities and AI-optimized infrastructure and tools. Exclusive cloud provider – As OpenAI’s exclusive cloud provider, Azure will power all OpenAI workloads across research, products and API services. “We formed our partnership with OpenAI around a shared ambition to responsibly advance cutting-edge AI research and democratize AI as a new technology platform,” said Satya Nadella, Chairman and CEO, Microsoft. “In this next phase of our partnership, developers and organizations across industries will have access to the best AI infrastructure, models, and toolchain with Azure to build and run their applications.” “The past three years of our partnership have been great,” said Sam Altman, CEO of OpenAI. “Microsoft shares our values and we are excited to continue our independent research and work toward creating advanced AI that benefits everyone.” Since 2016, Microsoft has committed to building Azure into an AI supercomputer for the world, serving as the foundation of our vision to democratize AI as a platform. Through our initial investment and collaboration, Microsoft and OpenAI pushed the frontier of cloud supercomputing technology, announcing our first top-5 supercomputer in 2020, and subsequently constructing multiple AI supercomputing systems at massive scale. OpenAI has used this infrastructure to train its breakthrough models, which are now deployed in Azure to power category-defining AI products like GitHub Copilot, DALL·E 2 and ChatGPT. These innovations have captured imaginations and introduced large-scale AI as a powerful, general-purpose technology platform that we believe will create transformative impact at the magnitude of the personal computer, the internet, mobile devices and the cloud. Underpinning all of our efforts is Microsoft and OpenAI’s shared commitment to building AI systems and products that are trustworthy and safe. OpenAI’s leading research on AI Alignment and Microsoft’s Responsible AI Standard not only establish a leading and advancing framework for the safe deployment of our own AI technologies, but will also help guide the industry toward more responsible outcomes. Tags: AI, Azure OpenAI Service"
  },
  {
    id: 3,
    like: 0,
    title: 'Google plans to demo its search AI chatbot features and unveil 20 new products    ',
    technology: 'Technology',
    image: 'https://image.telanganatoday.com/wp-content/uploads/2023/01/16-years-at-Google-this-employee-was-sacked-at-3-am_V_jpg--816x480-4g.webp?sw=1280&dsz=816x480&iw=659&p=false&r=1.5',
    description: "Hyderabad: After the launch of ChatGPT last year, Google is planning to demonstrate an AI version of its search engine with an AI chatbot this year. Alongside, Google is also planning to launch over 20 new products.\n\nAs per the source, Google seems to be focusing more on AI amid ChatGPT’s gaining popularity in recent months as it has raised questions about the future of traditional search engines.\nChatGPT developed by Artificial Intelligence (AI) research company OpenAI can perform numerous functions like generating human-like text, responding to questions, composing music, and rewriting code, among other functions. All this has led to speculation that the new AI-powered chatbot could replace Google and other search engines in the near future.\n\nBut as per reports from ‘Insider’, former Google employees and AI experts have said that the new chatbot is unlikely to replace Google because of inaccuracies in its responses.\n\nThe new demo AI version is likely to focus on Google’s priorities like safety issues, tackle misinformation, and ensure factual accuracy.\n\nAccording to the ‘New York Times’, a spokesperson of Google responded by saying that Google keeps testing its AI technology internally to make sure it is safe and helpful, and very soon the company may share more details on the same.\n\nWith tech companies focusing on new technologies, especially AI, it would be interesting to see how these companies will fare against one another. At the same time, it also signals the increasing importance of Artificial Intelligence in the modern world and its impact on humans."
  }
];

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      state = [...state, action.payload]
      return state;
    case 'UPDATE_BLOG':
      const updateState = state.map(blog => blog.id === action.payload.id ? action.payload : blog);
      state = updateState;
      return state;
    case "DELETE_BLOG":
      const filterBlogs = state.filter(
        (blog) => blog.id !== action.payload && blog
      );
      state = filterBlogs;
      return state;
    default:
      return state;
  }
};

export default blogReducer;
