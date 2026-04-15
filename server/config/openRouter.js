import fetch from "node-fetch";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// models priority (auto fallback)
const MODELS = [
  "qwen/qwen3-coder:free",
  "nvidia/nemotron-3-super:free",
  "z-ai/glm-4.5-air:free",
  "openrouter/free"
];

// delay function
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const generateResponse = async (prompt) => {
  for (let model of MODELS) {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model,
            messages: [
              {
                role: "system",
                content: "You must return ONLY valid raw JSON."
              },
              {
                role: "user",
                content: prompt
              }
            ],
            temperature: 0.2
          })
        });

        // handle rate limit
        if (res.status === 429) {
          console.log(`⚠️ Rate limited on ${model}, retrying...`);
          await sleep(2000);
          continue;
        }

        // handle other errors
        if (!res.ok) {
          const errText = await res.text();
          throw new Error(errText);
        }

        const data = await res.json();

        console.log(`✅ Success with model: ${model}`);
        return data;

      } catch (err) {
        console.log(`❌ Error with ${model} (attempt ${attempt + 1}):`, err.message);

        if (attempt === 2) break; // move to next model
        await sleep(1500);
      }
    }
  }

  throw new Error("❌ All models failed");
};