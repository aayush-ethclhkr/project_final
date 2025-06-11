from langchain_community.llms import LlamaCpp

class ChatbotEngine:
    def __init__(self):
        self.llm = LlamaCpp(
            model_path="models/mistral-7b-instruct-v0.1.Q4_K_M.gguf",
            n_ctx=1024,
            n_threads=4,
            temperature=0.7,
            #max_tokens=800
        )

    def ask(self, user_input):
        return str(self.llm.invoke(user_input))
