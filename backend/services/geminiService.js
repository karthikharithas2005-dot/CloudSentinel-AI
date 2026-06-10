const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeThreat(alert) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const prompt = `
Analyze this cloud security alert:

Title: ${alert.title}
Severity: ${alert.severity}
Description: ${alert.description}

Provide:
1. Threat Summary
2. Business Impact
3. Recommended Actions
4. Risk Assessment
`;

    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.error("GEMINI ERROR:");
    console.error(error);

    return `AI Error: ${error.message}`;
  }
}

module.exports = {
  analyzeThreat,
};
